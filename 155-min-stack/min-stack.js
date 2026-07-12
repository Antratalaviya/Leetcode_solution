var MinStack = function () {
    this.s = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function (value) {
    if (!this.s.length) {
        this.s.push([value, value]);
        return;
    }
    let min = Math.min(this.getMin(), value);
    this.s.push([value, min]);

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    return this.s.pop();
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