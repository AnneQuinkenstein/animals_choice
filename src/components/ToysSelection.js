import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AnimalsContext } from "../contexts/AnimalsContext";
import { IconButton, Tooltip } from "@material-ui/core";
import cat from "./images/cat.png";
import dog from "./images/dog.png";

const ToysSelection = () => {
  const {
    selectedAnimal,
    handleCatsChoice,
    handleDogsChoice,
    handleAnimalsChoice,
  } = useContext(AnimalsContext);

  return (
    <>
      <ul className="select">
        <Tooltip title="Toys for all" style={{ borderRadius: "5px" }}>
          <Link to="/">
            <li className="firstSelect">
              <IconButton>Toys for </IconButton>
              <IconButton
                onClick={handleAnimalsChoice}
                style={{
                  opacity: `${selectedAnimal === "all" ? "1" : "0.7"}`,
                }}
              >
                {" "}
                ... all
              </IconButton>
            </li>
          </Link>
        </Tooltip>
        <Tooltip title="Toys for cats">
          <Link to="/">
            <li>
              <IconButton
                onClick={handleCatsChoice}
                style={{
                  opacity: `${selectedAnimal === "cat" ? "1" : "0.7"}`,
                }}
              >
                ... cats
              </IconButton>
            </li>
          </Link>
        </Tooltip>
        <img
          src={dog}
          alt={"dog"}
          style={{
            height: "70px",
            display: `${selectedAnimal === "dog" ? "inline" : "none"}`,
          }}
        />
        <img
          src={cat}
          alt={"cat"}
          style={{
            height: "80px",
            display: `${selectedAnimal === "cat" ? "inline" : "none"}`,
          }}
        />
        <Tooltip title="Toys for dogs">
          <Link to="/">
            <li>
              <IconButton
                onClick={handleDogsChoice}
                style={{
                  opacity: `${selectedAnimal === "dog" ? "1" : "0.7"}`,
                }}
              >
                {" "}
                ... dogs
              </IconButton>
            </li>
          </Link>
        </Tooltip>
      </ul>
    </>
  );
};

export default ToysSelection;
