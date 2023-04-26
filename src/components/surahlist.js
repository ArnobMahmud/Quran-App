import React, { useState, useEffect } from "react";
import { URL } from "../api/api";
import { Link } from "react-router-dom";
import LoadingImg from "../images/load.png";
import styled from "styled-components";

const Surah = () => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    try {
      fetch(`${URL}bn.json`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
        });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <SurahList>
      {isPending && (
        <div className="card text-center align-items-center">
          <img src={LoadingImg} alt="img" />
          <br></br>
          <p>Loading...</p>
        </div>
      )}
      <div className="row">
        {data.map((e) => {
          return (
            <>
              <div className="col-xl-2 col-md-4 col-sm-12">
                <Link to={`/surah/${e.id}`} state={{ data: e }}>
                  <div className="card">
                    <h6>{e.id}</h6>
                    <p>{e.name}</p>
                    <p>{e.transliteration}</p>
                    <p>{e.translation}</p>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </SurahList>
  );
};

export default Surah;

const SurahList = styled.div`
  .card {
    margin: 10px 0px;
  }
`;
