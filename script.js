function calculatematurityamount(){
	// Get the Input values from the form elements
	const principle =parseFloat(document.getElementByid('principle').value);
const interestrate =parseFloat(document.getElementByid('interestrate').value);
const tenure =parseFloat(document.getElementByid('tenure').value);
   //perform maturity amount

  const maturityamount=principle + (principle *interestrate * tenure)/100;

  //display the result
  document.getElementByid('result').innerText='Maturity Amount: ${maturityamount.tofixed(2)}';



}

//attach the event listener to the calculate button
document.getElementByid('calculatebtn').addEventlistener('click',calculatematurityamount);
