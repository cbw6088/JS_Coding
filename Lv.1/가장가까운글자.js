function solution(s) {
    var answer = [];
    let dictionary = {};
    
    for(i=0; i<s.length; i++){
        if(!(s[i] in dictionary)){
            answer.push(-1);
        } else{
            answer.push(i-dictionary[s[i]]);
        }
        dictionary[s[i]] = i;
    }
    
    return answer;
}