module.exports = function check(str, bracketsConfig) {
    var stack = [];
    for (var i = 0; i < str.length; i++){
        for (var j = 0; j < bracketsConfig.length; j++){
            if (bracketsConfig[j][0] != bracketsConfig[j][1]) {
                if (str[i] == bracketsConfig[j][0]){
                    stack.unshift(bracketsConfig[j][0]);
                    break;
                }
                else if (str[i] == bracketsConfig[j][1] && stack.length == 0){
                    return false;
                }
                else if (str[i] == bracketsConfig[j][1] && stack[0] == bracketsConfig[j][0]){
                    stack.shift();
                    break;
                }
            } else if (stack.length != 0 && stack[0] == bracketsConfig[j][1] && str[i] == bracketsConfig[j][1]) {
                stack.shift();
                break;
            } else if (str[i] == bracketsConfig[j][1])  {
                stack.unshift(bracketsConfig[j][0]);
                break;
            }
        }
    }
    if (!stack.length) {
        return true;
    } else {
        return false;
    }
}
