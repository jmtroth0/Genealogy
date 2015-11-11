Genealogy.Models.Document = Backbone.Model.extend({
  urlRoot: 'api/documents',

  toJSON: function () {
    return { document: _.clone( this.attributes ) };
  },
});
