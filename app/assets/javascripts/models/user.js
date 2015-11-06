Genealogy.Models.User = Backbone.Model.extend({
  url: 'api/users',

  parse: function (payload) {
    if (payload.family_members) {
      this.family().set(payload.family_members);
      delete payload.family_member;
    }
    return payload;
  },

  family: function () {
    this._family = this._family || new Genealogy.Collections.FamilyMembers([]);

    return this._family;
  }
});

Genealogy.Models.CurrentUser = Genealogy.Models.User.extend({
  url: 'api/current_user'
});
