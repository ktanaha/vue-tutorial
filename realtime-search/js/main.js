var app = new Vue({
  el: "#app",
  data: {
    items: null,
    keyword: "",
    message: ""
  },
  watch: {
    keyword: function(newKeyword, oldKeyword) {
      this.message = "Waiting for your typing...";
      this.debouncedGetAnswer();
    }
  },
  created: function() {
    this.keyword = "JavaScript";
    //this.getAnswer();
    this.debouncedGetAnswer = _.debounce(this.getAnswer , 1000);
  },
  methods: {
    getAnswer: function() {
      if (this.keyword === "") {
        this.items = null;
        return;
      }

      this.message = "Loading...";

      var vm = this;
      var params = { page: 1, per_page: 20, query: this.keyword };
      axios
        .get("http://qiita.com/api/v2/items", { params })
        .then(function(response) {
          vm.items = response.data;
        })
        .catch(function(error) {
          vm.message = "Error" + error;
        })
        .finally(function() {
          vm.message = "";
        });
    }
  }
});
