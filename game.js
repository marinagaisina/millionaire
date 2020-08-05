let game = {
    score: 0,
    nextQuestionIndex: 0,
    askedQuestions: [],
    /**
     * runs a game.
     */
    run() {
        console.log('Welcome to the game "Who wants to win a million!'); //добро пожаловать на игру Кто хочет стать миллионером

        for (let i = 1; i <= config.numberOfQuestions; i++) {
            
            let result = leader.askQuestion(availableQuestions.getRandomQuestion(), i);
            if (result) {
                this.score++;
            }
        }
        console.log(`Total ${config.numberOfQuestions} questions were asked. Correct answers: ${this.score}`);
        if (this.score == config.numberOfQuestions) {
            console.log(`You win a million!`);
        } else {
            console.log(`You did not won a million`);
        }
    },
    
};
//console.log('To start the game type game.run() and press Enter'); //для начала игры напишите game.run() и нажимите Enter
game.run();