import React from "react";
import TodoError from "./TodoError";

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      value: "",
      error: "",
    };
  }

  handleOnClick = () => {
    let tempTodo = this.state.todo;

    if (tempTodo.includes(this.state.value)) {
      this.setState({
        error: "Todo already exists",
      });
    } else {
      tempTodo.push(this.state.value);
      this.setState({
        todo: tempTodo,
        value: "",
        error: "",
      });
    }
  };

  handleOnChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleDelete = (index) => {
    let tempTodo = this.state.todo;
    let filtered = tempTodo.filter((_, idx) => idx !== index);
    this.setState({ todo: filtered, error: "" });
  };

  render() {
    return (
      <div>
        <h1>TODO App</h1>

        <input
          placeholder="Enter TODO"
          onChange={this.handleOnChange}
          value={this.state.value}
        />
        <button onClick={this.handleOnClick}>Add Todo</button>

        {this.state.error !== "" && <TodoError error={this.state.error} />}

        <ul>
          {this.state.todo.map((todo, index) => (
            <li key={`todo${index}`}>
              <div>{todo}</div>
              <div>
                <button onClick={() => this.handleDelete(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Hello;
