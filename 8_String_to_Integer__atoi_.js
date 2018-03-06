// Implement atoi to convert a string to an integer.

// Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

// Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.
/**
 * @param {string} str
 * @return {number}
 */

// atoi: ascii to integer 字符串转换到整型
// trim 只能去掉两边的空格
// 先写测试用例，会有哪些情形
// 1. 首先需要丢弃字符串前面的空格；
// 2. 然后可能有正负号（注意只取一个，如果有多个正负号，那么说这个字符串是无法转换的，返回0。比如测试用例里就有个“+-2”）；
// 3. 字符串可以包含0~9以外的字符，如果遇到非数字字符，那么只取该字符之前的部分，如“-00123a66”返回为“-123”；
// 4. 如果超出int的范围，返回边界值（2147483647或-2147483648）。

// var myAtoi = function(str) {
  // var str = str.trim()
  // var sign = 1

  // if (str.startsWith('-') || str.startsWith('+')) {
    // if (str.startsWith('-')) {
      // sign = -1
    // }
    // str = str.substring(1)
  // }

  // return Number(str)
// };

var myAtoi = function(str) {
    var num = 0;
    var baseCharCode = '0'.charCodeAt(0);
    var sign = 1;
    
    str = str.trim();
    
    if(str[0] === '+' || str[0] === '-') {
        
        if(str[0] === '-') {
            sign = -1;
        }
        
        str = str.substring(1);
    }
    
    // str.charCodeAt(index) 返回字符串某个位置上字符的 unicode 编码
    for(var i = 0; i < str.length; i++) {
        var c = str[i];
        // Number 转换不准?
        // var charCode = c.charCodeAt(0) - baseCharCode;
        var charCode = Number(c)
        
        if(0 <= charCode && charCode <= 9) {
            num *= 10;
            num += charCode;
        } else {  // 第二个字符不是 0 - 9 时，退出
            break;
        }
    }
    
    // Math.pow(7, 2) 等价于 7 ** 2
    var maxInt = Math.pow(2,31) - 1;
    var minNegInt = -Math.pow(2,31);
    
    num = sign*num;
    
    if(0 < num && maxInt < num) {
        return maxInt;
    }
    
    if(num < 0 && num < minNegInt) {
        return minNegInt;
    }
    
    return num;
};
console.log(myAtoi('-+233'))
console.log(myAtoi('-00123a66'))
