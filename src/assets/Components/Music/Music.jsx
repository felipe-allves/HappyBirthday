import React from "react";
import './Music.css'

function Music () {
    return(
        <main className="container">
            <section className="music-section">
            <h2>Músicas Favoritas</h2>
            <div className="spotify-player">
                <div className="now-playing">
                    <img id="currentTrackImage" src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=60&h=60&fit=crop" alt="Album"/>
                    <div className="track-info">
                        <h4 id="currentTrackTitle">Happy - Pharrell Williams</h4>
                        <p id="currentTrackArtist">G I R L</p>
                    </div>
                </div>
                
                <div className="player-controls">
                    <button className="control-btn" onclick="togglePlay()">
                        <i id="playIcon" className="fas fa-play"></i>
                    </button>
                    <div className="progress-container">
                        <div className="progress-bar">
                            <div className="progress" id="progress"></div>
                        </div>
                        <div className="time-info">
                            <span id="currentTime">0:00</span>
                            <span id="totalTime">3:45</span>
                        </div>
                    </div>
                </div>

                <div className="playlist">
                    <div className="playlist-item active" onclick="playTrack(0)">
                        <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=40&h=40&fit=crop" alt="Album"/>
                        <div>
                            <h5>Happy</h5>
                            <p>Pharrell Williams</p>
                        </div>
                    </div>
                    <div className="playlist-item" onclick="playTrack(1)">
                        <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=40&h=40&fit=crop" alt="Album"/>
                        <div>
                            <h5>Don't Stop Me Now</h5>
                            <p>Queen</p>
                        </div>
                    </div>
                    <div className="playlist-item" onclick="playTrack(2)">
                        <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=40&h=40&fit=crop" alt="Album"/>
                        <div>
                            <h5>Good as Hell</h5>
                            <p>Lizzo</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </main>
    )
}

export default Music