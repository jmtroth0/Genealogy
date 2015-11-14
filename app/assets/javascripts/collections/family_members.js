Genealogy.Collections.FamilyMembers = Backbone.Collection.extend({
  model: Genealogy.Models.FamilyMember,
  url: 'api/family_members',

// when adding age to attributes, add that facet
  comparator: function (person, otherPerson) {
    var origin = person.escape('generation');
    var other = otherPerson.escape('generation');

    if (origin) origin = parseInt(origin);
    if (other) other = parseInt(other);

    if (origin !== origin || origin > other) {
      return -1;
    } else if (origin === other) {
      return 0;
    } else if (other !== other || other > origin) {
      return 1;
    }
  },
});
