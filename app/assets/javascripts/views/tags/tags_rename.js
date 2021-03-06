Nevernote.Views.TagRename = Backbone.View.extend({
  id: "lightbox-dialog",

  events: {
    "click button.save" : "save",
    "click button.cancel" : "cancel"
  },

  render: function() {
    this.$el.html(JST['tags/rename']({
        tag: this.model
    }));

    return this;
  },

  save: function(event) {
    event.preventDefault();
    var formData = $(event.target.form).serializeJSON();
    this.model.save(formData);
    this.leave();
  },

  cancel: function(event) {
    event.preventDefault();
    this.leave();
  },

  leave: function() {
    $('#lightbox').toggleClass('hide');
    this.off();
    this.remove();
  }

});
