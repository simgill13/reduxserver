import React from 'react';
import {connect} from 'react-redux';
import {
    updateGuessField,
    makeGuess
} from '../actions/actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'




const mapStateToProps = (state, props) => ({
    guesses: state.guesses,
    feedback:state.feedback,
    correctAnswer: state.correctAnswer,
    guessDraft:state.guessDraft
});


export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          started: false
        }
        this.grabVal = this.grabVal.bind(this);
        this.makeGuess = this.makeGuess.bind(this);
    }

    grabVal(event) {
        console.log(event.target.value)
       this.props.dispatch(updateGuessField(event.target.value))
    }

    componentDidMount() {
      setTimeout(()=>{
        this.setState({started:true})
      }, 0)
    }
    makeGuess(event) {
       this.props.dispatch(makeGuess())
    }

    render() {
        return (
          <div className={`Card ${this.state.started ? '' : 'hidden'}`}>
            <div className="bannerDiv">
                <h2 className="banner"> {this.props.feedback}</h2>
            </div>
            <input className = "input-field" onChange={this.grabVal} value={this.props.guessDraft} ></input>
            <button className="guessButton" type ="submit" onClick= {this.makeGuess} >Guess</button>
            <p>Guess # {this.props.guesses.length}</p>
            <h3 className="array">  {` ${this.props.guesses} `} </h3>
        </div>
        );
    }
}

export default connect(mapStateToProps)(Card);
