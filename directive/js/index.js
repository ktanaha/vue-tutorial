var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Template!"
  },
  methods: {
    clickHandler: function(event) {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
});
