import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import "./sideBarChat.css"

const SideBarChat = ({ addNewChat , id, name}) => {
  const [seed, setSeed] = useState("123");
  const avatar = `https://avatars.dicebear.com/api/human/${seed}.svg`;
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat");

    if (roomName) {
      //data base stuff
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={avatar} />
      <div className="sidebarChat_info">
        <h2>{name}</h2>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
};

export default SideBarChat;
