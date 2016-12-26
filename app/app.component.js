(function(app) {
    
    var Component = ng.core.Component;
    var NgModule = ng.core.NgModule;
    var BrowserModule = ng.platformBrowser.BrowserModule;
    var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic;

    var QuoteService = app.QuoteService;
    var RandomQuoteComponent = app.RandomQuoteComponent;

    var AppComponent = Component({
        selector: 'my-app',
        template: '<h1>Random Quotes!</h1>' + 
            '<random-quote></random-quote>'
    })
    .Class({
        constructor: function AppComponent() { }
    });

    var AppModule = NgModule({
        imports: [  BrowserModule ],
        declarations: [ AppComponent, RandomQuoteComponent ],
        providers: [ 
            QuoteService
        ],
        bootstrap: [ AppComponent ]        
    })
    .Class({
        constructor: function AppModule() { }
    });

    platformBrowserDynamic().bootstrapModule(AppModule);


})(window.app || (window.app = {}));