function solution(number) {
    var answer = 0;
    var num = number;
    for(i=0; i<number.length-2; i++){
        for(j=i+1; j<number.length-1; j++){
            for(k=j+1; k<number.length; k++){
                if(num[i]+num[j]+num[k] === 0){
                    answer++;
                }
            }
        }

    }
    return answer;
}