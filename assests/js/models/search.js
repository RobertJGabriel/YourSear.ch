  var router = new APP.NoteRouter({
      notes: new APP.NoteCollection()
  });

  // we manually pass in the initial data, but this would be called with a collection.fetch() normally
  router.notes.reset([
      {
          "title": "Example Note 1",
          "id": "45",
          "url": "http://www.google.ie",
          "description": "Pinterest biodiesel excepteur, ad etsy gluten-free semiotics ennui before they sold out irony ut deserunt jean shorts."
                        },
      {
          "title": "Example Note 1",
          "id": "25",
          "url": "http://www.bing.com",
          "description": "Pinterest biodiesel excepteur, ad etsy gluten-free semiotics ennui before they sold out irony ut deserunt jean shorts."
                        },
      {
          "title": "Example Note 1",
          "id": "15",
          "url": "http://www.yahoo.ie",
          "description": "Pinterest biodiesel excepteur, ad etsy gluten-free semiotics ennui before they sold out irony ut deserunt jean shorts."

                        }
                    ]);
  // now that everyting is setup we tell backbone to watch the urls
  Backbone.history.start();
