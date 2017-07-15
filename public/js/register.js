$(document).ready(function () {

  // Getting jQuery references to the post body, title, form, and category select
  var usernameInput = $("#username");
  var emailInput = $("#email");
  var passwordInput = $("#password");
  
  // Adding an event listener for when the form is submitted
  $("#add-btn").on("click", function handleFormSubmit(event) {

    event.preventDefault();

    // Wont submit the post if we are missing a body or a title
    if (!emailInput.val().trim() || !passwordInput.val().trim()) {
      return;
    }
    // Constructing a newEvent object to hand to the database
    var newUser = {
      username: usernameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    // // Submits a new post and brings user to newsfeed upon completion

    axios.post('/api/register', newUser)
    .then(function (resp) {
      window.location.href = '/newsfeed'
    })
    .catch(function (err) {
      console.log(err)
      // ERROR MSG GOES HERE
    })
  });

});