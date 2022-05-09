import React from 'react';
import Header from '../header/header';

export default function choose() {
    return (
        <div>
            <Header />
            <div class="join-container">
                <nav class="join-header">
                    <h1><i class="fas fa-smile"></i>Here4You Chatroom</h1>
                </nav>
                <main class="join-main">
                    <form action="chat.html">
                        <div class="form-control">
                            <label for="issue">Select what you are going through</label>
                            <select name="issue" id="issue">
                                <option value="Clinical Depression">Clinical Depression</option>
                                <option value="Anxiety Disorder">Anxiety Disorder</option>
                                <option value="Bipolar Disorder">Bipolar Disorder</option>
                                <option value="Dementia">Dementia</option>
                                <option value="ADHD">ADHD</option>
                                <option value="Schizophrenia">Schizophrenia</option>
                                <option value="PTSD">PTSD</option>
                            </select>
                        </div>
                        <button type="submit" class="btn">Join Chat</button>
                    </form>
                </main>
            </div>
        </div>
    )
}
