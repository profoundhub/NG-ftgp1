(function() {
    var Component = ng.core.Component;
    var NgModule = ng.core.NgModule;
    var BrowserModule = ng.platformBrowser.BrowserModule;
    var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic;
    
    var RandomQuoteComponent = Component({
        selector: 'random-quote',
        template: '<p>{{ quote }}</p>'
    }).Class({
        constructor: function() { 
            this.quote = "Quote as a property.";
        }
    });

    var AppComponent = Component({
        selector: 'my-app',
        template: '<h1>Hello World!</h1>' + 
            '<random-quote></random-quote>'
    }).Class({
        constructor: function() { }
    });

    var AppModule = NgModule({
        imports: [  BrowserModule ],
        declarations: [ AppComponent, RandomQuoteComponent ],
        bootstrap: [ AppComponent ]
    }).Class({
        constructor: function() { }
    });

    platformBrowserDynamic().bootstrapModule(AppModule);

})();