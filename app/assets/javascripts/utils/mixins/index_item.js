Genealogy.Mixins.IndexItem = {
  initializeItem: function (options) {
    this.listenTo(this.model, 'sync', this.render);
    this.addEvents({
      "click button.delete": "deleteModel",
      "click button.edit": "openForm"
    });
  },

  render: function () {
    this.$el.html(this.template({ model: this.model }));
    return this;
  },

  deleteModel: function (e) {
    // add a warning modal once there is more info to them
    if (this.destructionPending) { return; }
    e.currentTarget.val("Pending");
    this.destructionPending = true;

    this.model.destroy({
      wait: true,
      success: function () {
        this.$el.remove();
        this.destructionPending = false;
      }.bind(this),
      error: function (model, resp) {
        this.$el.append(resp.errors);
        this.destructionPending = false;
      }.bind(this)
    });
  },
};
