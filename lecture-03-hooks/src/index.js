import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

class ExComponent extends Component {
  //PHASE 1: MOUNTING
  //Step 1: get derrived state from props - Step 2: constructor 
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  //Step 2:@override render
  render() {
    return (
      <div>
        <h1>Render Component</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={()=>{this.setState({count: this.state.count + 1})}}>Click to UPDATING</button>
      </div>
    );
  }
  //Step 3:componentDidMount
  componentDidMount() {
    window.alert("Mouting Success!!!");
  }

  //PHASE 2: UPDATING
  //Step 1:
  static getDerivedStateFromProps(props, state) {
    window.alert("1. getDerivedStateFromProps invoked!!!");
    return state;
  }
  //Step 2:
  shouldComponentUpdate(nextProps, nextState) {
    window.alert(`2. shouldCompontUpdate invoked: Count next is: ${nextState.count}`);
    return true;
  }
  //Step 3:
  getSnapshotBeforeUpdate(prevProps, prevState) {
    window.alert(`3. getSnapshotBeforeUpdate: Count prev is: ${prevState.count}`);
    return prevState;
  }
  //Step 4:
  componentDidUpdate(prevProps, prevState, snapshot) {
    window.alert(`4. Update Succesful! before Count: ${prevState.count}, snapshot: ${snapshot.count}`);
    return snapshot;
  }

  //PHASE 3: UNMOUNTING
  componentWillUnmount() {
    window.alert("5. Component will Unmount some Feature");
  }
}


//USE HOOK
function ExampleHookComponent(props) {
  // Khởi tạo state bằng useState
  const [count, setCount] = useState(0);

  // Sử dụng useEffect để thay cho lifecirle method
  useEffect(()=>{
    // Thực hiện sau khi component được render lần đầu tiên <=> componentDidMouting method
    window.alert("componentDidMount");

    // Clean up khi component unmouting <=> componentWillUnmount method
    return () => {
      window.alert("componentWillUnmount");
    };
    },[])

    return (
      <div>
        <h1>Render Component</h1>
        <h2>Count: {count}</h2>
        <button onClick={()=>{setCount(count + 1)}}>Click to UPDATING</button>
      </div>
    )
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(
  <React.StrictMode>
    <ExampleHookComponent></ExampleHookComponent>
  </React.StrictMode>
);
