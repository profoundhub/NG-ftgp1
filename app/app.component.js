(function(app) {
    
    var Component = ng.core.Component;

    var AppComponent = Component({
        selector: 'my-app',
        template: '<h1>Random Quotes!</h1>' + 
            '<random-quote></random-quote>'
    })
    .Class({
        constructor: function AppComponent() { }
    });

})(window.app || (window.app = {}));