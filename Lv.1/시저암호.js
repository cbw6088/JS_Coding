function solution(s, n) {
    var answer = '';
    for(i=0; i<s.length; i++){
        var ASC = s.charCodeAt(i);
        var shiftedCode = ASC;
        
        if(ASC >= 65 && ASC <= 90){
            shiftedCode += n;
            if(shiftedCode > 90){
                shiftedCode = 65 + (shiftedCode - 91);
            }
        } else if(ASC >=97 && ASC <= 122){
            shiftedCode += n;
            if(shiftedCode > 122){
                shiftedCode = 97 + (shiftedCode - 123);
            }
        }
        
        answer += String.fromCharCode(shiftedCode);
    }
    return answer;
}