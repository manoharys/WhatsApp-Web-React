import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import "./sideBarChat.css";
import db from "../firebase";
import { Link } from "react-router-dom";

const SideBarChat = ({ addNewChat, id, name }) => {
  const [messages, setMessages] = useState("");
  const [seed, setSeed] = useState("123");
  const avatar = `https://avatars.dicebear.com/api/human/${seed}.svg`;

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snap) => setMessages(snap.docs.map((doc) => doc.data())));
    }
  }, [id]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat");

    if (roomName) {
      //data base stuff
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={avatar} />
        <div className="sidebarChat_info">
          <h3
            style={{
              fontSize: "18px",
              color: "rgb(69 66 66)",
            }}
          >
            {name}
          </h3>
          <p
            style={{
              fontSize: "13px",
              marginLeft: "6px",
              marginTop: "4px",
              color: "#3a3838",
            }}
          >
            {messages[0]?.message + ".."}
          </p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2
        style={{
          fontSize: "20px",
          color: "rgb(69 66 66)",
          textAlign: "center",
          flex: 1,
        }}
      >
        Add new Chat
      </h2>
    </div>
  );
};

export default SideBarChat;
