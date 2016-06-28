var app=angular.module("MasalaApp",[]);
// main controller
app.controller("mainController",function($scope,getItemList){
	 getItemList.getResData().then(function(res) {
	 	$scope.content = res.data;
	 	// console.log($scope.content);
	 });
	sessionStorage.removeItem('cartItems');
	if(sessionStorage.getItem('cartItems') == null){
		$scope.cartItemsList={
			count:0,
			total_Amount:0,
			carted_items:{},
		};
		sessionStorage.removeItem('cartItems');
		sessionStorage.setItem('cartItems',JSON.stringify($scope.cartItemsList));
		var temp=sessionStorage.getItem('cartItems');
		$scope.cartItems=JSON.parse(temp);
	}
	
    $scope.addToCart=function(thisCount){
    	// sessionStorage.removeItem(thisCount.$$hashKey);
    	// console.log(sessionStorage.getItem(thisCount.$$hashKey));
    	var getItem2=0;
    	var temp1=0;
		if(sessionStorage.getItem(thisCount.$$hashKey) == null){
			sessionStorage.setItem(thisCount.$$hashKey,JSON.stringify({
				hashKey:thisCount.$$hashKey,
			}));
			getItem2=sessionStorage.getItem(thisCount.$$hashKey);
			temp1=JSON.parse(getItem2);
		}else{
			// console.log(thisCount.$$hashKey);
			getItem2=sessionStorage.getItem(thisCount.$$hashKey);
			temp1=JSON.parse(getItem2);
			// thisCount.count=temp1.count;
			// thisCount.total=temp1.total;
		}
		// console.log(temp1.count);
 		if(typeof temp1.item_count == null){
	 		temp1.item_count=1;
	 		sessionStorage.setItem(thisCount.$$hashKey,JSON.stringify({
    		item_name:thisCount.productName,
			item_count:temp1.item_count,
			item_total:temp1.item_total*thisCount.price,
    	}));
	 		$scope.cartItemsList.carted_items.thisCount.$$hashKey={
	    		item_name:thisCount.productName,
				item_count:temp1.item_count,
				item_total:temp1.item_total*thisCount.price,
	    	}
 		}else{
 			// var countIn=temp1.count;
 			temp1.item_count+=1;
 			sessionStorage.setItem(thisCount.$$hashKey,JSON.stringify({
    		item_name:thisCount.productName,
			item_count:temp1.item_count,
			item_total:temp1.item_total*thisCount.price,
    	}));
 			$scope.cartItemsList.carted_items[thisCount.$$hashKey]={
	    		item_name:thisCount.productName,
				item_count:temp1.item_count,
				item_total:temp1.item_total*thisCount.price,
	    	}
 		}
 		thisCount.count=temp1.item_count;
 		thisCount.hashKey=thisCount.$$hashKey,
 		console.log(thisCount);
   //  	$scope.cartItemsList.carted_items.$$hashKey={
   //  		item_name:temp1.productName,
			// item_count:temp1.count,
			// item_total:temp1.total,
   //  	};
    	// console.log($scope.cartItemsList.carted_items.$$hashKey);
 		var temp=sessionStorage.getItem('cartItems');
		$scope.cartItems=JSON.parse(temp);
 		$scope.cartItems.count+=1;
 		$scope.cartItems.total_Amount+=parseFloat(thisCount.price);
    	sessionStorage.setItem('cartItems',JSON.stringify($scope.cartItems));
    	console.log($scope.cartItemsList.carted_items);
    };
    $scope.removeFromCart=function(thisCount){
 		
    	if(sessionStorage.getItem(thisCount.$$hashKey) == null){
			sessionStorage.setItem(thisCount.$$hashKey,JSON.stringify({
				hashKey:thisCount.$$hashKey,
			}))
			var getItem2=sessionStorage.getItem(thisCount.$$hashKey);
			var temp1=JSON.parse(getItem2);
		}else{
			// console.log(thisCount.$$hashKey);
			var getItem2=sessionStorage.getItem(thisCount.$$hashKey);
			var temp1=JSON.parse(getItem2);
			// thisCount.count=temp1.count;
			// thisCount.total=temp1.total;
		}
		// console.log(temp1.count);
 		if(typeof temp1.item_count == null){
	 		temp1.item_count=0;
	 		sessionStorage.setItem(thisCount.$$hashKey,JSON.stringify({
    		item_name:thisCount.productName,
			item_count:temp1.item_count,
			item_total:temp1.item_total*thisCount.price,
    	}));
 		}else if(temp1.item_count<=0){
 			return false;
 		}else{
 			// var countIn=temp1.count;
 			temp1.item_count-=1;
 			sessionStorage.setItem(thisCount.$$hashKey,JSON.stringify({
    		item_name:thisCount.productName,
			item_count:temp1.item_count,
			item_total:temp1.item_total*thisCount.price,
    	}));
 		}
 		thisCount.count=temp1.item_count;
 		thisCount.hashKey=thisCount.$$hashKey,
 		console.log(thisCount);
   //  	$scope.cartItemsList.carted_items.$$hashKey={
   //  		item_name:temp1.productName,
			// item_count:temp1.count,
			// item_total:temp1.total,
   //  	};
    	// console.log($scope.cartItemsList.carted_items.$$hashKey);
 		var temp=sessionStorage.getItem('cartItems');
		$scope.cartItems=JSON.parse(temp);
 		$scope.cartItems.count-=1;
 		$scope.cartItems.total_Amount-=parseFloat(thisCount.price);
    	sessionStorage.setItem('cartItems',JSON.stringify($scope.cartItems));
    	// console.log($scope.cartItems);
    };
});

