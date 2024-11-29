function solution(arr) {
    var answer = [];
    var min = 2100000000;
    if(arr.length <= 1) {
        answer[0] = -1;
        return answer;
    }
    
    for(i=0; i<arr.length; i++){
        if(arr[i] < min) min = arr[i];
    }
    
    for(i=0; i<arr.length; i++){
        if(arr[i] === min){
            arr.splice(i, 1);
            break;
        }
    }
    return arr;
}