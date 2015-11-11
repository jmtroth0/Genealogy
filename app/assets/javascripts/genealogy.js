window.Genealogy = {
  Models: {},
  Collections: {},
  Views: {},
  Mixins: {},
  Routers: {},
  initialize: function() {
    this.router = new Genealogy.Routers.Router($('div#backdrop'));
    Backbone.history.start();
  }
};
