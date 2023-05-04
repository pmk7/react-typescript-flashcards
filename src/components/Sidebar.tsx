import React, { MouseEvent, useState } from "react";
import styled from "styled-components";
import FontControl from "./FontControl";
import { useAppContext } from "../context/AppContext";

const Sidebar: React.FC = () => {
  const { menuOpen } = useAppContext();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    console.log("Toggle sidebar");
  };

  const increaseFont = () => {
    console.log("increase font");
  };

  const decreaseFont = () => {
    console.log("decrease font");
  };

  return (
    <SidebarContainer>
      <aside className={`${menuOpen ? "sidebar show-sidebar" : "sidebar"}`}>
        <ul className="links">
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/mysets">my sets</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <FontControl
              increaseFont={increaseFont}
              decreaseFont={decreaseFont}
            />
          </li>
        </ul>
      </aside>
    </SidebarContainer>
  );
};
const SidebarContainer = styled.div`
  padding: 1rem 1.5rem;

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--main-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: baseline;
    margin-bottom: 2rem;
    margin-top: 5rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }
`;

export default Sidebar;
