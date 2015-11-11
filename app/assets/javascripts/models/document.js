Genealogy.Models.Document = Backbone.Model.extend({
  urlRoot: 'api/documents',

  type: "document",
  attachmentType: "file",

  toJSON: function () {
    return { document: _.clone( this.attributes ) };
  },
});
