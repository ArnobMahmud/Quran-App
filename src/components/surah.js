import React from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";

const SurahId = () => {
  const params = useParams();
  const surahId = params.surahId;
  const location = useLocation();
  const data = location.state?.data;
  console.log(surahId);
  return (
    <SurahListCard>
      <div className="col-xl-7">
        <div className="card">
          <div className="card text-center">
            <div className="col-xl-4 col-md-6 card">
              <h1>{data.name}</h1>
              <h6>{data.transliteration}</h6>
              <h6>{data.translation}</h6>
            </div>
            <div className="row justify-content-around">
              <div className="col-xl-3 col-md-6 col-sm-5 card">
                <h6>Type : {data.type}</h6>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-5 card">
                <h6>Total verse : {data.total_verses}</h6>
              </div>
            </div>
          </div>
          <div className="card verse">
            {data.verses?.map((e) => {
              return (
                <>
                  <span>
                    [ {e.id}]<h4 className="arabic">{e.text}</h4>
                  </span>
                  <p>{e.translation}</p>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </SurahListCard>
  );
};

export default SurahId;

const SurahListCard = styled.div`
  img {
    width: 200px;
  }
  span {
    color: #fff;
  }
  .verse {
    text-align: right;
  }
`;
