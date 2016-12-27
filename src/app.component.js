(function(app) {

  var Component = ng.core.Component;

  class AppComponent { } 

  app.AppComponent = Component({
    selector: 'my-app',
    template: `
      <h1>Random Quotes</h1>
      <random-quote></random-quote>
    `      
  })(AppComponent);



})(window.app || (window.app = {}));
