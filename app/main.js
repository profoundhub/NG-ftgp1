(function(app) {
    
    var Component = ng.core.Component;
    var NgModule = ng.core.NgModule;
    var BrowserModule = ng.platformBrowser.BrowserModule;
    var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic;
    var QuoteService = app.QuoteService;

    var RandomQuoteComponent = Component({
        selector: 'random-quote',
        template: '<p><em>{{ quote.line }}</em> &#8212; <strong>{{ quote.author }}</strong></p>'
    })
    .Class({
        constructor: [QuoteService, function RandomQuoteComponent(quoteService) { 
            var self = this;
            quoteService.generateRandomQuotes(2000, function(quote) {
                self.quote = quote;
            });
        }]
    });

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