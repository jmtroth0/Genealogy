Genealogy.Models.FamilyMember = Backbone.Model.extend({
  urlRoot: 'api/family_members',

  name: function () {
    return this.escape('fname') + " " + this.escape('lname');
  },

  parentA: function () {
    return this.collection.getOrFetch(this.get('parent_a_id'));
  },

  parentB: function () {
    return this.collection.getOrFetch(this.get('parent_b_id'));
  },

  parents: function () {
    var parents = [];
    if (this.get('parent_a_id')) parents.push(this.parentA());
    if (this.get('parent_b_id')) parents.push(this.parentB());
    return parents;
  },

  children: function () {
    return this.collection.filter(function (person){
      return person.get('parent_a_id') === this.id ||
             person.get('parent_b_id') === this.id;
    }.bind(this));
  },

  // getSortedFamily: function () {
  //   // var descendants = this.getDescendants();
  //   var ancestors = this.getAncestors();
  //   return ancestors.concat(descendants.reverse());
  // },
  //
  // getDescendants: function () {
  //   var children = this.children();
  //   if (children.length === 0) return [[this]];
  //   var descendants = [];
  //   children.forEach(function (child) {
  //     var subDescendants = child.getDescendants();
  //     this.addToFamilySet(descendants, subDescendants);
  //   }.bind(this));
  //   return descendants;
  // },
  //
  // getAncestors: function () {
  //   var parents = this.parents();
  //   var ancestors = [];
  //   parents.forEach(function (parent) {
  //     var subAncestors = parent.getAncestors();
  //     this.addToFamilySet(ancestors, subAncestors);
  //   }.bind(this));
  //   return ancestors;
  // },
  //
  // addToFamilySet: function(set, subset){
  //   subset.forEach(function(generation, idx){
  //     if (set[set.length - idx]) {
  //       set[set.length - idx].push(generation);
  //     } else {
  //       // set += generation;
  //       set.push(generation);
  //     }
  //   });
  // }
});
