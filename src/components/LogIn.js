import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function LogIn() {
  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });
  return (
    <>
      <div style={{ display: "flex", backgroundColor: "whitesmoke" }}>
        <div>
          <img
            src="https://us.v-cdn.net/6032561/uploads/HVXV3S95MUL7/hello-and-welcome.gif"
            alt=""
            style={{ width: "50vw", height: "100vh" }}
          ></img>
        </div>
        <div style={{ marginTop: "30vh", marginLeft: "10vw" }}>
          <h1>Sign-in to your account</h1>
          <TextField fullWidth label="Username" id="fullWidth" />
          <br />
          <TextField
            fullWidth
            label="Password"
            id="fullWidth"
            style={{ marginTop: "2vh" }}
          />
          <br />
          <Autocomplete
            id="grouped-demo"
            options={options.sort(
              (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
            )}
            groupBy={(option) => option.firstLetter}
            getOptionLabel={(option) => option.title}
            style={{ marginTop: "2vh" }}
            renderInput={(params) => (
              <TextField {...params} label="Select Unit Name" />
            )}
          />
          <Link to={"/home"}>
            <Button
              variant="contained"
              disableElevation
              style={{
                width: "25vw",
                marginTop: "7vh",
                height: "7vh",
                backgroundColor: "#FF6363",
                borderRadius: "10px",
              }}
            >
              <b>Sign In</b>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
];

export default LogIn;
