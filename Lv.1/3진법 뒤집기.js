function solution(n) {
    var answer = 0;
    var num = n.toString(3);
    var convert = num.toString();
    var reverse = "";
    var idx = 0;
    for(i=convert.length-1; i>=0; i--){
        reverse += convert[i];
    }
    answer = parseInt(reverse,3)
    return answer;
}