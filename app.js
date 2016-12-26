(function() {

    var AppComponent = ng.core.Component({
        selector: 'my-app',
        template: '<h1>Hello World!</h1>'
    }).Class({
        constructor: function() { }
    });

    var AppModule = ng.core.NgModule({
        import: [ ng.platformBrowser.BrowserModule ],
        declarations: [ AppComponent ]
    }).Class({
        constructor: function() { }
    });

    ng.platformBrowserDynamic.platformBrowserDynamic()
        .bootstrapModule(AppModule);
    
})();