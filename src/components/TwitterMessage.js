import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleInputChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let charLeft = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        onChange={this.handleInputChange}
        value={this.state.message}
        type="text" 
        name="message" 
        id="message"
         />
         <p>{charLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
