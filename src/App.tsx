import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Howl, Howler } from "howler";
import classic from "./assets/classic.mp3";
import electric from "./assets/electric-guitar.mp3";
import ghibli from "./assets/ghibli.mp3";
import harryPotter from "./assets/harry-potter.mp3";
import jazz from "./assets/jazz.mp3";
import piano from "./assets/piano.mp3";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(0, 238, 194), rgb(0, 131, 238));
`;
const Box = styled(motion.div)`
  width: 60vh;
  height: 60vh;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
`;

const Btn = styled.button`
  background-color: transparent;
  border: none;
`;
const Icon = styled(motion.svg)`
  width: 22vh;
  height: 22vh;
  path {
    fill: ivory;
  }
`;

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const sound = new Howl({
    src: [ghibli, harryPotter, electric, jazz, piano, classic],
    onpause: function () {
      console.log("pause!");
    },
    onend: function () {
      console.log("Finished!");
    },
  });
  const play = () => {
    sound.once("unlock", function () {
      sound.play();
    });
  };
  const pause = () => {
    sound.pause();
    setIsPlaying(false);
  };

  const boxVariants = {
    start: { scale: 0 },
    end: {
      scale: 1,
      transition: {
        duration: 1,
        type: "spring",
        bounce: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const iconVariants = {
    start: { opacity: 0, y: 10 },
    end: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <Container>
      <Box variants={boxVariants} initial="start" animate="end">
        {isPlaying ? (
          <Btn onClick={pause}>
            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z" />
            </Icon>
          </Btn>
        ) : (
          <Btn onClick={play}>
            <Icon
              variants={iconVariants}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
            </Icon>
          </Btn>
        )}

        <Icon
          variants={iconVariants}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
        </Icon>

        <Icon
          variants={iconVariants}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z" />
        </Icon>

        <Icon
          variants={iconVariants}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z" />
        </Icon>
      </Box>
    </Container>
  );
}

export default App;
