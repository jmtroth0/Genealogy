Genealogy.Views.ShowView = Backbone.CompositeView.extend(
  _.extend({}, Genealogy.Mixins.FormModal, {

  events: {
    "click .close-modal": "close",
    "click .edit": "openForm",
    "click .next-section": "switchToNext",
    "click .previous-section": "switchToPrevious",
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    $(document).on('keyup', this.keyHandler.bind(this));
  },

  switchToNext: function (e) {
    e.preventDefault();
    this.model = this.model.getNextModel();
    this.render();
  },

  switchToPrevious: function (e) {
    e.preventDefault();
    this.model = this.model.getPreviousModel();
    this.render();
  },

  keyHandler: function (e) {
    if (e.keyCode === 39) {
      this.switchToNext(e);
    } else if (e.keyCode === 37) {
      this.switchToPrevious(e);
    } else if (e.keyCode === 27) {
      e.preventDefault();
      this.close();
    }
  },

  close: function () {
    this.remove();
  },

  remove: function () {
    $(window).off("resize", this.adjustPhotoSize);
    $(document).off('keyup', this.keyHandler.bind(this));
    Backbone.View.prototype.remove.apply(this, arguments);
  }
}));
