import React from "react";
import { connect } from "react-redux";

import "./styles.css";
import OAuth from "../../components/oauth";
import { updateAuthToken } from "../../redux/tiktok/actions";

class OAuthContainer extends React.Component {
  render() {
    return (
      <div className="options-container">
        <div className="container shadow">
          <OAuth
            oauth={{ auth_token: "texttetxetext" }}
            updateAuthToken={updateAuthToken}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    oauth: store.oauth,
  };
};

const mapDispatchToProps = {
  updateAuthToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(OAuthContainer);
