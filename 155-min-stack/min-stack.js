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
        this.s.push([value, value]);
    } else {
        let min = Math.min(this.min, value);
        this.s.push([value, min]);
        this.min = min;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let top = this.s.pop();
    this.min = this.s.length ? this.s[this.s.length - 1][1] : INT_MAX;
    return top;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.s[this.s.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.s[this.s.length - 1][1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */