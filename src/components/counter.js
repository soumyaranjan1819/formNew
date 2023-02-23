import React, { useState } from "react";

const withCounter = (WrappedComponent) => {
  const WithCounter = (props) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount((prevCount) => prevCount + 1);
    };

    return (
      <WrappedComponent
        count={count}
        incrementCount={incrementCount}
        {...props}
      />
    );
  };

  return WithCounter;
};

const Counter = (props) => {
  const { count, incrementCount } = props;

  return (
    <div>
      <button onClick={incrementCount}>Increment Count</button>
      <h2>Count: {count}</h2>
    </div>
  );
};

export default withCounter(Counter);
