import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log(this.props.name + " Children Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " Children Mount");
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    console.log(this.props.name + " Children Render");

    return (
      <div className="user-body">
        <h2>Count = {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>{name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: @vinitchaudhari</h2>
        {console.log(this.props.name + " Children Render 2")}
      </div>
    );
  }
}

export default UserClass;
