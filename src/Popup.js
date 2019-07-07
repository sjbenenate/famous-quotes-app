import React from "react";

/* props.delay is number of millisecs to wait before hiding */
class Popup extends React.Component {
  render() {
    if (this.props.text.length > 1 && this.props.show) {
      return <div className="popup">{this.props.text}</div>;
    } else {
      return null;
    }
  }
}

export default Popup;
