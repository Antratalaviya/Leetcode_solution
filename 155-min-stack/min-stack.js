const INT_MAX = 2 ** 31 - 1;
var MinStack = function () {
    this.s = [];
    this.min = INT_MAX;
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function (value) {
    if (!this.s.length) {
        this.min = value;
        this.s.push(value);
        return;
    }

    if (value < this.min) {
        this.s.push(2 * value - this.min);
        this.min = value;
        return;
    }
    this.s.push(value);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let top = this.s.pop();
    if (top < this.min) {
        this.min = 2 * this.min - top;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    let top = this.s[this.s.length - 1]
    if (top < this.min) {
        return this.min;
    }
    return top;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */