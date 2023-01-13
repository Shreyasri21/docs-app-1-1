import React from "react";
import Appointment from "./Appointment";
import Chart from "./Chart";
import Prk from "./Prk";
import Schedule from "./Schedule";
import TotalEarning from "./TotalEarning";
import Sidebar from "./Sidebar";
function Home() {
  return (
    <>
      <div
        style={{
          height: "100%",
          marginLeft: "5vw",
          backgroundColor: "whitesmoke",
        }}
      >
        <div
          style={{ backgroundColor: "#1C315E", color: "white", height: "20vh" }}
        >
          <p style={{ fontSize: "3vw", marginLeft: "8vw" }}>
            Welcome, <b>Anil Kumar</b>
          </p>
          {/* <span style={{ fontSize: "large", marginLeft: "8vw" }}>Cardiology</span> */}
        </div>
        <div>
          <div
            style={{ position: "absolute", transform: "translate(8%, -40%)" }}
          >
            <TotalEarning />
          </div>
          <div style={{ display: "flex" }}>
            <Appointment />
            <Schedule />
            <div
              style={{
                position: "absolute",
                transform: "translate(260%, -35%)",
              }}
            >
              <Prk />
            </div>
          </div>
          <div
            style={{
              height: "50vh",
              width: "55vw",
              marginTop: "10vh",
              marginLeft: "5vw",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            <Chart />
          </div>
        </div>
      </div>
      <Sidebar />
    </>
  );
}

export default Home;
