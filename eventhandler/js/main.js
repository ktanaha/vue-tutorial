var app = new Vue({
  el: "#app",
  data: {
    counter: 0,
    message: ""
  },
  methods: {
    clickHandler: function($event, message) {
      this.counter++;
      this.message = new Date().toLocaleTimeString();
    },
    clear: function() {
      console.log("clear");
      this.message = "";
    }
  }
});
