var app = new Vue({
  el: "#app",
  data: {
    items: null,
    keyword: "",
    message: ""
  },
  watch: {
    url: function() {}
  },
  created: function() {
    this.keyword = "JavaScript";
    this.getAnswer();
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
