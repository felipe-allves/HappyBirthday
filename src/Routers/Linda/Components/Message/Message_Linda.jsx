import React from "react";
import './Message_Linda.css'

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

                    <div className="message-card">
                        <p>"Cada momento com você é lindo e especial, seja servindo, cantando ou dançando."</p>
                        <small>De: Felipe ❤️</small>
                    </div>

                    <div className="message-card">
                        <p>"Deus, proteja ela de todo mal, que a sua graça e bondade esteja na vida dela, que aonde ela andar, o Senhor venha estar com ela, protejendo e livrando de todo mal. Amém!"</p>
                        <small>De: Felipe ❤️</small>
                    </div>

                    <div className="message-card">
                        <p>"Você é uma ótima amiga e companheira, que cada vez mais a gente possa caminhar mais juntos, ser mais íntimos, próximos, que venhamos cada vez mais se tornar mais amigos. Que os próximos momentos que virão, seja glorioso, explendido e marcantes em nossas vidas. Obrigado por existir!"</p>
                        <small>De: Felipe ❤️</small>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Message