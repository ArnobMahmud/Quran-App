import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { URL } from "../api/api";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { RxComponentPlaceholder } from "react-icons/rx";

const Frame = () => {
  const [dataBN, setDataBN] = useState([]);
  const [search, setSearch] = useState("");

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
            <div className="card">
              <input
                type="text"
                placeholder="Search here..."
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
            {dataBN
              .filter((e) => {
                if (search === "") {
                  return e;
                } else if (
                  e.name.toLowerCase().includes(search.toLowerCase()) ||
                  e.translation.includes(search) ||
                  e.transliteration
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  e.type.toLowerCase().includes(search.toLowerCase())
                ) {
                  return e;
                }
                return null;
              })
              .map((e, i) => {
                return (
                  <>
                    <div className="card info">
                      <div className="card">
                        <div className="col-xl-4 col-md-6 card">
                          <h6 className="id card">{e.id}</h6>
                          <h1>{e.name}</h1>
                          <h6>{e.transliteration}</h6>
                          <h6>{e.translation}</h6>
                        </div>
                        <div className="row inforaw">
                          <div className="col-xl-3 col-md-6 col-sm-5 card">
                            <h6>
                              <RxComponentPlaceholder /> Type : {e.type}
                            </h6>
                          </div>
                          <div className="col-xl-3 col-md-6 col-sm-5 card">
                            <h6>
                              <BsLayoutTextSidebarReverse /> Total verse :{" "}
                              {e.total_verses}
                            </h6>
                          </div>
                        </div>
                      </div>

                      <div className="card verses">
                        {e.verses?.map((f, j) => {
                          return (
                            <>
                              <span>
                                [ {f.id} ]
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
