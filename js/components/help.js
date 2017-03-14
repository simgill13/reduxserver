import React from 'react';
import {connect} from 'react-redux';
import {
   toggleInfoModel
} from '../actions/actions';



const mapStateToProps = (state, props) => ({
    showInfoModel: state.showInfoModel
});


export class Help extends React.Component {
    constructor(props) {
        super(props);
        this.renderGame = this.renderGame.bind(this);
    }

    renderGame() {
      this.props.dispatch(toggleInfoModel())
    }

    render() {
        if(this.props.showInfoModel === true){
          return (
              <div className="help-screen">
              <h1>What do I do?</h1>
              <p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
              <ul>
                <li>1. I pick a random secret number between 1 to 100 and keep it hidden.</li>
                <li>2. You need to guess until you can find the hidden secret number.</li>
                <li>3. You will get feedback on how close ("hot") or far ("cold") your guess is.</li>
              </ul>
              <p>So, Are you Ready?</p>
              <button type="submit" onClick={this.renderGame}>Go Back</button>
              </div>
          )}
          return(
            <div>
            <Game />
            </div>
          )
    }
}

export default connect(mapStateToProps)(Help);
