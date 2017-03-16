import React from 'react';
import {connect} from 'react-redux';
import {
    updateUser,
    toggleComplete
} from '../actions/actions';

const mapStateToProps = (state, props) => ({
    userName: state.userName
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

    removeNameEntry() {
      this.props.dispatch(toggleComplete);
    }

    render() {
          return (
            <div className="name-entry">
              <h1 className="name-entry-title">You got it right!</h1>
              <form>
                <input type='text' placeholder='Enter your initials: ' onChange={this.grabValue} value={this.props.userName}></input>
                <button className ="goback" type="submit" onSubmit={this.removeNameEntry}>Submit</button>
              </form>
            </div>
          )}


}

export default connect(mapStateToProps)(NameEntry);
