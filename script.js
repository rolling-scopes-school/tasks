// "use strict";

// ES5
function Calculator(value) {
	if (typeof(value) == 'number') {
		this.int = value;
	} else {
		this.str = value
	}
}
Calculator.prototype.get = function() {
	return this.int ? this.int : this.str;
}

// ES6
class newCalculator {
	constructor(value) {
		if (typeof(value) == 'number') {
			this.int = value;
		} else {
			this.str = value
		}
	}
	get() {
		return this.int ? this.int : this.str;
	}
}

// ES6
class IntBuilder extends newCalculator {
	constructor(int = 0) {
		super(int);
	}
	plus(...n) {
		this.int = n.reduce((sum, num) => sum + num, this.int);
		return this;
	}
	minus(...n) {
		this.int = n.reduce((sum, num) => sum - num, this.int);
		return this;
	}
	multiply(n) {
		this.int *= n;
		return this;
	}
	divide(n) {
		this.int /= n;
		return this;
	}
	mod(n) {
		this.int %= n;
		return this;
	}
	static random(from, to) {
		return Math.floor(Math.random() * (from - to) + to);
	}
}

// ES5
function StringBuilder(str = '') {
	Calculator.call(this, str);
}
Object.setPrototypeOf(StringBuilder.prototype, Calculator.prototype);
StringBuilder.prototype.plus = function(...str) {
	this.str = str.reduce((prev, next) => prev.replace(/.+/is, '$&' + next), this.str);
	//                    Another ways
	// str.forEach(char => {
	// 	// this.str = this.str.replace(/[\w ]+/i, '$&' + char);
	// 	// this.str = [...this.str, ...char].join('');
	// 	this.str = [...this.str].concat(...char).join('');
	// })
	return this;
}
StringBuilder.prototype.minus = function(n) {
	this.str = this.str.slice(0, -n);
	return this;
}
StringBuilder.prototype.multiply = function(int) {
	const char = this.str
	for (let i = 0; i < int-1; i++) {	
		this.str = this.str.replace(/$/, '$&' + char)
	}
	return this;
}
StringBuilder.prototype.divide = function(n) {
	const k = Math.floor(this.str.length / n);
	this.str = this.str.slice(0, k);
	return this;
}
StringBuilder.prototype.remove = function(str) {
	this.str = this.str.split('').filter(char => char !== str).join('');
	return this;
}
StringBuilder.prototype.sub = function(from, n) {
	this.str = this.str.slice(from, n + from);
	return this;
}

// Tests
const a = new IntBuilder(10)
console.log((new IntBuilder()).int, new IntBuilder());
console.log(IntBuilder.random(10, 100));
console.log(a.plus(2, 3, 2).minus(1, 2).multiply(2).divide(4).mod(3).get());

const b = new StringBuilder('Hello');
console.log((new StringBuilder()).str, new StringBuilder());
console.log(b.plus(' all', '!').minus(4).multiply(3).divide(4).remove('l').sub(1, 1).get());