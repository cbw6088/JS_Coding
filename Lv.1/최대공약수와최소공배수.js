function solution(n, m) {
    var answer = [];
    
    answer[0] = 1;
    for(i=2; i<=n; i++){
        if(n % i === 0 && m % i === 0){
            answer[0] = i;
        }
    }

    let lcm = 1;
    while(true){
        if(lcm % n === 0 && lcm % m === 0){
            answer[1] = lcm;
            break;
        }
        lcm++;
    }
    return answer;
}