window.Genealogy = {
  Models: {},
  Collections: {},
  Views: {},
  Mixins: {},
  Routers: {},
  initialize: function(options) {
    this.logo = options.logo;
    this.router = new Genealogy.Routers.Router($('div#backdrop'));
    Backbone.history.start();
  }
};
