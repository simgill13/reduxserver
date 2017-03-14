import React from 'react';
import {connect} from 'react-redux';
import Card from './card';
import Help from './help';
import {
    newGame,
    toggleInfoModel
} from '../actions/actions';
const mapStateToProps = (state, props) => ({
    guesses: state.guesses,
    showInfoModel: state.showInfoModel
});
export class Game extends React.Component {
    constructor(props) {
        super(props);
        this.resetGame = this.resetGame.bind(this);
        this.showHelp = this.showHelp.bind(this);
    }
    showHelp(event) {
       this.props.dispatch(toggleInfoModel())
    }
    resetGame(event) {
      this.props.dispatch(newGame())
    }
    render() {
        if(this.props.showInfoModel === true){
          return (
            <div className = "Help">
              <Help />
            </div>
        )}
        return (
            <div className="Game">
            {this.props.showInfoModel}
            <button type="submit" onClick={this.showHelp} > WHAT? </button>
            <button type ="submit" onClick={this.resetGame} > +NEW GAME </button>
             <h1> HOT or COLD </h1>
              <Card />
            </div>
        )
    }
  }
export default connect(mapStateToProps)(Game);
