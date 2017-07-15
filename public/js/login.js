$(document).ready(function () {

  // Getting jQuery references to the post body, title, form, and category select
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
    var userLogin = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    

    axios.post('/api/login', userLogin)
    .then(function (res) {
      console.log(res)
      if (res.data) {
        localStorage.setItem('userId', res.data);
        window.location.href = '/newsfeed';
      } else {
        // ERROR MSG GOES HERE
      }
    })
    .catch(function (err) {
      console.log(err)
    })

  });

});