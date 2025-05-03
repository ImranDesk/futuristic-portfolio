import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.99],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.6,
      },
    },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <Container
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <GlowOverlay />
      <ContentWrapper>
        <Header variants={fadeInUp}>
          <Title>Contact</Title>
          <Subtitle>Let's build the future together</Subtitle>
        </Header>

        <ContactGrid variants={staggerContainer}>
          <ContactInfo variants={fadeInUp}>
            <InfoTitle>Get in Touch</InfoTitle>
            <InfoText>
              Have a project in mind or want to discuss future tech
              possibilities? I'm always open to new collaborations and
              challenges.
            </InfoText>

            <ContactDetails>
              <DetailItem>
                <DetailIcon>📍</DetailIcon>
                <DetailText>{portfolioData.personalInfo.location}</DetailText>
              </DetailItem>
              <DetailItem>
                <DetailIcon>📧</DetailIcon>
                <DetailText>{portfolioData.personalInfo.email}</DetailText>
              </DetailItem>
            </ContactDetails>

            <SocialLinks>
              <SocialLink
                href={portfolioData.personalInfo.socialLinks.github}
                target="_blank"
              >
                GitHub
              </SocialLink>
              <SocialLink
                href={portfolioData.personalInfo.socialLinks.linkedin}
                target="_blank"
              >
                LinkedIn
              </SocialLink>
              <SocialLink
                href={portfolioData.personalInfo.socialLinks.twitter}
                target="_blank"
              >
                Twitter
              </SocialLink>
            </SocialLinks>
          </ContactInfo>

          <ContactForm variants={fadeInUp} onSubmit={handleSubmit}>
            <FormTitle>Send Message</FormTitle>

            {isSubmitted ? (
              <SuccessMessage>
                Message sent successfully! I'll get back to you soon.
              </SuccessMessage>
            ) : (
              <>
                <FormGroup>
                  <FormLabel>Name</FormLabel>
                  <FormInput
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel>Email</FormLabel>
                  <FormInput
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel>Subject</FormLabel>
                  <FormInput
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel>Message</FormLabel>
                  <FormTextarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <SubmitButton
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ButtonGlow />
                </SubmitButton>
              </>
            )}
          </ContactForm>
        </ContactGrid>
      </ContentWrapper>
    </Container>
  );
};

const Container = styled(motion.div)`
  min-height: 100vh;
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
`;

const GlowOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at top right,
    ${(props) => props.theme.neonGlow}22,
    transparent 70%
  );
  z-index: -1;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled(motion.header)`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: ${(props) => props.theme.primaryText};
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px ${(props) => props.theme.neonGlow}88;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.secondaryText};
  max-width: 600px;
  margin: 0 auto;
`;

const ContactGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled(motion.div)`
  background: ${(props) => props.theme.cardBg};
  border-radius: 1rem;
  padding: 2.5rem;
  border: 1px solid ${(props) => props.theme.borderColor};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  height: fit-content;
`;

const InfoTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.primaryText};
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: ${(props) => props.theme.neonGlow};
    border-radius: 4px;
  }
`;

const InfoText = styled.p`
  color: ${(props) => props.theme.secondaryText};
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const ContactDetails = styled.div`
  margin-bottom: 2rem;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const DetailIcon = styled.span`
  margin-right: 1rem;
  font-size: 1.2rem;
`;

const DetailText = styled.span`
  color: ${(props) => props.theme.primaryText};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: ${(props) => props.theme.primaryText};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  border: 1px solid ${(props) => props.theme.neonGlow}44;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.neonGlow}22;
    border-color: ${(props) => props.theme.neonGlow};
    box-shadow: 0 0 15px ${(props) => props.theme.neonGlow}44;
  }
`;

const ContactForm = styled(motion.form)`
  background: ${(props) => props.theme.cardBg};
  border-radius: 1rem;
  padding: 2.5rem;
  border: 1px solid ${(props) => props.theme.borderColor};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.primaryText};
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: ${(props) => props.theme.neonGlow};
    border-radius: 4px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.secondaryText};
  font-size: 0.9rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  background: ${(props) => props.theme.inputBg || "rgba(0, 0, 0, 0.2)"};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 0.5rem;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.neonGlow};
    box-shadow: 0 0 0 2px ${(props) => props.theme.neonGlow}33;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  background: ${(props) => props.theme.inputBg || "rgba(0, 0, 0, 0.2)"};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 0.5rem;
  color: #ffffff;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.neonGlow};
    box-shadow: 0 0 0 2px ${(props) => props.theme.neonGlow}33;
  }
`;

const SubmitButton = styled(motion.button)`
  background: ${(props) =>
    props.theme.buttonGradient || "linear-gradient(45deg, #3f6fff, #6e25ff)"};
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ButtonGlow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    transparent,
    ${(props) => props.theme.neonGlow}44,
    transparent
  );
  transform: translateX(-100%);
  animation: buttonGlow 3s infinite;

  @keyframes buttonGlow {
    0% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const SuccessMessage = styled.div`
  background: rgba(0, 255, 128, 0.1);
  border: 1px solid rgba(0, 255, 128, 0.3);
  padding: 1rem;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.primaryText};
  text-align: center;
  margin: 2rem 0;
  box-shadow: 0 0 15px rgba(0, 255, 128, 0.2);
`;

export default Contact;
