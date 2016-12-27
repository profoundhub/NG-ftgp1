

  var NgModule = ng.core.NgModule;
  var BrowserModule = ng.platformBrowser.BrowserModule;
  var QuoteService = app.QuoteService;
  var RandomQuoteComponent = app.RandomQuoteComponent;
  var AppComponent = app.AppComponent;

  @NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, RandomQuoteComponent ],
    providers: [ QuoteService ],
    bootstrap: [ AppComponent ]
  })

  export class AppModule { }