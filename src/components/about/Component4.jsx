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
    this.handleItem = this.handleItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TodoList</h3>
        <ul>
          {this.state.items.map((item) => (
            <li key={item.id} className="liItem">
              <input type="checkbox" onChange={this.handleItem} />
              <span className="todoInfo"> {item.text}</span>
              <span
                className="delItem"
                onClick={() => this.deleteItem(item.id)}
              >
                X
              </span>
            </li>
          ))}
        </ul>
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

  handleItem(e) {
    const parentEle = e.target.parentNode;
    if (e.target.checked) {
      parentEle.style.textDecoration = "line-through";
    } else {
      parentEle.style.textDecoration = "none";
    }
  }

  deleteItem(itemID) {
    this.state.items.map((item, i) => {
      if (item.id === itemID) {
        this.state.items.splice(i, 1);
        this.setState((state) => {
          return (state = this.state);
        });
      }
    });
  }

  componentDidMount() {}

  componentDidUpdate() {}
}
