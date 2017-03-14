import React from 'react';
import {connect} from 'react-redux';



const mapStateToProps = (state, props) => ({
    guesses: state.guesses,
    feedback:state.feedback,
    correctAnswer: state.correctAnswer
});


export  class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    grabVal() {

    }

    render() {
        return (
            <div className="Card">
             <h2> {this.props.feedback}</h2>
             <h3> {this.props.guesses}</h3>
             <input className = "input-field" ></input>
             <button type ="submit" onClick= {this.grabVal} >Guess</button>
             <p>Guess # {this.props.guesses}</p>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Card);
