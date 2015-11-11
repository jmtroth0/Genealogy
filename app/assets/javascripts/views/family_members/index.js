Genealogy.Views.FamilyIndex = Backbone.IndexView.extend(
  _.extend({}, Genealogy.Mixins.FormModal, {

  className: 'family-main-index',

  initialize: function (options) {
    this.user = options.user;
    this.collection = this.user.family();

    this.formViewType = Genealogy.Views.PersonFormView;
    this.indexItemView = Genealogy.Views.FamilyIndexItem;
    this.listenTo(this.user, 'sync', this.render);

    Backbone.IndexView.prototype.initialize.call(this);
  },
}));
