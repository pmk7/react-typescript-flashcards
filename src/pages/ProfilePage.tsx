import React from "react";
import { MySets, Profile, LoginRedirect } from "../components";
import { useAuth0 } from "@auth0/auth0-react";

const ProfilePage: React.FC = () => {
  const { user } = useAuth0();
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
