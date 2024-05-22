import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="about-body">
        <h1>About</h1>
        <h2>Namaste React Course</h2>
        <UserClass name={"First"} location={"Pune"} contact={"@newchaudhari"} />
      </div>
    );
  }
}

export default About;
