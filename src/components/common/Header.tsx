import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import { SHOW_SEARCH } from "../../store/actions/search";

export const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Nav className="flex-center">
      <div className="container flex-center">
        <img
          onClick={() => history.push("/")}
          id="logo"
          src="/title.svg"
          alt="logo"
        />

        <div className="menu">
          <svg
            color="white"
            onClick={() =>
              dispatch({ type: SHOW_SEARCH, payload: { showSearch: true } })
            }
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.98984 0C12.3954 0 15.9789 3.58349 15.9789 7.98902C15.9789 10.0675 15.1812 11.9632 13.8759 13.386L16.4443 15.9491C16.6847 16.1894 16.6855 16.5783 16.4452 16.8187C16.3254 16.9401 16.1671 17 16.0095 17C15.8528 17 15.6953 16.9401 15.5747 16.8203L12.9753 14.2281C11.6078 15.3232 9.87402 15.9789 7.98984 15.9789C3.58431 15.9789 0 12.3945 0 7.98902C0 3.58349 3.58431 0 7.98984 0ZM7.98984 1.23059C4.26278 1.23059 1.23059 4.26196 1.23059 7.98902C1.23059 11.7161 4.26278 14.7483 7.98984 14.7483C11.7161 14.7483 14.7483 11.7161 14.7483 7.98902C14.7483 4.26196 11.7161 1.23059 7.98984 1.23059Z"
              fill="white"
            />
          </svg>

          <div className="content flex-center">
            <ul className="flex-center">
              <li>
                <NavLink exact activeClassName="active" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/categories">
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/discover">
                  Discover
                </NavLink>
              </li>
            </ul>

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
    width: 100%;
    position: relative;
    z-index: 5;
    justify-content: space-between;
    padding: 0 2rem;

    img {
      opacity: 1;
      width: 88px;
      height: 19px;
      cursor: pointer;

      #logo {
        transform: translateY(-50%);
      }
    }

    .menu {
      position: relative;

      .content {
        display: none;

        li {
          position: relative;

          ::after {
            background-color: #f50505;
            width: 0;
            height: 1px;
            transition: 0.2s ease all;
            bottom: -5px;
            position: absolute;
            left: 0;
            content: "";
          }

          :hover::after {
            width: 60%;
          }
        }
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
          top: 15px;
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
          left: 53%;
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
