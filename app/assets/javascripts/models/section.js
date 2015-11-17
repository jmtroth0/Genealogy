Genealogy.Models.Section = Backbone.Model.extend ({
  urlRoot: 'api/sections',

  type: 'section',

  parse: function (payload) {
    if (payload.units) {
      this.units().set(payload.units, { parse: true });
      delete payload.units;
    }
    return payload;
  },

  units: function () {
    this._units = this._units || new Genealogy.Collections.Units([]);

    return this._units;
  },
});
