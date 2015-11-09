window.Genealogy = {
  Models: {},
  Collections: {},
  Views: {},
  Mixins: {},
  Routers: {},
  initialize: function() {
    this.router = new Genealogy.Routers.Router($('div#main'));
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Genealogy.initialize();
});
