import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";

export const Header = () => {
  return (
    <Nav className="flex-center">
      <div className="container flex-center">
        <img src="/title.svg" alt="logo" />
        <div className="menu">
          <RiSearchLine color="white" />
          <div className="content flex-center">
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
            <NavLink exact activeClassName="active" to="/categories">
              Categories
            </NavLink>
            <NavLink exact activeClassName="active" to="/discover">
              Discover
            </NavLink>
            <button id="nav-button">Sign In</button>
          </div>
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  height: 98px;
  width: 100%;
  position: relative;
  position: absolute;
  top: 0;
  z-index: 2;

  ::after {
    content: "";
    position: absolute;
    background-color: black;
    opacity: 0.55;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }

  .container {
    height: 98px;
    /* transform: translateY(5%); */
    width: 100%;
    position: relative;
    z-index: 5;
    justify-content: space-between;
    padding: 0 2rem;

    img {
      opacity: 1;
      width: 88px;
      height: 19px;
    }

    .menu {
      position: relative;

      .content {
        display: none;
      }

      svg {
        position: absolute;
        right: 6rem;
        top: -8px;
        width: 17px;
        height: 17px;
      }

      ::after {
        content: "";
        position: absolute;
        bottom: -5px;
        right: 0;
        width: 3rem;
        height: 1.5px;
        background-color: white;
      }

      ::before {
        content: "";
        position: absolute;
        width: 3rem;
        right: 0;
        bottom: 4px;
        height: 1.5px;
        background-color: white;
      }
    }

    @media screen and (min-width: 400px) {
      padding-left: 4.4rem;
      padding-right: 3.4rem;

      svg {
        cursor: pointer;
      }
    }
  }

  @media screen and (min-width: 950px) {
    height: 134px;

    .container {
      padding-left: 4.6rem;
      padding-right: 0;
      height: 13.4rem;

      img {
        opacity: 1;
        width: 127px;
        height: 27px;
      }

      .menu {
        svg {
          top: 12px;
          left: 55%;
        }
        .content {
          display: flex;
          margin-right: 4.6rem;

          button {
            margin-left: 5rem;
            margin-right: 0;
          }
        }

        ::after,
        ::before {
          display: none;
        }
      }
    }
  }
  @media screen and (min-width: 950px) {
    transform: translateY(10px);
    ::after {
      background-color: transparent;
    }
    ::after {
      content: "";
      top: 12rem;
      background-color: #c4c4c4;
      width: 100%;
      height: 1px;
    }
  }

  @media screen and (min-width: 1100px) {
    .container {
      padding-left: 8.7rem;
      height: 13.4rem;

      .menu {
        svg {
          left: 55%;
        }
        .content {
          margin-right: 8.7rem;

          button {
            margin-left: 10rem;
          }

          a {
            padding-right: 5.8rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 2000px) {
    justify-content: center;
    .container {
      width: 2000px;
    }
  }
`;
