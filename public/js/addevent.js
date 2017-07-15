$(document).ready(function () {

  // Getting jQuery references to the post body, title, form, and category select
  var titleInput = $("#title");
  var locationInput = $("#location");
  var dateInput = $("#date");
  var descriptionInput = $("#description");

  // Adding an event listener for when the form is submitted
  $("#add-btn").on("click", function handleFormSubmit(event) {

    event.preventDefault();

    // Wont submit the post if we are missing a body or a title
    if (!titleInput.val().trim() || !locationInput.val().trim() || !dateInput.val().trim()) {
      return;
    }
    // Constructing a newEvent object to hand to the database
    var newEvent = {
      host: localStorage.getItem('userId'),
      title: titleInput.val().trim(),
      location: locationInput.val().trim(),
      date: dateInput.val().trim(),
      description: descriptionInput.val().trim()
    };

    // // Submits a new post and brings user to event page upon completion

    axios.post('/api/events', newEvent)
    .then(function (res) {
      localStorage.setItem('eventId', res.data.id);
      window.location.href = '/event';
    })
  });

});