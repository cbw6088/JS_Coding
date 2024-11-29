function solution(numbers) {
    var answer = 0;
    var arr = [];
    var num = 1+2+3+4+5+6+7+8+9;
    for(i=0; i<numbers.length; i++){
        answer += numbers[i];
    }
    num = num - answer;
    return num;
}