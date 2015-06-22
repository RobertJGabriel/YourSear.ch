"use strict";
window.APP = window.APP || {};
APP.NoteRouter = Backbone.Router.extend({
  routes: {
    "note/new": "create",
    "notes/index": "index",
    "note/:id/view": "show"
  },

  initialize: function (options) {
    this.notes = options.notes;
    // this is debug only to demonstrate how the backbone collection / models work
    this.notes.bind('reset', this.updateDebug, this);
    this.index();
  },

  updateDebug: function () {
    $('#output').text(JSON.stringify(this.notes.toJSON(), null, 4));
  },



  show: function (id) {
    var note = this.notes.get(id);
    this.currentView = new APP.NoteShowView({
      note: note
    });
    $('#primary-content').html(this.currentView.render().el);
  },

  index: function () {
    this.currentView = new APP.NoteIndexView({
      notes: this.notes
    });
    $('#primary-content').html(this.currentView.render().el);
    // we would call to the index with
    // this.notes.fetch()
    // to pull down the index json response to populate our collection initially
  }
});
