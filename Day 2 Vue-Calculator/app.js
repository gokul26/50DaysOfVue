new Vue({
	el:'#app',
	data:{
		title:'Simple Calculater',
		t1:true,
		boxclass: false,
		boxclassok: true,
		boxclassnok: false,
		operator: '',
		operand1: '',
		operand2: '',
		result:'',
		calExpressions:''
	},
	methods:{
		getNumber: function(x) {
			if(this.operator=="")
			{

			this.calExpressions += x;
			this.operand1 += x;
			}
			else
			{
			this.calExpressions += x;
			this.operand2 += x;
			}
		},
		getOperator:function (y) {
			if(y=="+"){
				this.operator = 'sum';
			}
			else if(y=="-"){
				this.operator = 'sub';
			}
			else if(y=="*"){
				this.operator = 'mul';
			}
			else
			{
				this.operator = 'div';
			}
			this.calExpressions += y;
		},
		doSum:function (x,y) {
			console.log(x,y);
			this.calExpressions = x + y;
			this.operand1 = this.calExpressions;
			this.operand2 = '';
			this.operator = '';
		},
		doSub:function (x,y) {
			console.log(x,y);
			this.calExpressions = x - y;
			this.operand1 = this.calExpressions;
			this.operand2 = '';
			this.operator = '';
			// body...
		},
		doMul:function (x,y) {
			console.log(x,y);
			this.calExpressions = x * y;
			this.operand1 = this.calExpressions;
			this.operand2 = '';
			this.operator = '';
			// body...
		},
		doDiv:function (x,y) {
			console.log(x,y);
			this.calExpressions = x % y;
			this.operand1 = this.calExpressions;
			this.operand2 = '';
			this.operator = '';
			// body...
		},
		getResult:function () {
			var val1 = parseInt(this.operand1);
			var val2 = parseInt(this.operand2);
			if(this.operator=="sum"){
				this.result = this.doSum(val1,val2);
			}
			else if(this.operator=="sub"){
				this.result = this.doSub(val1,val2);
			}
			else if(this.operator=="mul"){
				this.result = this.doMul(val1,val2);
			}
			else
			{
				this.result = this.doDiv(val1,val2);
			}
		},
		Reset:function () {
			this.operand1 = '';
			this.operand2 = '';
			this.operator = '';
			this.result = '';
			this.calExpressions = '';
		}
	}
})