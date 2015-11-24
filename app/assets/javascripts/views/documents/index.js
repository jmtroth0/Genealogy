Genealogy.Views.DocumentsIndex = Genealogy.Views.IndexView.extend(
  _.extend({}, Genealogy.Mixins.FormModal, {

  className: 'documents-main-index group',

  initialize: function (options) {
    this.formViewType = Genealogy.Views.DocumentFormView;
    this.indexItemView = Genealogy.Views.DocumentIndexItem;

    Genealogy.Views.IndexView.prototype.initialize.call(this);
  },

  render: function () {
    Genealogy.Views.IndexView.prototype.render.call(this);
    setTimeout(function () {
      this.addDragResize();
    }.bind(this), 1000);
  },

  addDragResize: function () {
    interact('li.document-member')
      .draggable({ onmove: window.dragMoveListener })
      .resizable({ edges: { bottom: true } })
      .on('resizemove', function (event) {
        var target = event.target,
            y = (parseFloat(target.getAttribute('data-y')) || 0);

        // update the element's style
        target.style.height = event.rect.height + 'px';

        y += event.deltaRect.top;

        target.style.webkitTransform = target.style.transform =
            'translate(' + y + 'px)';

        target.setAttribute('data-y', y);
      });
  },
}));
