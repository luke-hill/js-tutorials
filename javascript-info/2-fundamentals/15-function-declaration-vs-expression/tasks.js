// Replace the below ask function with an arrow function

// This is required to force the confirm function which requires a UI to return true
function confirm(question) {
  console.log(`Asking question: '${question}'`);
  return true;
}

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { console.log("You agreed."); },
  function() { console.log("You canceled the execution."); }
);

ask(
  "Do you agree?",
  () => console.log("You agreed."),
  () => console.log("You canceled the execution.")
);
