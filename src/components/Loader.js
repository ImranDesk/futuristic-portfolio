import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderContent>
        <CircleContainer>
          <motion.div
            animate={{
              scale: [1, 1.2, 1.2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["50%", "50%", "50%", "50%", "50%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
            className="circle-outer"
          >
            <motion.div
              animate={{
                scale: [1, 1.3, 1.3, 1, 1],
                rotate: [0, 0, -180, -180, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
              className="circle-inner"
            >
              <motion.div
                animate={{
                  scale: [1, 1.5, 1.5, 1, 1],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
                className="circle-core"
              />
            </motion.div>
          </motion.div>
        </CircleContainer>

        <LoadingText>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.2,
            }}
          >
            I
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.3,
            }}
          >
            N
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.4,
            }}
          >
            I
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.5,
            }}
          >
            T
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.6,
            }}
          >
            I
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.7,
            }}
          >
            A
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.8,
            }}
          >
            L
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.9,
            }}
          >
            I
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 1.0,
            }}
          >
            Z
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 1.1,
            }}
          >
            I
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 1.2,
            }}
          >
            N
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 1.3,
            }}
          >
            G
          </motion.span>
        </LoadingText>

        <LoadingBar>
          <motion.div
            className="progress"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          />
        </LoadingBar>
      </LoaderContent>
    </LoaderContainer>
  );
};

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.background || "#050816"};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const LoaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const CircleContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;

  .circle-outer {
    position: absolute;
    top: 0;
    left: 0;
    width: 120px;
    height: 120px;
    border: 2px solid ${({ theme }) => theme.accent || "#00ffff"};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 15px ${({ theme }) => theme.accent || "#00ffff"};
  }

  .circle-inner {
    width: 80px;
    height: 80px;
    border: 2px solid ${({ theme }) => theme.accentAlt || "#ff00ff"};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px ${({ theme }) => theme.accentAlt || "#ff00ff"};
  }

  .circle-core {
    width: 40px;
    height: 40px;
    background: ${({ theme }) =>
      theme.gradient || "linear-gradient(90deg, #00ffff, #0080ff, #ff00ff)"};
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0, 128, 255, 0.7);
  }
`;

const LoadingText = styled.div`
  font-family: var(--font-secondary);
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text || "#ffffff"};
  display: flex;
  gap: 0.5rem;

  span {
    display: inline-block;
    color: ${({ theme }) => theme.accent || "#00ffff"};
    text-shadow: 0 0 5px ${({ theme }) => theme.accent || "#00ffff"};
  }
`;

const LoadingBar = styled.div`
  width: 300px;
  height: 4px;
  background: ${({ theme }) => theme.backgroundAlt || "#0a0e29"};
  border-radius: 2px;
  overflow: hidden;

  .progress {
    height: 100%;
    background: ${({ theme }) =>
      theme.gradient || "linear-gradient(90deg, #00ffff, #0080ff, #ff00ff)"};
  }
`;

export default Loader;
