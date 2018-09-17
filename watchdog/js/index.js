var app = new Vue({
  el: "#app",
  data: {
    firstName: "",
    lastName: ""
    //fullName: ""
  },
  computed: {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  /*
  watch: {
    firstName: function(value) {
      this.fullName = value + " " + this.lastName;
    },
    lastName: function(value) {
      this.fullName = this.firstName + " " + value;
    }
  }
  */
});
