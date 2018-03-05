  module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let last_in_stack;
    let mas = str.split('');
    let solution = true;
    if (mas.length % 2 != 0) return false;
    for (let k = 0; k < mas.length; k++) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (mas[k] == bracketsConfig[i][1] && stack[stack.length - 1] == bracketsConfig[i][0]) {
                stack.pop();
            } else if (mas[k] == bracketsConfig[i][0]) {
                stack.push(mas[k]);
            }
        }
    }
    if (stack.length != 0) solution = false;
    return solution;
}

