import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Usman",
      age: 24,
    };
  }
  componentDidMount() {
    console.warn("component did mount called");
  }

  render() {
    return (
      <>
        <h1>About us page</h1>
        <h2>
          My name is {this.state.name} <br />
          My age is: {this.state.age}
        </h2>
      </>
    );
  }
}

export default About;
