Genealogy.Collections.Units = Backbone.Collection.extend({
  model: Genealogy.Models.Unit,
  url: 'api/units',

  comparator: 'id'
});
