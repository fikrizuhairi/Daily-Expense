angular.module('app.controllers', [])
  
.controller('electricUsageCalculatorCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	$("#electricUsageCalculator-butto").click(function()
	 {
	 	var prevMonth = $("#electPrevMonth").val() ;
	 	var currMonth = $("#electCurrMonth").val() ;
	 	var totkWh = currMonth - prevMonth;
	 	
	 	if(totkWh>0)
	 	{


	 		if(totkWh >200)
		 	{
		 		var totPrice = (200*$("#elecFirst200").val()) + ((totkWh-200)*$("#elecAfter200").val());
		 		alert(totkWh+"kWh Used");
		 	}
		 	else if(totkWh == 200)
		 	{
		 		var totPrice = (200*$("#elecFirst200").val());
		 		alert(totkWh+"kWh Used");
		 	}
		 	
		 	else
		 	{
		 		var totPrice = (totkWh*$("#elecFirst200").val());
		 		alert(totkWh+"kWh Used");
		 	}

		 	$("#elecBill").val(totPrice);

		 	var myDB = window.sqlitePlugin.openDatabase({name: "EletricityCalcDB.db", location: 'default'});

			myDB.transaction(function(transaction) 
			{
				var executeQuery = "INSERT INTO electricBill (prevMonth, currMonth, billAmmount) VALUES (?,?,?)";
				transaction.executeSql(executeQuery, [prevMonth,currMonth,totPrice]
				, function(tx, result) 
				{
				alert('Inserted');
				},
				function(error)
				{
				alert('Error occurred');
				});
			});

	 	}
	 	else if(totkWh<0)
		 	{
		 		alert("Current Month must be more that Previous Month");
		 		$("#electPrevMonth").val("") ;
				$("#electCurrMonth").val("") ;
		 	}
	 	else
	 	{
	 		alert("Dont leave Current Month and Previous Month Empty!");

	 	}
	 });
	

}])
   
.controller('cartCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cloudCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 