$(document).ready(function(){

	// $.ajax({
  //     url: "/political",
  //     method: "GET",
  //   })
  //   .done(function(response) {
  //     console.log(response);
  //     // console.log(JSON.stringify(JSON.parse(response),null,2));
  // });

  axios.get('/political')
  .then(function(res) {
    console.log(res)
  })
});