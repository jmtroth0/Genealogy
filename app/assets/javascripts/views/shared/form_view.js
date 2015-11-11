Backbone.FormView = Backbone.View.extend({
  initializeForm: function (options){
    this.closeForm = options.closeCallback;
    this.addEvents({
      'click button.close-form': 'closeForm',
      "submit form": "submitForm"
    });
    this.status = options.status || this.model.isNew() ? 'create' : 'edit';
  },

  renderForm: function () {
    var $template = this.makeModal({
      content: this.template({
        model: this.model,
        status: this.status
      })
    });
    this.$el.append($template);
  },

  makeModal: function (options) {
    var modal = JST['shared/modal']({content: options.content});
    return $(modal);
  },
});
