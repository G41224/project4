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
		for (var i=0; 1<=phLen; i++){
			
			var totl  = 12 === phLen,
				char3 = val.charAt(3) === "-",
				char7 = val.charAt(7) === "-";	
			
			if (totl && char3 && char7){
					return true;
			
			}else {
				return false;
			
			}
		
		}
		
		
		
	}
	
	return{
		"phoneNum": phoneNum
	}

	
	
};


var newLib = new library();

console.log(newLib.phoneNum("509-237-4867"));

