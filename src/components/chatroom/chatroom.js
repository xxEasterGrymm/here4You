import React from 'react';
import Header from '../header/header';
import { Link } from 'react-router-dom';

export default function chatroom() {
    return (
        <div>
            <Header />
            <div class="chat-container">
                <nav class="chat-header">
                    <h1><i class="fas fa-smile"></i>Here4You Chatroom</h1>
                    <Link to="/">Leave Room</Link>
                </nav>
                <main class="chat-main">
                    <div class="chat-sidebar">
                        <h3><i class="fas fa-comments"></i> Issue:</h3>
                        <h2 id="room-name">Anxiety Disorder</h2>
                        <h3><i class="fas fa-users"></i> Users</h3>
                        <ul id="users">
                            <li>Brad</li>
                            <li>John</li>
                            <li>Mary</li>
                            <li>Paul</li>
                            <li>Mike</li>
                        </ul>
                    </div>
                    <div class="chat-messages">
                        <div class="message">
                            <p class="meta">Brad <span>9:12pm</span></p>
                            <p class="text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
                                repudiandae.
                            </p>
                        </div>
                        <div class="message">
                            <p class="meta">Mary <span>9:15pm</span></p>
                            <p class="text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
                                repudiandae.
                            </p>
                        </div>
                    </div>
                </main>
                <div class="chat-form-container">
                    <form id="chat-form">
                        <input
                            id="msg"
                            type="text"
                            placeholder="Enter Message"
                            required
                            autocomplete="off"
                        />
                        <button class="btn"><i class="fas fa-paper-plane"></i> Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}