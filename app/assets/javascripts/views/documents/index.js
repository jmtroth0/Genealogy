Genealogy.Views.DocumentsIndex = Genealogy.IndexView.extend(
  _.extend({}, Genealogy.Mixins.FormModal, {

  className: 'documents-main-index',

  initialize: function (options) {
    this.formViewType = Genealogy.Views.DocumentFormView;
    this.indexItemView = Genealogy.Views.DocumentIndexItem;

    Genealogy.IndexView.prototype.initialize.call(this);
  },
}));
