import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterInner>
        <FooterTop>
          <FooterLeft>
            <FooterLogo>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                SI
              </motion.span>
              <motion.div
                className="logo-accent"
                animate={{
                  boxShadow: [
                    "0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff",
                    "0 0 2px #00ffff, 0 0 5px #00ffff, 0 0 10px #00ffff",
                    "0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </FooterLogo>
            <FooterTagline>
              Building the digital future, one pixel at a time.
            </FooterTagline>
          </FooterLeft>

          <FooterRight>
            <FooterLinks>
              <FooterLinksColumn>
                <FooterLinksTitle>Navigation</FooterLinksTitle>
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/projects">Projects</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
              </FooterLinksColumn>

              <FooterLinksColumn>
                <FooterLinksTitle>Social</FooterLinksTitle>
                <FooterLink
                  href={portfolioData.personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </FooterLink>
                <FooterLink
                  href={portfolioData.personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </FooterLink>
                <FooterLink
                  href={portfolioData.personalInfo.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </FooterLink>
              </FooterLinksColumn>
            </FooterLinks>
          </FooterRight>
        </FooterTop>

        <FooterDivider />

        <FooterBottom>
          <FooterCopyright>
            © {currentYear} Syed Imran. All rights reserved.
          </FooterCopyright>
          <FooterMadeWith>
            <span>Made with </span>
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0.5,
              }}
              className="heart"
            >
              ♥
            </motion.span>
            <span> and React</span>
          </FooterMadeWith>
        </FooterBottom>
      </FooterInner>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.backgroundAlt};
  border-top: 1px solid ${({ theme }) => theme.border};
  padding: 4rem 0 2rem;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.gradient};
  }
`;

const FooterInner = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const FooterLeft = styled.div`
  max-width: 350px;
`;

const FooterLogo = styled.div`
  font-family: var(--font-secondary);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  position: relative;
  width: fit-content;

  span {
    background: ${({ theme }) => theme.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
  }

  .logo-accent {
    position: absolute;
    height: 10px;
    width: 10px;
    background: ${({ theme }) => theme.accent};
    border-radius: 50%;
    right: -5px;
    top: 5px;
  }
`;

const FooterTagline = styled.p`
  color: ${({ theme }) => theme.textAlt};
  line-height: 1.6;
`;

const FooterRight = styled.div`
  display: flex;
  gap: 2rem;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 4rem;

  @media (max-width: 480px) {
    gap: 2rem;
  }
`;

const FooterLinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterLinksTitle = styled.h4`
  font-family: var(--font-secondary);
  font-size: 1rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.accent};
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.textAlt};
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    color: ${({ theme }) => theme.accent};
    transform: translateX(5px);
  }
`;

const FooterDivider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.border};
  margin: 3rem 0 2rem;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 1px;
    background: ${({ theme }) => theme.gradient};
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const FooterCopyright = styled.p`
  color: ${({ theme }) => theme.textAlt};
  font-size: 0.9rem;
  margin: 0;
`;

const FooterMadeWith = styled.p`
  color: ${({ theme }) => theme.textAlt};
  font-size: 0.9rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  .heart {
    color: ${({ theme }) => theme.error};
    display: inline-block;
  }
`;

export default Footer;
