// boot angular app
var app=angular.module("MasalaApp",[]);

// function goOffline(key,obj){
// 	if(sessionStorage){
// 		if(typeof sessionStorage.getItem(key) === null){
// 			sessionStorage.setItem(key,JSON.stringify(obj));
// 			return JSON.parse(sessionStorage.getItem(key));
// 		}else{
// 			return false;
// 		}
// 	}
// }
// function getOffline(key){
// 	if(sessionStorage){
// 		return JSON.parse(sessionStorage.getItem(key));
// 	}
// }
function pushOffline(key,obj){
	if(typeof sessionStorage.getItem(key) !== null){
		sessionStorage.setItem(key,JSON.stringify(obj));
		return JSON.parse(sessionStorage.getItem(key));
	}else{
		return false;
	}
}
