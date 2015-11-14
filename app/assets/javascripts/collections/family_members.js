Genealogy.Collections.FamilyMembers = Backbone.Collection.extend({
  model: Genealogy.Models.FamilyMember,
  url: 'api/family_members',

// when adding age to attributes, add that facet
  comparator: function (person, otherPerson) {
    var origin = parseInt(person.escape('generation'));
    var other = parseInt(otherPerson.escape('generation'));

    if (origin !== origin || origin > other) {
      return -1;
    } else if (origin === other) {
      return 0;
    } else if (other !== other || other > origin) {
      return 1;
    }
  },
});
