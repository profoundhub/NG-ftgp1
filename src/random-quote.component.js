(function(app) {
  
  let Component = ng.core.Component;
  let Inject = ng.core.Inject;
  let QuoteService = app.QuoteService;

  @Component({
    selector: 'random-quote',
    template: '<p><em>{{quote.line}}</em> - {{quote.author}}</p>'
  })

  class RandomQuoteComponent {
      constructor(@Inject(QuoteService) quoteService) {
        quoteService.generateRandomQuotes(2000, quote => this.quote = quote);      
      } 
  }

  app.RandomQuoteComponent = RandomQuoteComponent;

})(window.app || (window.app = {}));
