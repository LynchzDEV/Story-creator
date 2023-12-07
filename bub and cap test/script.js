// Event listener for the div - Capturing Phase
document.getElementById('myDiv').addEventListener(
  'click',
  function () {
    alert('Div Clicked (Capturing Phase)');
  },
  true
); // true indicates capturing phase

// Event listener for the button - Bubbling Phase
document.getElementById('myButton').addEventListener('click', function (event) {
  alert('Button Clicked (Bubbling Phase)');
  // Uncomment the following line to stop the event from bubbling up
  // event.stopPropagation();
});
