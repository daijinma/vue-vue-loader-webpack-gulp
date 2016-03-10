
var a = 1;
console.log('required '+a);

module.exports = {
	add:function(){
		a++;
	},
	get:function(){
		return a;
	}
}
