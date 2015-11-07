import _ from 'lodash';
import ActionTypes from '../../actions/action_types';
import Constants from '../../constants/constants';

const initialState = {
    user: {
        name: '',
        group: ''
    },

    tests: [],
    checkedIndex: -1,

    currentTest: {
        currentTime: 0,
        leaveTime: 0,
        correctAnswersCount: 0,
        discorrectAnswerCount: 0,
        questionsCount: 0,

        status: Constants.TestStatus.INIT,
        currentQuestionIndex: 0
    },
    currentQuestion: {},
    statistics: {}
};

export function stateReducer(state = _.cloneDeep(initialState), action) {
    switch (action.type) {
        case ActionTypes.INITIALIZE:
            return _.assign(state, { tests: action.data });
        case ActionTypes.ON_USER_NAME_CHANGED:
            return _.assign(state, { user: _.assign(state.user, action.data) } );
        case ActionTypes.CHECK_TEST:
            return _.assign(state, { checkedIndex: action.data });

        case ActionTypes.LOAD_TEST:
            return loadTest(state, action.data);

        case ActionTypes.TIMER_START:
            return timerStart(state);
        case ActionTypes.TIMER_TICK:
            return timerTick(state);

        case ActionTypes.CHANGE_QUESTION:
            return changeQuestion(state, action.data);

        case ActionTypes.CHECK_ANSWER:
            return checkAnswer(state, action.data);

        default:
            return state;
    }
}


function timerStart (state) {
    let newTime =  parseInt(state.currentTest.time, 10);

    return _.assign(state, {currentTest: _.assign(state.currentTest, {
        status: Constants.TestStatus.PROCESS,
        time: newTime,
        leaveTime: newTime
    } )});
}

function timerTick (state) {
    let currentTime = state.currentTest.currentTime + 1,
        leaveTime = state.currentTest.leaveTime - 1;

    if (currentTime >= state.currentTest.time) {
        return _.assign(state, {currentTest: _.assign(state.currentTest, {
            status: Constants.TestStatus.FINISHED
        })});
    }

    return _.assign(state, {currentTest: _.assign(state.currentTest, {
        currentTime,
        leaveTime
    })});
}

function loadTest (state, data) {
   let result =_.assign(state, {currentTest: _.assign(state.currentTest, data)});
   result.currentQuestion = state.currentTest.questions[0];
   return result;
}

function getQuestion (state, data) {

}

function changeQuestion (state, data) {
   return _.assign(state.currentTest, {currentQuestion: getQuestion(state, data)});
}

function checkAnswer (state, data) {
   let result = _.cloneDeep(state);
   result.currentQuestion.variants[data].isChecked = !(!!state.currentQuestion.variants[data].isChecked);
   return result;
}
