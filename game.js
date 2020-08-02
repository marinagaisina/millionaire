let game = {
    score: 0,
    nextQuestionIndex: 0,
    askedQuestions: [],
    /**
     * runs a game.
     */
    run() {
        console.log('Welcome to the game "Who wants to win a million!"'); //добро пожаловать на игру Кто хочет стать миллионером
        this.score += 1;
        console.log(this.score);
        leader.askQuestion(this.nextQuestionIndex);
    },
    /**
     * This function launches as the index.html opens.
     */
    
};
//console.log('To start the game type game.run() and press Enter'); //для начала игры напишите game.run() и нажимите Enter
game.run();