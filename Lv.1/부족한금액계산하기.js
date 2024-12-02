function solution(price, money, count) {
    var answer = 0;
    var result = 0;
    for(i=1; i<=count; i++){
        answer += price*i;
    }

    result = money - answer;
    if(result > 0) return 0;
    else return result*(-1);
}