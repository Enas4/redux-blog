import React from "react";
import { connect, Connect } from "react-redux";

class UserHeader extends React.Component {
  render() {
    const user = this.props.users.find((user) => user.id === this.props.userId);
    // const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { users: state.users };
};

export default connect(mapStateToProps)(UserHeader);
