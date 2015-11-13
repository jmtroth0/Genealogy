Backbone.IndexItem = Backbone.CompositeView.extend ({
  initializeItem: function (options) {
    this.listenTo(this.model, 'sync', this.render);
    this.addEvents({
      "click button.delete": "deleteModel",
      "click button.edit": "openForm"
    });
    this.removeCallback = options.remove;
  },

  render: function () {
    this.$el.html(this.template({ model: this.model }));
    return this;
  },

  deleteModel: function (e, options) {
    // add a warning modal once there is more info to them
    if (this.destructionPending) { return; }
    $(e.currentTarget).val("Pending");
    this.destructionPending = true;

    this.model.destroy({
      wait: true,
      success: function (model) {
        if (options && options.success) options.success();
        this.removeCallback(model);
        this.destructionPending = false;
      }.bind(this),
      error: function (model, resp) {
        if (options && options.error) options.error();
        this.$el.append(resp.errors);
        this.destructionPending = false;
      }.bind(this)
    });
  },
});
