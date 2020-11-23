import React, { Component } from "react";

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TodoList</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">输入要做的事情</label>
          <input
            type="text"
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>添加 #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    console.log(e);
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  }
}

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}
