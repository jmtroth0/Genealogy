Genealogy.Collections.Sections = Backbone.Collection.extend({
  model: Genealogy.Models.Section,
  url: 'api/sections',

  comparator: 'id'
});
