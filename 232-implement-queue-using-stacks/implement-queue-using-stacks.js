
var MyQueue = function () {
    this.s = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    let n = this.s?.length;
    this.s.push(x);
    for (let i = 0; i < n; i++) {
        this.s.push(this.s.shift());
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    let last = this.s[this.s.length - 1];
    this.s.pop();
    return last;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return this.s[this.s.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return !this.s.length;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */