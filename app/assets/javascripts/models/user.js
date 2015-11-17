Genealogy.Models.User = Backbone.Model.extend({
  urlRoot: 'api/users',

  type: "user",

  parse: function (payload) {
    // students
    if (payload.section) {
      this.section(payload.section, {parse: true});
      delete payload.section;
    }

    // teachers
    if (payload.sections) {
      this.sections().set(payload.sections, { parse: true });
      delete payload.sections;
    }
    return payload;
  },

  family: function () {
    this._family = this._family || new Genealogy.Collections.FamilyMembers([]);

    return this._family;
  },

  section: function (section, options) {
    if (section) {
      this._section = new Genealogy.Models.Section(section, options);
    } else {
      this._section = this._section || new Genealogy.Models.Section();
    }

    return this._section;
  },

  sections: function () {
    this._sections = this._sections || new Genealogy.Collections.Sections([]);

    return this._sections;
  },

  name: function () {
    return this.escape('fname') + " " + this.escape('lname');
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

Genealogy.Models.Teacher = Genealogy.Models.User.extend({
  urlRoot: 'api/teachers',
});

Genealogy.Models.Student = Genealogy.Models.User.extend({
  urlRoot: 'api/students',
});
