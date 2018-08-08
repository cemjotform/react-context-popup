import React, { Component } from 'react';

import { Consumer } from './context';

class Popup extends Component {
  constructor(props) {
    super(props);

    this.state = { key: null, isHidden: true };

    this.handleHidePopup = this.handleHidePopup.bind(this);
    this.handlePopupClick = this.handlePopupClick.bind(this);
  }

  shouldComponentUpdate(_, { isHidden: nextIsHidden }) {
    const { isHidden: currentIsHidden } = this.state;

    return nextIsHidden !== currentIsHidden;
  }

  componentDidMount() {
    const { registerPopup } = this.props;

    this.setState({ key: registerPopup(this.handleHidePopup) });
  }

  componentWillUnMount() {
    const { key } = this.state;
    const { removePopup } = this.props;

    removePopup(key);
  }

  handlePopupClick() {
    this.setState({
      isHidden: false
    });
  }

  handleHidePopup() {
    this.setState({
      isHidden: true
    });
  }

  render() {
    return (
      <div className="popup" onClickCapture={this.handlePopupClick}>
        {this.props.children}
      </div>
    );
  }
}

class PopupWrapper extends Component {
  render() {
    const { children } = this.props;
    return (
      <Consumer>
        {props => (
          <Popup {...props}>
            {children}
          </Popup>
        )}
      </Consumer>
    );
  }
}

export default PopupWrapper;
