import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./styles.css";
import Alert from "../alert";

class OAuth extends React.Component {
  state = {
    auth_token: this.props.oauth.auth_token,
    success: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.oauth.auth_token !== prevProps.oauth.auth_token) {
      this.setState({
        success: true,
      });
    }
  }

  saveOptions = () => {
    this.props.updateAuthToken({
      auth_token: this.state.token,
    });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      success: false,
    });
  };

  onKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.saveOptions();
    }
  };

  render() {
    return (
      <div className="options-form">
        <div className="form-field">
          <h2>Auth token</h2>
          <p className="text-muted">
            authorization code callback is handled, you can use the code to
            retrieve the user's access token.
          </p>
          <hr />
          <input
            type="text"
            name="token"
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
            className="form-control"
            value={this.state.auth_token}
          />
        </div>
        <button
          className="btn btn-dark btn-lg btn-save shadow"
          onClick={this.saveOptions}
        >
          <i className="fa fa-cog mr-2"></i>
          Save Token
        </button>
        <Link className="btn btn-primary shadow btn-block btn-lg" to="/">
          <i className="fa fa-arrow-left mr-2"></i> Go Home
        </Link>

        {this.state.success && (
          <div className="mt-4">
            <Alert type="warning">Successfully updated</Alert>
          </div>
        )}
      </div>
    );
  }
}

OAuth.propTypes = {
  updateAuthToken: PropTypes.func.isRequired,
  oauth: PropTypes.object.isRequired,
};

export default OAuth;
