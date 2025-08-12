import React, { useState, useRef, useEffect } from "react";
import './Music.css';
import { FaPlay, FaPause } from "react-icons/fa";

function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef(null);

  const tracks = [
    {
      title: 'Happy - Pharrell Williams',
      artist: 'G I R L',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=60&h=60&fit=crop',
      src: 'musica1.mp3' // coloque o link do áudio real
    },
    {
      title: "Don't Stop Me Now - Queen",
      artist: 'Jazz',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=60&h=60&fit=crop',
      src: 'musica2.mp3'
    },
    {
      title: 'Good as Hell - Lizzo',
      artist: 'Cuz I Love You',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=60&h=60&fit=crop',
      src: 'musica3.mp3'
    }
  ];

  const currentTrack = tracks[currentTrackIndex];

  function togglePlay() {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  function playTrack(index) {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
    setTimeout(() => {
      audioRef.current.play();
    }, 100);
  }

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener('timeupdate', updateTime);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
    };
  }, []);

  const progressPercent = currentTrack && audioRef.current?.duration
    ? (currentTime / audioRef.current.duration) * 100
    : 0;

  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60).toString().padStart(2, '0');

  return (
    <main className="container">
      <section className="music-section">
        <h2>Músicas Favoritas</h2>
        <div className="spotify-player">

          <div className="now-playing">
            <img src={currentTrack.image} alt="Album" />
            <div className="track-info">
              <h4>{currentTrack.title}</h4>
              <p>{currentTrack.artist}</p>
            </div>
          </div>

          <div className="player-controls">
            <button className="control-btn" onClick={togglePlay}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <div className="progress-container">
              <div className="progress-bar">
                <div className="progress" style={{ width: `${progressPercent}%` }}></div>
              </div>
              <div className="time-info">
                <span>{minutes}:{seconds}</span>
                <span>3:45</span> {/* pode ajustar para duração real */}
              </div>
            </div>
          </div>

          <div className="playlist">
            {tracks.map((track, i) => (
              <div
                key={i}
                className={`playlist-item ${i === currentTrackIndex ? 'active' : ''}`}
                onClick={() => playTrack(i)}
              >
                <img src={track.image} alt="Album" />
                <div>
                  <h5>{track.title.split(" - ")[0]}</h5>
                  <p>{track.title.split(" - ")[1]}</p>
                </div>
              </div>
            ))}
          </div>

          <audio
            ref={audioRef}
            src={currentTrack.src}
            onEnded={() => setIsPlaying(false)}
          ></audio>
        </div>
      </section>
    </main>
  );
}

export default Music;
