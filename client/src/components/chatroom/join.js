import React from 'react';
import Header from '../header/header';
import { useState } from "react";
import Chat from "./chat";
import io from 'socket.io-client';

const socket = io.connect("http://localhost:3001");

export default function Join() {
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);

    const joinRoom = () => {
        if (username !== "" && room !== "") {
            socket.emit("join_room", room);
            setShowChat(true);
        }
    };

    return (
        <div>
            <Header />
            <div className="App">
                {!showChat ? (
                    <div className="joinChatContainer">
                        <h3>Join A Chat</h3>
                        <input
                            type="text"
                            placeholder="John..."
                            onChange={(event) => {
                                setUsername(event.target.value);
                            }}
                        />

                        <select name="cars" class="cars" onChange={(event) => {
                            setRoom(event.target.value);
                        }}>
                            <option value="">-Select an Option-</option>
                            <option value="Clinical Depression">Clinical Depression</option>
                            <option value="Anxiety Disorder">Anxiety Disorder</option>
                            <option value="Bipolar Disorder">Bipolar Disorder</option>
                            <option value="Dementia">Dementia</option>
                            <option value="ADHD">ADHD</option>
                            <option value="Schizophrenia">Schizophrenia</option>
                            <option value="PTSD">PTSD</option>
                        </select>
                        <span class="custom-arrow"></span>
                        <button onClick={joinRoom} id="btn">Join A Room</button>
                    </div>
                ) : (
                    <Chat socket={socket} username={username} room={room} />
                )}
            </div>
        </div>
    )
}