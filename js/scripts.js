
// Business
function numberTranslate(number) {
  let numberDisplay = [];
  for (let i = 0; i <= number; i++) {
    if (i.toString().includes(3)) {
      numberDisplay.push("Won't you be my neighbor?");
    } else {
      numberDisplay.push(i);
    } 
  };
  return numberDisplay; 
};
  

// User
