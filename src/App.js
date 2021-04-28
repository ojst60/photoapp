import "./App.css";
import Profile from "./Profile";
import Amplify from "aws-amplify";
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignUp,
  AmplifySignOut,
} from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

Amplify.configure(awsconfig);

const federated = {
  googleClientId:
    "374228796699-o0qcebo7fpb73e01k2hvccckjljkehf9.apps.googleusercontent.com",
};

const App = () => {
  return (
    <div>
      <AmplifyAuthenticator>
        <AmplifySignIn headerText="Login" slot="sign-in">
          {" "}
          <amplify-sign-in-button
            federated={federated}
            slot="federated-buttons"
          >
            This is a new button
          </amplify-sign-in-button>
        </AmplifySignIn>
        <AmplifySignUp
          headerText="Create An Account"
          slot="sign-up"
          formFields={[
            {
              type: "username",
              label: "Username",
              placeholder: "Username",
              required: true,
            },
            {
              type: "name",
              label: "Name",
              placeholder: "Name",
              required: true,
            },
            {
              type: "family_name",
              label: "Last Name",
              placeholder: "Last Name",
              required: true,
            },
            {
              type: "email",
              label: "Custom email Label",
              placeholder: "Email",
              required: true,
            },
            {
              type: "password",
              label: "Password",
              placeholder: "Password",
              required: true,
            },
            {
              type: "phone_number",
              label: "Phone Number",
              placeholder: "Phone Number",
              required: false,
            },
            {
              type: "gender",
              label: "Gender",
              placeholder: "Male or Female",
              required: true,
            },
          ]}
        />

        <div>
          <Header />
          <Profile />
        </div>
      </AmplifyAuthenticator>
    </div>
  );
};

export default App;
