let leader = {
    askQuestion(nextQuestionIndex) {
        
        let variation = '';
        for (let i = 1; i <= config.numberOfQuestions; i++) {
 //           console.log(`Question No ${i}:\n${availableQuestions.question[nextQuestionIndex].getRendomQuestion(nextQuestionIndex)}\n`);
            for (let key in availableQuestions.questions[nextQuestionIndex].options) {
                variation += `${key}: ${availableQuestions.questions[nextQuestionIndex].options[key]}\n`;
            }
        }
            
    }
    
    
}