Genealogy.Collections.Documents = Backbone.Collection.extend({

  model: Genealogy.Models.Document,
  url: 'api/documents',
  type: 'document'
});
