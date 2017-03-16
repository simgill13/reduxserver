import React from 'react';
import {connect} from 'react-redux';
import Card from './card';
import Help from './help';
import {
    newGame,
    toggleInfoModel,
    requestData,
    recieveData
} from '../actions/actions';


const mapStateToProps = (state, props) => ({
    guesses: state.guesses,
    showInfoModel: state.showInfoModel,
    loadingApi: state.loadingApi,
    bestScore: state.bestScore
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(requestData())
})

export class Game extends React.Component {
    constructor(props) {
        super(props);
        this.resetGame = this.resetGame.bind(this);
        this.showHelp = this.showHelp.bind(this);
    }

    showHelp(event) {
       this.props.dispatch(toggleInfoModel())
    }

    componentDidMount() {
    this.props.getData()
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
          <div className='Game' >

            {this.props.showInfoModel}
            <div className = "top-nav">
            <button className = "need-help" type="submit" onClick={this.showHelp} > NEED HELP? </button>
            <button type ="submit" className = "new-game" onClick={this.resetGame} > +NEW GAME </button>
            </div>
             <h1 className = "game-title">Feeling Lucky? </h1>
              <p className = "bestScore">Top Score {this.props.bestScore} </p>
              <Card />
          </div>
        )
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Game);
