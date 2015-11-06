Genealogy.Models.FamilyMember = Backbone.Model.extend({
  urlRoot: 'api/family_members',

  name: function () {
    return this.escape('fname') + " " + this.escape('lname');
  }
});
