Genealogy.Collections.Photos = Backbone.Collection.extend({
  model: Genealogy.Models.Photo,
  url: 'api/photos',
  type: 'photo',

  comparator: 'id',
});
