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
  },

  name: function () {
    return this.fname + " " + this.lname;
  }
});

Genealogy.Models.CurrentUser = Genealogy.Models.User.extend({
  url: 'api/current_user',

  isSignedIn: function () {
    return this.isNew();
  },

  signOut: function(options){
    var model = this;

    $.ajax({
      url: "api/session/",
      type: "DELETE",
      dataType: 'json',
      success: function(data){
        model.clear();
        options.success && options.success();
      }
    });
  },
});
