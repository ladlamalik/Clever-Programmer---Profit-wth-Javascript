//Conditonal, conrol flows and if logics in JS

//18-35 is my targeted demographic

var age = 45;

if (age >= 18 && age <= 35) {
  status = 'Target Dmeo';
  console.log(status);
} else {
  status = 'not my adudience';
  console.log(status);
}

//Switch Statement
//differentiate between weekdays and weekends

switch (4) {
  case 0:
    text = 'weekend';
    break;
  case 5:
    text = 'weekend';
    break;
  case 6:
    text = 'weekend';
    break;

  default:
    text = 'weekday';
}

console.log(text);