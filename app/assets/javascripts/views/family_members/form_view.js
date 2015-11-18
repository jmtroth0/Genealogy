Genealogy.Views.PersonFormView = Genealogy.Views.FormView.extend({
  template: JST['family_members/form'],

  render: function () {
    Genealogy.Views.FormView.prototype.render.call(this).addParentOptions();
    return this;
  },

  addParentOptions: function () {
    this.collection.each(function(person){
      var $option = $('<option>');
      $option.val(person.id);
      $option.html(person.name());
      var selector = 'select.select-parent';
      if (person.id === this.model.get('parent_a_id')) {
        this.$el.find(selector + '.parentB').append($option.clone());
        $option.prop('selected', true);
        selector += '.parentA';
      } else if (person.id === this.model.get('parent_b_id')) {
        this.$el.find(selector + '.parentA').append($option.clone());
        $option.prop('selected', true);
        selector += '.parentB';
      }
      this.$el.find(selector).append($option);
    }.bind(this));
  },
});
