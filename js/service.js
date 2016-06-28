app.service("getItemList", function($http){
	return {
		getResData: function() {
			var url = "json/items.json";
			return $http({
				method: "get",
				url: url
			}).then(function(res) {
				return res;
			}, function(err) {
				return err;
			})
		}
	};
});