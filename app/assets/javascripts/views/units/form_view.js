Genealogy.Views.UnitFormView = Genealogy.Views.FormView.extend({
  template: JST['units/form'],

  initialize: function(options) {
    this.section_id = options.section_id;
    Genealogy.Views.FormView.prototype.initialize.call(this, options);
  },

  render: function () {
    var $template = this.makeFormModal({
      content: this.template({
        model: this.model,
        status: this.status,
        section_id: this.section_id
      })
    });
    this.$el.append($template);
    return this;
  },
});
