Genealogy.Views.SectionIndexItem = Genealogy.Views.IndexItem.extend(
  _.extend({}, Genealogy.Mixins.FormModal, {

  template: JST['sections/index_item'],
  tagName: 'li',
  className: 'section',

  initialize: function (options) {
    this.formViewType = Genealogy.Views.SectionFormView;
    this.initializeItem(options);
    this.$el.data('section-id', options.model.id);
  },
}));
