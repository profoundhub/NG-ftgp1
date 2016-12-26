(function(app) {
    
    var Component = ng.core.Component;    
    var QuoteService = app.QuoteService;

    app.RandomQuoteComponent = Component({
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

})(window.app || (window.app = {}));