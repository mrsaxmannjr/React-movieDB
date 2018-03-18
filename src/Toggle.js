import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { toggleMessage } from "./actions";

const Toggle = ({ messageVisibility, toggleMessage }) => (
  <div>
    {messageVisibility &&
    <p>You will be seeing this is redux action is toggeld</p>
    }
    <button onClick={toggleMessage}>Toggle Me
    </button>
  </div>
);


const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleMessage,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
