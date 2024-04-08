/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
    while (students.length > 0 && students.indexOf(sandwiches[0]) !== -1) {
        if (students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
        } else {
            students.push(students.shift());
        }
    }
    return students.length;
};

 // let n = students.length
    // let eat = 0;
    // let i = 0;
    // let flag = 0;
    // while (i < n) {
    //     while (sandwiches[0] !== students[0]) {
    //         let front = students.shift();
    //         students.push(front);
    //         flag++;
    //         if (flag === students.length) {
    //             return n - eat;
    //         }
    //     }
    //     flag = 0;
    //     eat++;
    //     students.shift();
    //     sandwiches.shift();
    //     i++;
    // }
    // return n - eat;