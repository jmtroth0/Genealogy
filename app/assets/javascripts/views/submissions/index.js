Genealogy.Views.SubmissionsIndex = Genealogy.Views.IndexView.extend(
  _.extend({}, Genealogy.Mixins.FormModal, {

  className: 'submissions-main-index',

  initialize: function (options) {
    this.formViewType = Genealogy.Views.SubmissionFormView;
    this.indexItemView = Genealogy.Views.SubmissionIndexItem;
    this.listenTo(this.collection, 'add remove sync', this.render);
    Genealogy.Views.IndexView.prototype.initialize.call(this);
  },
}));
