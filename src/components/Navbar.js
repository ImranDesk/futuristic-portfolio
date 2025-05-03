import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ toggleTheme, currentTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <NavContainer scrolled={scrolled}>
      <NavInner>
        <Logo>
          <NavLink to="/">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="logo-text"
            >
              <span>SI</span>
              <div className="logo-accent" />
            </motion.div>
          </NavLink>
        </Logo>

        <NavLinks className={isOpen ? "active" : ""}>
          <NavItem>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="nav-number">01.</span>Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="nav-number">02.</span>About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="nav-number">03.</span>Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="nav-number">04.</span>Contact
            </NavLink>
          </NavItem>
        </NavLinks>

        <NavControls>
          <ThemeToggle onClick={toggleTheme}>
            {currentTheme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </ThemeToggle>

          <HamburgerButton
            onClick={() => setIsOpen(!isOpen)}
            className={isOpen ? "active" : ""}
          >
            <span></span>
            <span></span>
            <span></span>
          </HamburgerButton>
        </NavControls>
      </NavInner>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <MobileNavItem>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="nav-number"
                >
                  01.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Home
                </motion.span>
              </NavLink>
            </MobileNavItem>
            <MobileNavItem>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="nav-number"
                >
                  02.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  About
                </motion.span>
              </NavLink>
            </MobileNavItem>
            <MobileNavItem>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="nav-number"
                >
                  03.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Projects
                </motion.span>
              </NavLink>
            </MobileNavItem>
            <MobileNavItem>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="nav-number"
                >
                  04.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Contact
                </motion.span>
              </NavLink>
            </MobileNavItem>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 0;
  z-index: 1000;
  transition: all 0.3s ease;
  backdrop-filter: ${({ scrolled }) => (scrolled ? "blur(10px)" : "none")};
  background: ${({ scrolled, theme }) =>
    scrolled ? `${theme.glass}` : "transparent"};
  box-shadow: ${({ scrolled, theme }) => (scrolled ? theme.shadow : "none")};

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.gradient};
    opacity: ${({ scrolled }) => (scrolled ? 1 : 0)};
    transition: opacity 0.3s ease;
  }
`;

const NavInner = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  .logo-text {
    font-family: var(--font-secondary);
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    position: relative;

    span {
      z-index: 10;
      background: ${({ theme }) => theme.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      position: relative;
    }

    .logo-accent {
      position: absolute;
      height: 15px;
      width: 15px;
      background: ${({ theme }) => theme.accent};
      border-radius: 50%;
      right: -8px;
      top: 0;
      box-shadow: ${({ theme }) => theme.neon};
      animation: pulse 2s infinite;

      @keyframes pulse {
        0% {
          transform: scale(0.95);
          box-shadow: 0 0 0 0 rgba(0, 255, 255, 0.7);
        }

        70% {
          transform: scale(1);
          box-shadow: 0 0 0 10px rgba(0, 255, 255, 0);
        }

        100% {
          transform: scale(0.95);
          box-shadow: 0 0 0 0 rgba(0, 255, 255, 0);
        }
      }
    }
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  a {
    font-family: var(--font-secondary);
    font-size: 0.875rem;
    color: ${({ theme }) => theme.text};
    display: flex;
    align-items: center;
    position: relative;
    padding: 0.5rem 0;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: ${({ theme }) => theme.gradient};
      transition: width 0.3s ease;
    }

    &:hover:after,
    &.active:after {
      width: 100%;
    }

    &.active {
      color: ${({ theme }) => theme.accent};
    }
  }

  .nav-number {
    color: ${({ theme }) => theme.accent};
    margin-right: 0.5rem;
    font-size: 0.75rem;
  }
`;

const NavControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(30deg);
  }
`;

const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.text};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ className }) =>
        className === "active" ? "rotate(45deg)" : "rotate(0)"};
    }

    &:nth-child(2) {
      opacity: ${({ className }) => (className === "active" ? "0" : "1")};
      transform: ${({ className }) =>
        className === "active" ? "translateX(20px)" : "translateX(0)"};
    }

    &:nth-child(3) {
      transform: ${({ className }) =>
        className === "active" ? "rotate(-45deg)" : "rotate(0)"};
    }
  }

  &.active span {
    background: ${({ theme }) => theme.accent};
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.overlay};
    backdrop-filter: blur(10px);
    z-index: 9;
    padding: 2rem;
  }
`;

const MobileNavItem = styled.div`
  a {
    font-family: var(--font-secondary);
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};
    display: flex;
    align-items: center;

    &.active {
      color: ${({ theme }) => theme.accent};
    }
  }

  .nav-number {
    color: ${({ theme }) => theme.accent};
    margin-right: 1rem;
    font-size: 1.25rem;
  }
`;

export default Navbar;
