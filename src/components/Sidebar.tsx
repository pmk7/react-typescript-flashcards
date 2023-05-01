import React, { MouseEvent, useState } from "react"; // Change MouseEvent to ReactMouseEvent
import styled from "styled-components";
import close from "../assets/x.svg";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const handleClose = (event: MouseEvent<HTMLButtonElement>) => {
    // Change MouseEvent to ReactMouseEvent
    console.log("Close sidebar");
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <SidebarContainer>
      <aside className={`${sidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
        <div className="sidebar-header">
          <img src={close} className="close-btn" alt="close" />
        </div>
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
        </ul>
      </aside>
    </SidebarContainer>
  );
};
const SidebarContainer = styled.div`
  text-align: center;

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--off-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
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
