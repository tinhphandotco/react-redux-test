import React, { Component } from "react";

class IconList extends Component {
  static defaultProps = {
    options: ["some", "random", "string", "here", "reactjs"]
  };
  constructor(props) {
    super(props);
    this.state = { myArr: ["my", "arr"] };
    this.addArrFunc1 = this.addArrFunc1.bind(this);
    this.addArrFunc2 = this.addArrFunc2.bind(this);
  }
  addArrFunc1() {
    let idx = Math.floor(Math.random() * this.props.options.length);
    let newIcon = this.props.options[idx];
    let myArr = this.state.myArr;
    myArr.push(newIcon);
    this.setState({ myArr: myArr });
  }

  addArrFunc2() {
    let idx = Math.floor(Math.random() * this.props.options.length);
    let newIcon = this.props.options[idx];
    this.setState({ myArr: [...this.state.myArr, newIcon] });
  }

  render() {
    console.log(this.state.myArr)
    return (
      <div>
        <button onClick={this.addArrFunc1}>Buton 1</button>
        <button onClick={this.addArrFunc2}>Button 2</button>
      </div>
    );
  }
}

export default IconList;