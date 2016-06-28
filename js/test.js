var app=angular.module("MasalaApp",[]);
// main controller
app.controller("mainController",function($scope,getItemList){
	console.log(sessionStorage.getItem('cartItems'));
	if(sessionStorage.getItem('cartItems') == null){
		sessionStorage.removeItem('cartItems');
		sessionStorage.setItem('cartItems',0);
	}
	console.log(sessionStorage.getItem('cartItems'));
	$scope.cartItems=parseInt(sessionStorage.getItem('cartItems'));

	 getItemList.getResData().then(function(res) {
	 	$scope.content = res.data;
	 	console.log($scope.content);
	 })
    $scope.addToCart=function(thisCount){
 		if(thisCount.count==null){
	 		thisCount.count=1;
 		}else{
 			var countIn=thisCount.count;
 			thisCount.count=countIn+1;
 		}
 		$scope.cartItems+=1;
    	sessionStorage.setItem('cartItems', $scope.cartItems);
    };
    $scope.removeFromCart=function(thisCount){
 		if(thisCount.count==null){
	 		thisCount.count=1;
 		}else if(thisCount.count<=0){
 			return thisCount.count=0;
 		}else{
 			var countIn=thisCount.count;
 			thisCount.count=countIn-1;
 		}
    	$scope.cartItems-=1;
    	sessionStorage.setItem('cartItems', $scope.cartItems);

    };
});
