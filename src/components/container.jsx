import React, { Component } from 'react';
import { isEqual } from 'lodash';
import { Provider } from './context';

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleRootClick = this.handleRootClick.bind(this);
    this.handleRemovePopup = this.handleRemovePopup.bind(this);
    this.handleRegisterPopup = this.handleRegisterPopup.bind(this);
  }

  shouldComponentUpdate(_, state) {
    return !isEqual(state, this.state);
  }

  get providerValue() {
    return {
      removePopup: this.handleRemovePopup,
      registerPopup: this.handleRegisterPopup
    };
  }

  handleRegisterPopup(hidePopup) {
    const newKey = Math.random().toString(36).substr(2, 6);

    this.setState(popups => ({
      ...popups,
      [newKey]: {
        hidePopup
      }
    }));

    return newKey;
  }

  handleRemovePopup(key) {
    this.setState(({ [key]: popupToBeRemoved, ...popups }) => ({
      ...popups
    }));
  }

  handleRootClick() {
    Object.values(this.state).forEach(({ hidePopup }) => hidePopup());
  }

  render() {
    return (
      <Provider value={this.providerValue}>
        <div className="rootContainer" onClickCapture={this.handleRootClick}>
          {this.props.children}
        </div>
      </Provider>
    );
  }
}

export default Container;
