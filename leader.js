let leader = {
    askQuestion(nextQuestionIndex, i) {

        let variations = '';    
        for (let key in availableQuestions.questions[nextQuestionIndex].options) {
            variations += `${key}: ${availableQuestions.questions[nextQuestionIndex].options[key]}\n`;            
        }
        let answer = prompt(`Question No ${i}: ${availableQuestions.questions[nextQuestionIndex].text}\nThe options are: \n ${variations}`);
        return answer === availableQuestions.questions[nextQuestionIndex].correctAnswerIndex;
            
    }
    
    
}