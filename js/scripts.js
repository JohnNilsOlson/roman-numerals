

function convert(numInput) {
  if (numInput < 1 || numInput > 3999) {
    return alert("Please enter a number between 1 and 3,999");
  } else {
    return alert("Thank you!")
  }
}


$(document).ready(function() {
  $("form#formInput").submit(function(event) {
    event.preventDefault();
    const numInput = parseInt($("input#numInput").val());
      console.log(numInput);
      convert(numInput);
  });
});