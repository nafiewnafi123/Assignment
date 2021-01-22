1. //kilometerToMeter :
function kilometerToMeter(kilometer) {
 var meter = kilometer*1000; 
 return meter;

}
if (kiloMeter < 0) {
    return "ERORR!!! there is no negative value in kilometer!";
  } 
var meter = kilometerToMeter(5);
console.log(meter);


2. //budgetCalculator : 

function budgetCalculator(watch, phone, laptop){
    var total = (watch*50) + (phone*100) + (laptop*500);
    return total;
    
}
var totalPrice = budgetCalculator(1,1,1); 
console.log(totalPrice);

