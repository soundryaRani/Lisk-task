import React, { Component } from "react";
import "./style4.css";

export default class Ques4 extends Component {
  constructor(props) {
    super(props);
    // Make state for username and array
    this.state = {
      username: "",
      list: [],
    };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // Validation
  updateInput(event) {
    if (event.target.value < 0) {
      alert("Please Enter Postive value");
    } else {
      this.setState({ username: event.target.value });
    }
  }
  // Add product function
  handleSubmit() {
    if (this.state.username === "") {
      alert("Empty value can not be Added!!!");
    } else {
      let obj = {
        name: this.state.username,
        id: Math.floor(Math.random() * 10000),
      };

      this.setState((prevState) => ({
        list: [...prevState.list, obj],
      }));
      this.setState({ username: "" });
    }
  }
  // Delete Function
  deleteList(event) {
    for (let i = 0; i < this.state.list.length; i++) {
      if (event === this.state.list[i].id) {
        this.state.list.splice(i, 1);
      }
    }
    this.setState((prevState) => ({
      list: [...prevState.list],
    }));
  }
  render() {
    return (
      <div>
        <div className="task4">
          <h1>Ques 4</h1>
          <h3>Using class components create a username list as shown.</h3>
          <input
            className="inputTask4"
            type={"text"}
            placeholder={"Enter New Item"}
            onChange={this.updateInput}
            value={this.state.username}
          />
          <button onClick={this.handleSubmit} className="btnTask4">
            ADD
          </button>
          <div>
            <ul className="ulTask4">
              {this.state.list.map((item) => (
                <li className="liTask4" key={item}>
                  {item.name}
                  <button
                    className="btnCross4"
                    onClick={() => this.deleteList(item.id)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
