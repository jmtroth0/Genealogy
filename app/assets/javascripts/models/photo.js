Genealogy.Models.Photo = Backbone.Model.extend({
  urlRoot: 'api/photos',

  toJSON: function () {
    return { photo: _.clone( this.attributes ) };
  },
});
