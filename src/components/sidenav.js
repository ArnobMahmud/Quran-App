import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidenav = () => {
  return (
    <SideNavStyle>
      <div className="card">
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
          <li className="nav-item card">
            <Link lassName="nav-link" to="/surah">
              Surah
            </Link>
          </li>
          <li className="nav-item card">
            <Link lassName="nav-link" to="/juz">
              Juz
            </Link>
          </li>
        </ul>
      </div>
    </SideNavStyle>
  );
};

export default Sidenav;

const SideNavStyle = styled.div`
  position: fixed;
  width: inherit;

  .nav-item {
    padding: 20px;
  }

  .nav-item a {
    text-align: center;
    font-weight: 400;
    font-size: 18px;
    color: rgb(255, 255, 255);
  }

  .card {
    width: auto;
    margin: 10px 5px;
    padding: 20px;
    border-radius: 20px;
  }
`;
