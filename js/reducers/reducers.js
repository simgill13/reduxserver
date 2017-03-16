import {
    NEW_GAME,
    MAKE_GUESS,
    TOGGLE_INFO_MODEL,
    UPDATE_GUESS_FIELD,
    REQUEST_DATA,
    RECIEVE_DATA,
    UPDATE_USER,
    TOGGLE_COMPLETED,
} from '../actions/actions';

const initialState = {
    guesses: [],
    feedback: 'Pick Between 1 and 100',
    correctAnswer: Math.round(Math.random() * 100),
    showInfoModel: false,
    guessDraft:"",
    loadingApi: false,
    bestScore: 100,
    completed: false,
    currentNumber:-1,
    userName: '',
};

console.log('correctAnswer', initialState.correctAnswer);
export default (state, action) => {
    state = state || initialState;
    if (action.type === NEW_GAME) {
        state = Object.assign({
        }, initialState, {
            fewestGuesses: state.fewestGuesses,
            correctAnswer: action.correctAnswer
        });
        return state;
    }
    else if (action.type === MAKE_GUESS) {
        const guess = parseInt(state.guessDraft, 10);
        if (isNaN(guess)) {
            state = Object.assign({}, state, {
                feedback: 'Please enter a valid number'
            });

            return state;
        }


        const difference = Math.abs(guess - state.correctAnswer);

        let feedback;
        let completed = false;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 5)  {
            feedback = 'You\'re Hot!';
        }
        else if (difference >= 1) {
            feedback = "OMG, You're super close";
        }
        else {
            feedback = 'You got it!';
            completed = true;
        }

        state = Object.assign({}, state, {
            feedback,
            completed,
            guesses: state.guesses.concat(action.guess),
            guessDraft: " ",
            guesses: [...state.guesses,state.guessDraft]
        });

        return state;
    }
    else if (action.type === TOGGLE_INFO_MODEL) {
         state = Object.assign({}, state, {
             showInfoModel: !state.showInfoModel
        });

        return state;

    }

    else if (action.type === TOGGLE_COMPLETED) {
         state = Object.assign({}, state, {
             completed: !state.completed
        });
        return state;
    }

    else if (action.type === UPDATE_GUESS_FIELD) {
        state = Object.assign({},state,{
            guessDraft:action.value
        })
        return state;
    }
    else if (action.type === REQUEST_DATA) {
        state = Object.assign({},state,{
            loadingApi: true
        })
    }
    else if (action.type === RECIEVE_DATA) {
        state = Object.assign({},state,{
            loadingApi:false,
            bestScore: action.data,
            userName: action.userName
        })
    }
    else if (action.type === UPDATE_USER) {
      state = Object.assign({}, state, {
        userName: action.userName
      })
    }
    return state;
};
