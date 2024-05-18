import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const { Username } = props;
  return (
    <div className="user-body">
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          const increase = count + 1;
          setCount(increase);
        }}
      >
        Click Me
      </button>
      <h2>{Username}</h2>
      <h2>Location: Bhusawal</h2>
      <h2>Contact: @newchaudhari</h2>
    </div>
  );
};

export default User;
