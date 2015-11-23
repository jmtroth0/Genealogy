Genealogy.Models.Submission = Backbone.Model.extend ({
  type: 'submission',

  urlRoot: function() {
    return "api/units/" + (this.unit_id || this.collection.unit_id) + "/submissions";
  },

  parse: function (payload) {
    if (payload.photos) {
      this.photos().set(payload.photos, { parse: true });
      delete payload.photos;
    }
    if (payload.documents) {
      this.documents().set(payload.documents, { parse: true });
      delete payload.documents;
    }
    return payload;
  },

  photos: function () {
    this._photos = this._photos || new Genealogy.Collections.Photos([]);

    return this._photos;
  },

  documents: function () {
    this._documents = this._documents || new Genealogy.Collections.Documents([]);

    return this._documents;
  },
});
