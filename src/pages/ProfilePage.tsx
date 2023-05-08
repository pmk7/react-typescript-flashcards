import React from "react";
import { MySets, Profile, LoginRedirect } from "../components";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../components/Button";

const ProfilePage: React.FC = () => {
  const { loginWithRedirect, user } = useAuth0();
  return user ? (
    <>
      <Profile />
      <MySets />
    </>
  ) : (
    <LoginRedirect />
  );
};

export default ProfilePage;
