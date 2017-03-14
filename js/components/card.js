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

   
    render() {
        return (
            <div className="Card">
             <h3> {this.props.guesses}</h3>
               
            </div>
        );
    }
}

export default connect(mapStateToProps)(Card);