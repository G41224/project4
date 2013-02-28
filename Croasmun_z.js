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
			if (12 === phLen){
			return true;
				if (phLen = true && val.charAt(3) === "-"){       //Extra credit: nested conditional
					return true;
				}else{
					return false;
				}
			}else {
				return true;
			}
		}
		
		
		
	}
	
	return{
		"phoneNum": phoneNum
	}

	
	
};


var newLib = new library();

console.log(newLib.phoneNum("509-237-4867"));

