// main controller
app.controller("mainController",function($scope,getItemList){
	// =====push json data to local=======
	 getItemList.getResData().then(function(res) {
	 	if(sessionStorage){
	 		if(sessionStorage.getItem("listItems") == null){
				sessionStorage.setItem("total_cart_count",0);
				sessionStorage.setItem("total_cart_amount",0);
				sessionStorage.setItem("listItems",JSON.stringify(res.data));
				sessionStorage.setItem("listItems",JSON.stringify(res.data));
				$scope.content = JSON.parse(sessionStorage.getItem("listItems"));
			 	$scope.total_cart_count=sessionStorage.getItem("total_cart_count");
			 	$scope.total_cart_amount=sessionStorage.getItem("total_cart_amount");
			}else{
				$scope.content = JSON.parse(sessionStorage.getItem("listItems"));
				$scope.total_cart_count=sessionStorage.getItem("total_cart_count");
			 	$scope.total_cart_amount=sessionStorage.getItem("total_cart_amount");
			}
	 	}
	 });

	 // =========local space for totla count and amout list==========
	 $scope.addToCart=function(thisItem,index){
	 	if($scope.content[index].cart_count == null){
	 		$scope.content[index].cart_count=0;
	 		$scope.content[index].cart_total=0;
	 	}
	 	for(var item in $scope.content){
	 		if(index == item){
	 			$scope.total_cart_count=parseFloat($scope.total_cart_count)+1;
	 			$scope.total_cart_amount=parseFloat($scope.total_cart_amount)+parseFloat(thisItem.price);
	 			$scope.content[item].cart_count+=1;
	 			$scope.content[item].cart_total=Math.ceil($scope.content[item].cart_count*parseFloat(thisItem.price));
	 		}
	 	}
	 	console.log($scope.content[index].cart_count);
	 	pushOffline("listItems",$scope.content);
	 	sessionStorage.setItem("total_cart_count",$scope.total_cart_count);
		sessionStorage.setItem("total_cart_amount",$scope.total_cart_amount);
	 };
	 $scope.removeFromCart=function(thisItem,index){
	 	if($scope.content[index].cart_count <= 0){
	 		$scope.content[index].cart_count=0;
	 		$scope.content[index].cart_total=0;
	 	}else{
		 	for(var item in $scope.content){
		 		if(index == item){
		 			$scope.total_cart_count=parseFloat($scope.total_cart_count)-1;
		 			$scope.total_cart_amount=parseFloat($scope.total_cart_amount)-parseFloat(thisItem.price);
		 			$scope.content[item].cart_count-=1;
		 			$scope.content[item].cart_total-=parseFloat(thisItem.price);
		 		}
		 	}
	 	}
	 	pushOffline("listItems",$scope.content);
	 	sessionStorage.setItem("total_cart_count",$scope.total_cart_count);
		sessionStorage.setItem("total_cart_amount",$scope.total_cart_amount);
	 };
	 $scope.removeAllFromCart=function(thisItem,index){
	 	for(var item in $scope.content){
	 		if(index == item){
	 			$scope.total_cart_count=parseFloat($scope.total_cart_count)-thisItem.cart_count;
	 			$scope.total_cart_amount=parseFloat($scope.total_cart_amount)-parseFloat(thisItem.cart_total);
	 			$scope.content[item].cart_count=0;
	 			$scope.content[item].cart_total=0;
	 		}
	 	}
	 	pushOffline("listItems",$scope.content);
	 	sessionStorage.setItem("total_cart_count",$scope.total_cart_count);
		sessionStorage.setItem("total_cart_amount",$scope.total_cart_amount);
	 };
});