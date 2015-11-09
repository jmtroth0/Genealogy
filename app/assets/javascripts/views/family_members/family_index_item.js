Genealogy.Views.FamilyIndexItem = Backbone.CompositeView.extend(
  _.extend({}, Genealogy.Mixins.FormModal, {

  template: JST['family_members/index_item'],
  tagName: 'li',
  className: 'family-member',

  events: {
    "click button.delete": "deleteFamilyMember",
    "click button.edit": "openForm",
  },

  initialize: function (options) {
    this.model = options.model;

    this.formViewType = Genealogy.Views.PersonFormView;

    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ person: this.model }));
    return this;
  },

  deleteFamilyMember: function (e) {
    this.model.destroy();
    this.$el.remove(); // add a warning modal once there is more info to them
  },
}));
