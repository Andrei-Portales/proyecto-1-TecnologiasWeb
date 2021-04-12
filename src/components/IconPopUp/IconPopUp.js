import React, { Component } from 'react';
import './IconPopUP.scss';
import PropTypes from 'prop-types';

class IconPopUP extends Component {
  constructor() {
    super();

    this.state = {
      showDialog: false,
    };
  }

  show() {
    this.setState({
      showDialog: true,
    });
  }

  hide() {
    this.setState({
      showDialog: false,
    });
  }

  render() {
    const { showDialog } = this.state;
    const { icon, text } = this.props;

    return (
      <div
        onMouseEnter={this.show.bind(this)}
        onMouseLeave={this.hide.bind(this)}
        className="icon-container"
      >
        <div className="icon-preview">
          <img src={icon} alt="icon props" />
        </div>

        {showDialog ? <div className="popup-info">{text}</div> : null}
      </div>
    );
  }
}

export default IconPopUP;

IconPopUP.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
