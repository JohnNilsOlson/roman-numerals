let numerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};


function convert(numInput) {
  if (numInput < 1 || numInput > 3999) {
    return alert("Please enter a number between 1 and 3,999");
  } else if (numInput === 1 || numInput === 5 || numInput === 10 || numInput === 50 || numInput === 100 || numInput === 500 || numInput === 1000) {
//    newString = (numInput).toString("");
    // let keys = Object.keys(numerals).numInput;
    // console.log(keys);
//    console.log( item );
    const key = Object.keys(numerals)[Object.values(numerals).indexOf(numInput)];
    console.log(key);
  } else {
    return alert("Sorry, that function is not available yet!")
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

