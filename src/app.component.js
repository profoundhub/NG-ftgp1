(function(app) {

  var Component = ng.core.Component;

  @Component({
    selector: 'my-app',
    template: `
      <h1>Random Quotes</h1>
      <random-quote></random-quote>
    `      
  })

  class AppComponent { } 

  app.AppComponent = AppComponent;

})(window.app || (window.app = {}));
