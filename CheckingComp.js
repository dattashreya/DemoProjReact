import React, {Component} from 'react';
import ExistingRegUser from './ExistingRegUser';
import NewRegForm from './NewRegForm';

export default class CheckingComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true
    }
  }

  render() {
    return this.state.loggedIn ? (
      <div>
        <ExistingRegUser />
      </div>
    ) :
    <div>
        <NewRegForm />
    </div>
  }
}