import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --font-primary: 'Space Grotesk', sans-serif;
    --font-secondary: 'Orbitron', sans-serif;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    
    @media (min-width: 768px) {
      font-size: 18px;
    }
  }

  body {
    font-family: var(--font-primary);
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-secondary);
    margin: 0 0 1rem 0;
    font-weight: 700;
    line-height: 1.2;
  }

  h1 {
    font-size: 3.5rem;
    background: ${({ theme }) => theme.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: 2.5rem;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 2rem;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    margin: 0 0 1rem 0;
    line-height: 1.6;
  }

  a {
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    
    &:hover {
      color: ${({ theme }) => theme.accentHover};
    }

    &:after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background: ${({ theme }) => theme.accent};
      transition: width 0.3s ease;
    }
    
    &:hover:after {
      width: 100%;
    }
  }

  button {
    font-family: var(--font-secondary);
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  ::selection {
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.background};
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.backgroundAlt};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.accent};
    border-radius: 5px;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 0;
  }
  
  .section {
    padding: 5rem 0;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2rem;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
  
  .flex {
    display: flex;
    flex-wrap: wrap;
  }
  
  .glitch-effect {
    position: relative;
    
    &:before, &:after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    
    &:before {
      left: 2px;
      text-shadow: -1px 0 ${({ theme }) => theme.accent};
      background: ${({ theme }) => theme.background};
      clip: rect(44px, 450px, 56px, 0);
      animation: glitch-anim 5s infinite linear alternate-reverse;
    }
    
    &:after {
      left: -2px;
      text-shadow: -1px 0 ${({ theme }) => theme.accentAlt};
      background: ${({ theme }) => theme.background};
      clip: rect(44px, 450px, 56px, 0);
      animation: glitch-anim2 5s infinite linear alternate-reverse;
    }
    
    @keyframes glitch-anim {
      0% {
        clip: rect(25px, 9999px, 40px, 0);
      }
      20% {
        clip: rect(20px, 9999px, 80px, 0);
      }
      40% {
        clip: rect(25px, 9999px, 5px, 0);
      }
      60% {
        clip: rect(15px, 9999px, 15px, 0);
      }
      80% {
        clip: rect(5px, 9999px, 60px, 0);
      }
      100% {
        clip: rect(50px, 9999px, 85px, 0);
      }
    }
    
    @keyframes glitch-anim2 {
      0% {
        clip: rect(65px, 9999px, 100px, 0);
      }
      20% {
        clip: rect(15px, 9999px, 30px, 0);
      }
      40% {
        clip: rect(35px, 9999px, 80px, 0);
      }
      60% {
        clip: rect(10px, 9999px, 60px, 0);
      }
      80% {
        clip: rect(95px, 9999px, 35px, 0);
      }
      100% {
        clip: rect(48px, 9999px, 10px, 0);
      }
    }
  }
  
  .neon-border {
    position: relative;
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 2px solid ${({ theme }) => theme.accent};
      z-index: -1;
      animation: neon-pulse 2s infinite alternate;
    }
    
    @keyframes neon-pulse {
      from {
        box-shadow: 0 0 5px ${({ theme }) => theme.accent},
                    0 0 10px ${({ theme }) => theme.accent},
                    0 0 15px ${({ theme }) => theme.accent};
      }
      to {
        box-shadow: 0 0 10px ${({ theme }) => theme.accent},
                    0 0 20px ${({ theme }) => theme.accent},
                    0 0 30px ${({ theme }) => theme.accent};
      }
    }
  }
`;
