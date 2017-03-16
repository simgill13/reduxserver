export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
    type: NEW_GAME,
    correctAnswer: Math.round(Math.random() * 100),
});

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess) => ({
    type: MAKE_GUESS,
    guess
});

export const TOGGLE_INFO_MODEL = 'TOGGLE_INFO_MODEL';
export const toggleInfoModel = () => ({
    type: TOGGLE_INFO_MODEL
});

export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const toggleComplete = () => ({
    type: TOGGLE_COMPLETED
})

export const UPDATE_GUESS_FIELD = 'UPDATE_GUESS_FIELD';
export const updateGuessField = value => ({
    type: UPDATE_GUESS_FIELD,
    value
})

export const UPDATE_USER = 'UPDATE_USER';
export const updateUser = (userName) => ({
    type: UPDATE_USER,
    userName
})

export const REQUEST_DATA = 'REQUEST_DATA';
export const requestData = () => ({
  type: REQUEST_DATA
})

export const RECIEVE_DATA = 'RECIEVE_DATA';
export const recieveData = (data, userName) => ({
  type: RECIEVE_DATA,
  data,
  userName
})


export const fetchData = () => {
  return (dispatch) => {
    dispatch(requestData())

    fetch('http://localhost:8081/api/guesses')
    .then(response => response.json())
    .then(json => {
    	// console.log(json); 
    	dispatch(recieveData(json.guesses, json.userName))})
  }
}

export const postData = (guesses,userName) => {

  return (dispatch) => {
    fetch('http://localhost:8081/api/guesses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({guesses,userName})
    })
    .then(response => response.json())
    .then(json => {
    	console.log(json)
    	// console.log(json); 
    	dispatch(recieveData(json.guesses,json.userName))})
  }
}














