import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentDidMount() {
    console.log("Chaitvirta");
  }

  render() {
    return (
      <div>
        {console.log("RENDER")}
        <div>
          HERE YOU WILL SEE this.props.children
          {this.props.children}
        </div>

        <button onClick={() => this.props.magic("eka")}>DO MAGIC</button>

        <div>{this.props.name}</div>
        <div>{this.props.pi}</div>
      </div>
    );
  }
}
