import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  data: any;
}

function DownloadsCommon({ data }: Props): ReactElement {
  return (
    <Div>
      <ul className="flex-center">
        {data.map((q: any) => (
          <li className="flex-center">
            <div className="text flex-center">
              <h4>my movie </h4> <span>{q}</span>
            </div>
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M0 6.8034V16.1966C0 20.2665 2.6174 23 6.51475 23H16.4853C20.3826 23 23 20.2665 23 16.1966V6.8034C23 2.7347 20.3815 0 16.4841 0H6.51475C2.6174 0 0 2.7347 0 6.8034Z"
                fill="white"
              />
              <path
                d="M6.5788 12.4839L10.889 16.8136C11.2133 17.1391 11.7871 17.1391 12.1126 16.8136L16.4228 12.4839C16.7586 12.1458 16.7574 11.5995 16.4193 11.2637C16.0812 10.9279 15.5361 10.9279 15.1992 11.266L12.3621 14.1146V6.80635C12.3621 6.3291 11.9757 5.94385 11.4997 5.94385C11.0236 5.94385 10.6372 6.3291 10.6372 6.80635V14.1146L7.80125 11.266C7.6322 11.097 7.4114 11.013 7.18945 11.013C6.9698 11.013 6.749 11.097 6.5811 11.2637C6.24415 11.5995 6.243 12.1458 6.5788 12.4839Z"
                fill="white"
              />
            </svg>
          </li>
        ))}
      </ul>
    </Div>
  );
}

export default DownloadsCommon;

const Div = styled.div`
  background-color: black;
  border-radius: 26px;
  width: clamp(300px, 100%, 1920px);
  padding: 2rem 2rem;
  margin-top: 5rem;
  margin-bottom: 7em;

  ul {
    flex-direction: column;
    width: 100%;
    padding: 1rem 1rem; // 3rem

    li {
      justify-content: space-between;
      width: clamp(300px, 100%, 1920px);
      padding: 2rem 4rem;
      background-color: #171717;
      border-radius: 76px;
      margin: 1rem 0;

      h4 {
        font-size: 1.2rem;
        font-family: my-font-light;
        position: relative;
        width: fit-content;

        ::after {
          position: absolute;
          height: 20px;
          width: 1px;
          top: -1px;
          right: -10px;
          background-color: white;
          content: "";
        }
      }
      span {
        margin-left: 2rem;
        color: #f50505;
      }
    }
  }

  @media screen and (min-width: 800px) {
    background-color: black;
    border-radius: 26px;
    width: clamp(300px, 100%, 1920px);
    padding: 3rem 2rem;
    /* width: clamp(300px, 100%, 1500px); */
    margin-top: 5rem;
    margin-bottom: 7rem;

    ul {
      flex-direction: column;
      /* width: clamp(300px, 100%, 1500px); */
      padding: 1rem 1rem; // 3rem

      li {
        svg {
          width: 40px;
          height: 40px;
          cursor: pointer;

          :hover {
            path:nth-child(1) {
              fill: #b35252;
            }
            path:nth-child(2) {
              fill: red;
            }
          }
        }
        h4 {
          font-size: 2rem;

          ::after {
            position: absolute;
            height: 30px;
            width: 1px;
            top: -1px;
            right: -15px;
            background-color: white;
            content: "";
          }
        }
        span {
          font-size: 2rem;
          margin-left: 3rem;
        }
      }
    }
  }
`;
