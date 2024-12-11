function solution(t, p) {
    var answer = 0;
    for(i=0; i<=t.length-p.length; i++){
        var num = "";
        for(j=i; j<i+p.length; j++){
            num += t[j]
        }
        console.log(num)
        
        if(Number(p) >= Number(num)) answer++;
    }
    return answer;
}