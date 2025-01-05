function solution(n, k) {
    var answer = (n*12000) + (k*2000);
    for(i=10; i<=n; i+=10){
        answer -= 2000;
    }
    return answer;
}