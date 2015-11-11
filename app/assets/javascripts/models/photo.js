Genealogy.Models.Photo = Backbone.Model.extend({
  urlRoot: 'api/photos',

  type: "photo",
  attachmentType: "image",

  toJSON: function () {
    return { photo: _.clone( this.attributes ) };
  },
});
