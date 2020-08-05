'use strict';
let availableQuestions = {
    questions: [
            {
                text: 'What year is it now?',
                options: {
                    'a': '2020_correct',
                    'b': '2019',
                    'c': '2015',
                    'd': '2001',
                },
                correctAnswerIndex: 'a',
            }, 
            {
                text: 'What month is it now?',
                options: {
                    'a': 'January',
                    'b': 'February',
                    'c': 'March',
                    'd': 'August_correct',
                },
                correctAnswerIndex: 'd',
            },
            {
                text: 'What weekday is it today?',
                options: {
                    'a': 'Monday',
                    'b': 'Tuesday',
                    'c': 'Wednesday',
                    'd': 'Satuday_correct',
                },
                correctAnswerIndex: 'd',
            },
            {
                text: 'What day is it today?',
                options: {
                    'a': '19',
                    'b': '20',
                    'c': '25',
                    'd': '1_correct',
                },
                correctAnswerIndex: 'd',
            },
            {
                text: 'What season is it now?',
                options: {
                    'a': 'winter',
                    'b': 'Spring',
                    'c': 'Summer',
                    'd': 'Fall_correct',
                },
                correctAnswerIndex: 'd',
            },
            {
                text: 'What season was it before?',
                options: {
                    'a': 'winter',
                    'b': 'Spring',
                    'c': 'Summer_correct',
                    'd': 'Fall',
                },
                correctAnswerIndex: 'c',
            },
            {
                text: 'What day was yesterday?',
                options: {
                    'a': '31_correct',
                    'b': '20',
                    'c': '25',
                    'd': '1',
                },
                correctAnswerIndex: 'a',
            },
            {
                text: 'What weekday was yesterday?',
                options: {
                    'a': 'Monday',
                    'b': 'Friday_correct',
                    'c': 'Wednesday',
                    'd': 'Satuday',
                },
                correctAnswerIndex: 'b',
            },
            {
                text: 'What month was before?',
                options: {
                    'a': 'January',
                    'b': 'February',
                    'c': 'July_correct',
                    'd': 'August',
                },
                correctAnswerIndex: 'c',
            },
            {
                text: 'What year was before?',
                options: {
                    'a': '2020',
                    'b': '2019_correct',
                    'c': '2015',
                    'd': '2001',
                },
                correctAnswerIndex: 'b',
            },
    ],
    getRandomQuestion() {
        
        let newIndex = Math.floor(Math.random()*availableQuestions.questions.length);
        if (game.askedQuestions.includes(newIndex)) {
            this.getRandomQuestion(newIndex);
        } else {
            game.askedQuestions.push(newIndex);
            return newIndex;
        }
    }

};
