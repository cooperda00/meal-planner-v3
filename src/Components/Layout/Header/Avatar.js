//Modules
import React from "react";
import styled from "styled-components";
//Styles
import { flex, font } from "../../../Utilities";
import { Spinner2 } from "../../../Elements";
//Icon
import UserAvatarIcon from "../../../Images/user_icon.png";
//Redux
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

const Avatar = ({ className, user, uid }) => {
  if (user && uid) {
    return (
      <StyledAvatar className={className}>
        <p className="username">{user[`${uid}`].username}</p>
        <img src={UserAvatarIcon} alt="Default User Icon" />
      </StyledAvatar>
    );
  } else {
    return (
      <StyledAvatar className={className}>
        <Spinner2 />
      </StyledAvatar>
    );
  }
};

const StyledAvatar = styled.div`
  ${flex("row", "center", "center")};
  height: 100%;

  .username {
    ${font("S")}
  }

  img {
    height: 100%;
  }
`;

const mapStateToProps = state => {
  return {
    user: state.firestore.data.users,
    uid: state.firebase.auth.uid
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return [{ collection: "users", doc: props.uid }];
  })
)(Avatar);
