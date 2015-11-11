Backbone.View.prototype.makeFormModal = function(options) {
  var modal = JST['shared/form_modal']({content: options.content});
  return $(modal);
};

Backbone.View.prototype.makeModal = function(options) {
  var modal = JST['shared/modal']({content: options.content});
  return $(modal);
};

Backbone.View.prototype.addEvents = function(events) {
  this.events = this.events || {};
  this.delegateEvents( _.extend(this.events, events) );
};
