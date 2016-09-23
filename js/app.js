angular.module('invoice1',[])
.controller('InvoiceController', function InvoiceController($scope){
	this.qty = 1;
	this.cost = 2;
	console.log("yo");
	this.currencies = [{text:'USD'}, {text:'EUR'}, {text:'CNY'}];
	this.inCurr = this.currencies[0];
	this.usdToForeignRates = {
		USD: 1,
		EUR: 0.74,
		CNY: 6.09
	};
	
	this.total = function total(outCurr){
		console.log("I'm here");
		return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
	};

	this.convertCurrency = function convertCurrency(amount, inCurr, outCurr){
		return amount * this.usdToForeignRates[outCurr]/this.usdToForeignRates[inCurr];
	};

	this.pay = function pay(){
		window.alert('Thanks2!');
	};
});
console.log("meh")