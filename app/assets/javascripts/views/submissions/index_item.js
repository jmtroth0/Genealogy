Genealogy.Views.SubmissionIndexItem = Genealogy.Views.IndexItem.extend(
  _.extend({}, Genealogy.Mixins.FormModal, {

  template: JST['submissions/index_item'],
  tagName: 'li',
  className: 'submission-member',

  initialize: function (options) {
    this.formViewType = Genealogy.Views.SubmissionFormView;
    this.initializeItem(options);
  },
}));
