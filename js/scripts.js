// Business

function numberTranslate(number) {
  let numberDisplay = [];
  for (let i = 0; i <= number; i++) {
    if (i.toString().includes(3)) {
      numberDisplay.push("Won't you be my neighbor?");
    } else if (i.toString().includes(2)) {
        numberDisplay.push("Boop!");
    } else if (i.toString().includes(1)) {
        numberDisplay.push("Beep!");
    } else {
      numberDisplay.push(i);
    } 
  };
  return numberDisplay; 
};


//User

$(document).ready(function() {
	$("#calculate").submit(function(event) {
  event.preventDefault();
  let number = $("#numberInput").val();
  let output = numberTranslate(number);
    $("#calculate").click(function() {
    $("#numberOutput").text(output);
  });
});
});
