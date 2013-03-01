/*
Croasmun Zachery
SDI project 4 term: 1302
library
*/


//alert("JavaScript works!");





var library = function (){
	
	//check phone number function
	var phoneNum = function (val){
		var phLen = val.length
		
			var totl  = 12 === phLen,
				char3 = val.charAt(3) === "-",
				char7 = val.charAt(7) === "-";	
			
			if (totl && char3 && char7){
					return true;
			
			}else {
				return false;
			
			}
		
		
		
		
	}
	// email checker 
	// I cannot get this function to work please help 
	// no matter what i try it is always true or always false
	var emailCheck = function(val){
		
		var emaLen = val.length;
			
		for (var i=0; i<=emaLen; i++){
			
			if(i === "@"){ // my problem is here i am having trouble with the if to find the @ and the . both as they would be the only constant char.
			return true;
			
			}else{
				
				return false;
			
			}
			
		}
		
		
	}
//check url function
	var urlCheck = function (val){
		
		var urlLen = val.length
		
		
			
			var char1 = val.charAt(0) === "h"
				char2 = val.charAt(2) === "t"
				char3 = val.charAt(3) === "p"			
			
			if (char1 && char2 && char3 && urlLen <= 8){
				
				return true;
				
			}else{
				return false;
			}
			
		
	}
	
	//tital case a string
	/* need help with this one as well I'm not sure how to make it work i 
	  know i can use toUpperCase() but not sure how to make it work correctly
	  also while doing research i found this alot /([^ -])([^ -]*)/gi 
	*/
	var capLett = function(str){
   		var words = str.split(" ");
   		var arr = Array();
   		
   		for (i in words){
      		
      		temp = words[i].toLowerCase();
      		temp = temp.charAt(0).toUpperCase() + temp.substring(1);
      		arr.push(temp);
   		}
   		
   		return arr.join(" ");
		}
		
	
	
	
	
	return{
		"phoneNum":   phoneNum,
		"emailCheck": emailCheck,
		"urlCheck":   urlCheck,
		"capLett":    capLett
	}

	
	
	
};


var newLib = new library();

console.log(newLib.phoneNum("509-237-4867"));
console.log(newLib.emailCheck("haha@gogor.com"))
console.log(newLib.urlCheck("https://"))
console.log(newLib.capLett("hello everyone this is fun"))

