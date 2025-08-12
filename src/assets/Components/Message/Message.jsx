import React from "react";
import './Message.css'

function Message () {
    return(
        <main className="container">
            <section className="message-section">
                <h2>Mensagens Especiais</h2>
                <div className="messages-container" id="messagesContainer">
                    <div className="message-card">
                        <p>"Que seu dia seja tão especial quanto você é para mim! Feliz aniversário!"</p>
                        <small>De: Felipe ❤️</small>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Message