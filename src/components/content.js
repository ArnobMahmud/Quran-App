import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LoadingImg from "../images/load.png";
import { URL } from "../api/api";

const Content = () => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`${URL}bn.json`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
      });
  }, []);

  return (
    <ContentCard>
      <div className="card">
        <input
          type="text"
          placeholder="Search here..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      {isPending && (
        <div className="card text-center align-items-center">
          <img src={LoadingImg} />
          <br></br>
          <p>Loading...</p>
        </div>
      )}
      {data
        .filter((e) => {
          if (search === "") {
            return e;
          } else if (
            e.name.toLowerCase().includes(search.toLowerCase()) ||
            e.translation.includes(search) ||
            e.transliteration.toLowerCase().includes(search.toLowerCase()) ||
            e.type.toLowerCase().includes(search.toLowerCase())
          ) {
            return e;
          }
          return null;
        })
        .map((e) => {
          return (
            <>
              <div className="card">
                <div className="card text-center">
                  <div className="col-xl-4 col-md-6 card">
                    <h1>{e.name}</h1>
                    <h6>{e.transliteration}</h6>
                    <h6>{e.translation}</h6>
                  </div>
                  <div className="row justify-content-around">
                    <div className="col-xl-3 col-md-6 col-sm-5 card">
                      <h6>Type : {e.type}</h6>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-5 card">
                      <h6>Total verse : {e.total_verses}</h6>
                    </div>
                  </div>
                </div>

                <div className="card verse">
                  {e.verses?.map((f, j) => {
                    return (
                      <>
                        <span>
                          [ {f.id}]<h4 className="arabic">{f.text}</h4>
                        </span>
                        <p>{f.translation}</p>
                      </>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
    </ContentCard>
  );
};

export default Content;

const ContentCard = styled.div`
  input {
    background: transparent;
    color: #f3c8d5;
    width: 100%;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 50px;
    margin-bottom: 20px;
    border: 2px solid rgb(28, 40, 28) !important;
  }

  img {
    width: 200px;
  }
  input:focus-visible {
    outline: none;
  }

  span {
    color: #fff;
  }
  .verse {
    text-align: right;
  }
`;
