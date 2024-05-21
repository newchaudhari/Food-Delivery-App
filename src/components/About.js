import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

  constructor(props){
    super(props);
    console.log("Parent constructor")
  }

  componentDidMount(){
    console.log("Parent mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div className="about-body">
        <h1>About</h1>
        <h2>Namaste React Course</h2>
        <UserClass name={"First"} location={"Pune"} />
        <UserClass name={"Second"} location={"Bhusawal"} />
        {console.log("Parent render 2")}
      </div>
    );
  }
}

export default About;
