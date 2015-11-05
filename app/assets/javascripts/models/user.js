Genealogy.Models.User = Backbone.Model.extend({
  url: 'api/users',
});

Genealogy.Models.CurrentUser = Genealogy.Models.User.extend({
  url: 'api/current_user'
});
