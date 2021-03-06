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
    // console.log(e);
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
  constructor(props) {
    super(props);
    this.handleItem = this.handleItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleItem(e) {
    const parentEle = e.target.parentNode;
    const todoItemInfo = document.querySelector(".todoInfo");
    if (e.target.checked) {
      todoItemInfo.style.textDecoration = "line-through";
    } else {
      todoItemInfo.style.textDecoration = "none";
    }
  }

  // componentDidMount() {
  //   this.deleteItem();
  // }

  

  deleteItem(itemID) {
    // console.log(this.props.items);
    console.log(itemID);

    this.props.items.map((item, i) => {
      if (item.id === itemID) {
        this.props.items.splice(i, 1);
        console.log("111");
      }
    });
  }

  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id} className="liItem">
            <input type="checkbox" onChange={this.handleItem} />
            <span className="todoInfo"> {item.text}</span>
            <span className="delItem" onClick={() => this.deleteItem(item.id)}>
              X
            </span>
          </li>
        ))}
      </ul>
    );
  }
}
