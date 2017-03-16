import React from 'react';
import {connect} from 'react-redux';
import Card from './card';
import Help from './help';
import NameEntry from './name-entry';
import {
    newGame,
    toggleInfoModel,
    fetchData,
    updateUser,
    toggleComplete,
} from '../actions/actions';


const mapStateToProps = (state, props) => ({
    guesses: state.guesses,
    showInfoModel: state.showInfoModel,
    loadingApi: state.loadingApi,
    bestScore: state.bestScore,
    completed: state.completed,
    userName:state.userName,
});

export class Game extends React.Component {
    constructor(props) {
        super(props);
        this.resetGame = this.resetGame.bind(this);
        this.showHelp = this.showHelp.bind(this);
        this.props.dispatch(fetchData());
    }

    showHelp(event) {
       this.props.dispatch(toggleInfoModel())
    }

    resetGame(event) {
      this.props.dispatch(newGame());
      this.props.dispatch(fetchData());
    }

    render() {
      // console.log(this.props.bestScore);
      // console.log(this.props.completed);
        if(this.props.showInfoModel === true){
          return (
            <div className = "Help">
              <Help />
            </div>
        )}

        if(this.props.completed)  {
          return ( 
            <div className="help-screen">
            <NameEntry />
            </div>
            )}

        return (
          <div className='Game' >

            {this.props.showInfoModel}
            <div className = "top-nav">
            <button className = "need-help" type="submit" onClick={this.showHelp} > NEED HELP? </button>
            <button type ="submit" className = "new-game" onClick={this.resetGame} > +NEW GAME </button>
            </div>
             <h1 className = "game-title">Feeling Lucky? </h1>
              <p className = "bestScore">{this.props.loadingApi ? "Loading..." : `Top Score: ${this.props.bestScore} by 
              ${this.props.userName}`}</p>
              <Card />
          </div>
        )
    }
  }
export default connect(mapStateToProps)(Game);
