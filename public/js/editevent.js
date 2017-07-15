$(document).ready(function () {
  // Gets an optional query string from our url 
  var url = window.location.search;
  var eventId = localStorage.getItem('eventId');

  // Getting jQuery references to the event info
  var titleInput = $("#title");
  var locationInput = $("#location");
  var dateInput = $("#date");
  var descriptionInput = $("#description");

getEventData(eventId);

  // Gets event data for an event if we're editing
  function getEventData(id) {

    axios.get(`/api/events/${id}`)
      .then(function (res) {
        
        console.log(res.data);
        // If this event exists, prefill our form with its data
        titleInput.val(res.data.title);
        locationInput.val(res.data.location);
        dateInput.val(res.data.date);
        descriptionInput.val(res.data.description);
      })
      .catch(function (err) {
        console.log(err)
      })
  }


  //   // If we have this section in our url, we pull out the post id from the url
  //   getEventData(eventId);


  //   // Getting jQuery references to the event info
  //   var titleInput = $("#title");
  //   var locationInput = $("#location");
  //   var dateInput = $("#date");
  //   var descriptionInput = $("#description");

  //   // Adding an event listener for when the form is submitted
  //   $("#add-btn").on("click", function handleFormSubmit(event) {

  //     event.preventDefault();

  //     // Wont submit the event if we are missing required inputs
  //     if (!titleInput.val().trim() || !locationInput.val().trim() || !dateInput.val().trim()) {
  //       return;
  //     }

  //        // Constructing a newPost object to hand to the database
  //     var newEvent = {
  //       host: hostInput.val().trim(),
  //       title: titleInput.val().trim(),
  //       location: locationInput.val().trim(),
  //       date: dateInput.val().trim(),
  //       description: descriptionInput.val().trim()
  //     };

  //     newEvent.id = eventId;
  //     updateEvent(newEvent);
  //   });

  //   // Gets event data for an event if we're editing
  //   function getEventData(id) {

  //     axios.get(`/api/events/${id}`)
  //     .then(function (data) {
  //       // If this event exists, prefill our form with its data
  //         titleInput.val(data.title);
  //         locationInput.val(data.location);
  //         dateInput.val(data.date);
  //         descriptionInput.val(data.description);
  //     })
  //   }
  //   // Update a given an event, bring user to the blog page when done
  //   function updateEvent(eventData) {

  //     axios.put('/api/events', eventData)
  //     .then(function (res) {
  //       window.location.href = '/event'
  //     })

  //   }
});