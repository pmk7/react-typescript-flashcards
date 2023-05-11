import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";
import LoginRedirect from "./LoginRedirect";
import Loading from "./Loading";

const Profile: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return isAuthenticated ? (
    <ProfileWrapper>
      <img src={user?.picture} alt={user?.name} />
      <h2>Welcome back, {user?.nickname}!</h2>
    </ProfileWrapper>
  ) : (
    <LoginRedirect />
  );
};

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20vh;

  img {
    width: 6.25rem;
    height: 6.25rem;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 0.875rem;
  }

  @media (min-width: 768px) {
    img {
      width: 8rem;
      height: 8rem;
      margin-bottom: 1.25rem;
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 0.625rem;
    }

    p {
      font-size: 1.125rem;
    }
  }
`;

export default Profile;
