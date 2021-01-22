1. //kilometerToMeter :
function kilometerToMeter(kilometer) {
 var meter = kilometer*1000; 
 return meter;
}
var meter = kilometerToMeter(5);
console.log(meter);

 2. // Budget Calculator :  

 function budgetCalculator(watch, phone, laptop) {
   if (watch < 0 || phone < 0 || laptop < 0) {
     return "ERORR!!! negative value is not allowed!!!! ";
   } 
    
   else {
     var totalBudget = (watch*50) + (phone*100)+ (laptop*500);
     return totalBudget;
   }
 } 
 var totalPrice = budgetCalculator(1,1,1); 
 console.log(totalPrice); 

 3. //hotelCost : 

 function hotelCost(days) {
   var costs = 0;
   if (days < 0) {
     return "ERORR!!! Days never be negative";
   } 
   else if (days <= 10) {
     var costs = days*100;
   } else if (days <= 20) {
     var first10Days = 10 * 100;
     var remainingDays = days - 10;
     var second10Days = remainingDays * 80;
     costs = firstTenDays + secondTenDays;
   }
    else {
     var first10Days = 10 * 100;
     var second10Days = 10 * 80;
     var lastDays = days - 20;
     var lastOfTheDays = lastDays * 50;
     costs = first10Days + second10Days + lastOfTheDays;
   }
   return costs;
 }


 4. // megaFriend : 

function megaFriend(friendNames) {
    var friendnameLength = 0;

    var longestName;

    if ( friendNames == 0) {
      return "There is no name! Please Enter some name.";
    } 
    else {
     
        for (var x = 0; x < friendNames.length; x++) {
       
            if (friendNames[x].length > friendnameLength) {
          var friendnameLength = friendNames[x].length;
          longestName = friendNames[x];
        }
      }
    }
    return longestName;
  }











