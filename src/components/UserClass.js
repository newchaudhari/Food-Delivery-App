import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
        login: "@dummy ",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/newchaudhari");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    // console.log("component Did Update");
  }

  componentWillUnmount() {
    // console.log("component will unmount");
  }
  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;
    return (
      <div className="m-4 p-4">
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
        <img src={avatar_url} alt="logo" className="w-1/12 mx-auto my-4" />
        <h2>{name}</h2>
        <h2>Location: {location}</h2>
        <h2>Login: {login}</h2>
      </div>
    );
  }
}

export default UserClass;
