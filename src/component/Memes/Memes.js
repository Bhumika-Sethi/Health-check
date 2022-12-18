import React, { useState, useEffect } from "react";
import memestyles from "./Memes.module.css";

import axios from "axios";
const url = "https://meme-api.com/gimme/wholesomememes";


export const Memes = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get(url)
      .then((res) => {
        console.log("dome");
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div
        id="carouselMultiItemExample"
        className={memestyles.carousel + " slide carousel-dark text-center"}
        data-mdb-ride="carousel"
      >
        <div className="d-flex justify-content-center mb-4"></div>
        <div className="carousel-inner py-4">
          <div className="carousel-item active">
            <div className="container">
              <div className="card ">
                <img src={userData.url} width="80%" className="card-img-top" alt="..."
                style={{
                  width: "50",
                  height:"50"
                }} />
              </div>
              <div className="card-body">
                <button
                  className={"btn btn-primary btn-lg " + memestyles.nsbtns}
                  onClick={getData}
                >
                  Next&nbsp;&gt;&gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
