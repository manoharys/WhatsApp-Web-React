import React, { Component } from "react";
import Loader from "./components/Loader";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    return this.state.hasError ? (
      <div>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
        <h5>Something went wrong.....</h5>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundry;
