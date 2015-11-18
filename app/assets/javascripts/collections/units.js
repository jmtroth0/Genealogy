Genealogy.Collections.Units = Backbone.Collection.extend({
  model: Genealogy.Models.Unit,
  url: 'api/units',
  type: 'unit',

  comparator: 'id'
});
