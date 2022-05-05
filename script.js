// "use strict";

// ES5
function Calculator(value) {
	this.value = value;
}
Calculator.prototype.get = function() {
	return this.value;
}

// ES6
class newCalculator {
	constructor(value) {
		this.value = value;
	}
	get() {
		return this.value;
	}
}

// ES6
class IntBuilder extends newCalculator {
	constructor(value = 0) {
		super(value);
	}
	plus(...n) {
		this.value = n.reduce((sum, num) => sum + num, this.value);
		return this;
	}
	minus(...n) {
		this.value = n.reduce((sum, num) => sum - num, this.value);
		return this;
	}
	multiply(n) {
		this.value *= n;
		return this;
	}
	divide(n) {
		this.value /= n;
		return this;
	}
	mod(n) {
		this.value %= n;
		return this;
	}
	static random(from, to) {
		return Math.floor(Math.random() * (from - to) + to);
	}
}

// ES5
function StringBuilder(value = '') {
	Calculator.call(this, value);
}
Object.setPrototypeOf(StringBuilder.prototype, Calculator.prototype);
StringBuilder.prototype.plus = function(...str) {
	this.value = str.reduce((prev, next) => prev.replace(/.+/is, '$&' + next), this.value);
	//                    Another ways
	// str.forEach(char => {
	// 	// this.value = this.value.replace(/[\w ]+/i, '$&' + char);
	// 	// this.value = [...this.value, ...char].join('');
	// 	this.value = [...this.value].concat(...char).join('');
	// })
	return this;
}
StringBuilder.prototype.minus = function(n) {
	this.value = this.value.slice(0, -n);
	return this;
}
StringBuilder.prototype.multiply = function(int) {
	const char = this.value
	for (let i = 0; i < int-1; i++) {	
		this.value = this.value.replace(/$/, '$&' + char)
	}
	return this;
}
StringBuilder.prototype.divide = function(n) {
	const k = Math.floor(this.value.length / n);
	this.value = this.value.slice(0, k);
	return this;
}
// StringBuilder.prototype.remove = function(str) {
// 	this.value = this.value.split('').filter(char => char !== str).join('');
// 	return this;
// }
StringBuilder.prototype.remove = function(str) {
	let i = 0;
	while (this.value.includes(str)) {
		const j = this.value.indexOf(str[0], i);
		const copyStr = this.value.slice(j, j + str.length);
		console.log(j, copyStr);
		if (copyStr === str) {
			this.value = this.value.slice(0, j) + this.value.slice(j + str.length);
		} else {
			i++;
		}
	}
	return this;
}
StringBuilder.prototype.sub = function(from, n) {
	this.value = this.value.slice(from, n + from);
	return this;
}

// Tests
const a = new IntBuilder(10)
console.log((new IntBuilder()).value, new IntBuilder());
console.log(IntBuilder.random(10, 100));
console.log(a.plus(2, 3, 2).minus(1, 2).multiply(2).divide(4).mod(3).get());

const b = new StringBuilder('Hello');
console.log((new StringBuilder()).value, new StringBuilder());
console.log(b.plus(' all', '!').minus(4).multiply(3).divide(4).remove('l').sub(1, 1).get());
