import React from 'react';
import {connect} from 'react-redux';
import Card from './card';


const mapStateToProps = (state, props) => ({
    guesses: state.guesses
});

console.log(mapStateToProps);
export default class Game extends React.Component {
    constructor(props) {
        super(props);     
    }

   
    render() {
        return (
            <div className="Game">
            <button> WHAT? </button>
            <button> +NEW GAME </button>
             <h1> HOT or COLD </h1>
              <Card /> 
            </div>
        );
    }
}