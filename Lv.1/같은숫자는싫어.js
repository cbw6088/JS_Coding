function solution(arr)
{
    var answer = [];
    
    for(i=0; i<arr.length; i++){
        answer.push(arr[i])
        if(answer[answer.length-1] === arr[i-1]) answer.pop()
    }
    console.log(answer)

    
    return answer;
}