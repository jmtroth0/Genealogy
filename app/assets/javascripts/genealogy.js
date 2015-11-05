window.Genealogy = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.router = new Genealogy.Routers.Router({ $rootEl: $('div#main') });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Genealogy.initialize();
});
