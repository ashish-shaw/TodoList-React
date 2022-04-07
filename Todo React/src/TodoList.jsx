import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import ListCom from "./ListCom";

const TodoList = () => {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);

  const ItemEvent = (event) => {
    setItem(event.target.value);
  };

  const listofItem = () => {
    setNewItem((prev) => {
      return [...prev, item];
    });
    setItem(" ");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>TODO LIST</h1>
          <br />
          <input
            type="text"
            value={item}
            placeholder="Add an Item"
            onChange={ItemEvent}
          />
          <Button onClick={listofItem} className="new_btn">
            <AddIcon />
          </Button>
          <br />
          <ol>
            {newItem.map((val, index) => {
              return <ListCom key={index} text={val} />;
            })}
          </ol>
          <br />
        </div>
      </div>
    </>
  );
};

export default TodoList;
