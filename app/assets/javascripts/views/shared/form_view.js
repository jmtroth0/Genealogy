Backbone.FormView = Backbone.View.extend({
  initialize: function (options){
    this.closeForm = options.closeCallback;
    this.addEvents({
      'click button.close-form': 'closeForm',
      "submit form": "submitForm"
    });
    this.status = options.status || this.model.isNew() ? 'create' : 'edit';
  },

  render: function () {
    var $template = this.makeModal({
      content: this.template({
        model: this.model,
        status: this.status
      })
    });
    this.$el.append($template);
    return this;
  },

  submitForm: function (e) {
    e.preventDefault();
    if (this.formPending) { return; }
    this.formPending = true;

    var attrs = getAttrs(e)[this.model.type];
    if (this.status === "new") { this.collection.add(this.model); }

    var $button = $(e.target).find('button');
    $button.html('Pending');

    this.model.save(attrs, {
      success: function () {
        this.closeForm();
        this.formPending = false;
      }.bind(this),
      error: function (model, response) {
        var buttonText;
        if (this.status === "new") {
          this.collection.remove(model);
          buttonText = "Create";
        } else {
          buttonText = 'Submit Edit';
        }
        $button.html(buttonText);
        this.formPending = false;
      }.bind(this)
    });
  },

  getAttrs: function(e) {
    return $(e.target).serializeJSON();
  },
});
