function solution(numbers) {
    var answer = [];
    var dictionary = {};
    var arr = numbers
    arr.sort((a,b) => a-b);

    for(i=0; i<arr.length-1; i++){
        var addNum = 0;
        for(j=i+1; j<arr.length; j++){
            addNum = arr[i] + arr[j];
            if(!(addNum in dictionary)){
                answer.push(addNum);
            }
            dictionary[addNum] = true;
        }
    }

    answer.sort((a,b) => (a-b))
    return answer;
}