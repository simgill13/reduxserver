import React from 'react';
import {connect} from 'react-redux';
import {
    updateUser,
    toggleComplete,
    postData,
} from '../actions/actions';

const mapStateToProps = (state, props) => ({
    userName: state.userName,
    guesses: state.guesses,
});

export class NameEntry extends React.Component {
    constructor(props) {
        super(props);
        this.grabValue = this.grabValue.bind(this);
        this.removeNameEntry = this.removeNameEntry.bind(this);
    }

    grabValue(event) {
      console.log(event.target.value);
      this.props.dispatch(updateUser(event.target.value));
    }

    removeNameEntry(e) {
      console.log('hi')
      e.preventDefault();
      console.log(toggleComplete);
      this.props.dispatch(toggleComplete());
      this.props.dispatch(postData(4));
     
   
    }

    render() {
          return (
            <div className="name-entry">
              <h1 className="name-entry-title">You got it right!</h1>
              <form onSubmit={this.removeNameEntry}>
                <input type='text' placeholder='Enter your initials: ' onChange={this.grabValue} value={this.props.userName}></input>
                <button className ="goback" type="submit">Submit</button>
              </form>
            </div>
          )}


}

export default connect(mapStateToProps)(NameEntry);
