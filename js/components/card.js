import React from 'react';
import {connect} from 'react-redux';
import {
    updateGuessField,
    makeGuess
} from '../actions/actions';




const mapStateToProps = (state, props) => ({
    guesses: state.guesses,
    feedback:state.feedback,
    correctAnswer: state.correctAnswer,
    guessDraft:state.guessDraft
});


export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.grabVal = this.grabVal.bind(this);
        this.makeGuess = this.makeGuess.bind(this);
    }

    grabVal(event) {
        console.log(event.target.value)
       this.props.dispatch(updateGuessField(event.target.value))
    }



    makeGuess(event) {
       this.props.dispatch(makeGuess())
    }

    render() {
        return (
          <div className="Card">
             <h2> {this.props.feedback}</h2>
             <input className = "input-field" onChange={this.grabVal} value={this.props.guessDraft} ></input>
             <button type ="submit" onClick= {this.makeGuess} >Guess</button>
             <p>Guess # {this.props.guesses.length}</p>
             <h3>{this.props.guesses}</h3>
        </div>
        );
    }
}

export default connect(mapStateToProps)(Card);
