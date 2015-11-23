Genealogy.Collections.Submissions = Backbone.Collection.extend({
  model: Genealogy.Models.Submission,

  type: "submission",

  initialize: function (unit_id) {
    this.unit_id = unit_id;
    this.url = "api/units/" + unit_id + "/submissions";
  },
});
