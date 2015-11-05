Genealogy.Collections.FamilyMembers = Backbone.Collection.extend({
  model: Genealogy.Models.FamilyMember,
  url: 'api/family_members',
});
