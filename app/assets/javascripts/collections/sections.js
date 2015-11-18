Genealogy.Collections.Sections = Backbone.Collection.extend({
  model: Genealogy.Models.Section,
  url: 'api/sections',
  type: 'section',

  comparator: 'id'
});
