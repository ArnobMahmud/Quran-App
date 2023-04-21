import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { URL } from "../api/api";

const Frame = () => {
  const [dataBN, setDataBN] = useState([]);

  useEffect(() => {
    axios.get(`${URL}bn.json`).then((res) => {
      setDataBN(res.data);
      console.log(res);
    });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            {dataBN.map((e, i) => {
              return (
                <>
                  <div className="card info">
                    <div className="card">
                      <div className="col-xl-4 card">
                        <h1>{e.name}</h1>
                        <h6>{e.transliteration}</h6>
                        <h6>{e.translation}</h6>
                      </div>
                      <div className="row justify-content-between">
                        <div className="col-xl-3 card">
                          <h6>Type : {e.type}</h6>
                        </div>
                        <div className="col-xl-3 card">
                          <h6>Total verse : {e.total_verses}</h6>
                        </div>
                      </div>
                    </div>

                    <div className="card verses">
                      {e.verses?.map((f, j) => {
                        return (
                          <>
                            <span>
                              {f.id}
                              <h4 className="arabic">{f.text}</h4>
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Frame;
