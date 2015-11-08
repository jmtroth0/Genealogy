Genealogy.Models.FamilyMember = Backbone.Model.extend({
  urlRoot: 'api/family_members',

  name: function () {
    return this.escape('name') ||
      (this.escape('fname') + " " + this.escape('lname'));
  },

  parents: function () {
    var parents = [];
    if (this.get('parent_a_id')) parents.push(this.parentA());
    if (this.get('parent_b_id')) parents.push(this.parentB());
    return parents;
  },

  parentA: function () {
    return this.collection.getOrFetch(this.get('parent_a_id'));
  },

  parentB: function () {
    return this.collection.getOrFetch(this.get('parent_b_id'));
  },

  children: function () {
    return this.collection.filter(function (person){
      return person.get('parent_a_id') === this.id ||
             person.get('parent_b_id') === this.id;
    }.bind(this));
  },

  getSortedFamily: function () {
    var descendants = this.getDescendants();
    var ancestors = this.getAncestors();
    return ancestors.reverse().concat(descendants);
  },

  getDescendants: function (descendants, genDisplacement) {
    return this.getFamilySet(this.children);
  },

  getAncestors: function (ancestors, genDisplacement) {
    return this.getFamilySet(this.parents);
  },

  // once implemented at the model level, add partners also
  getFamilySet: function (callback, familySet, genDisplacement){
    var subFamilySet = callback.call(this);
    familySet = familySet || [];
    genDisplacement = genDisplacement || 0;
    this.addToFamilySet(familySet, subFamilySet, genDisplacement);
    subFamilySet.forEach(function (person) {
      person.getFamilySet(callback, familySet, genDisplacement + 1);
    });
    return familySet;
  },

  addToFamilySet: function(set, subset, genDisplacement){
    subset.forEach(function(person){
      if (Array.isArray(set[genDisplacement])) {
        set[genDisplacement].push(person);
      } else {
        set.push([person]);
      }
    });
  }
});
