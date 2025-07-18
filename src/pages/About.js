import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AboutContainer>
      <PageHeader>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PageTitle>About Me</PageTitle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "150px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="page-line"
        />
      </PageHeader>

      <AboutSection>
        <AboutGrid>
          <AboutContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SectionSubtitle>Who I Am</SectionSubtitle>
              <AboutText>{portfolioData.personalInfo.bio}</AboutText>

              <PersonalInfoGrid>
                <PersonalInfoItem>
                  <PersonalInfoLabel>Name</PersonalInfoLabel>
                  <PersonalInfoValue>
                    {portfolioData.personalInfo.name}
                  </PersonalInfoValue>
                </PersonalInfoItem>

                <PersonalInfoItem>
                  <PersonalInfoLabel>Email</PersonalInfoLabel>
                  <PersonalInfoValue>
                    <a href={`mailto:${portfolioData.personalInfo.email}`}>
                      {portfolioData.personalInfo.email}
                    </a>
                  </PersonalInfoValue>
                </PersonalInfoItem>

                <PersonalInfoItem>
                  <PersonalInfoLabel>Location</PersonalInfoLabel>
                  <PersonalInfoValue>
                    {portfolioData.personalInfo.location}
                  </PersonalInfoValue>
                </PersonalInfoItem>

                <PersonalInfoItem>
                  <PersonalInfoLabel>Role</PersonalInfoLabel>
                  <PersonalInfoValue>
                    {portfolioData.personalInfo.title}
                  </PersonalInfoValue>
                </PersonalInfoItem>
              </PersonalInfoGrid>

              <SocialLinks>
                <SocialLink
                  href={portfolioData.personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </SocialLink>

                <SocialLink
                  href={portfolioData.personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </SocialLink>

                <SocialLink
                  href={portfolioData.personalInfo.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </SocialLink>
              </SocialLinks>
            </motion.div>
          </AboutContent>

          <AboutVisual>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="about-image-container"
            >
              <AboutImage className="neon-border" />
              <AboutImageOverlay />
              <AboutImagePattern />
            </motion.div>
          </AboutVisual>
        </AboutGrid>
      </AboutSection>

      <ExperienceSection>
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Work Experience</SectionTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "150px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-line"
          />
        </SectionHeader>

        <TimelineContainer>
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <TimelineItem className={index % 2 === 0 ? "left" : "right"}>
                <TimelineContent className="neon-border">
                  <TimelinePeriod>{exp.period}</TimelinePeriod>
                  <TimelineTitle>{exp.position}</TimelineTitle>
                  <TimelineSubtitle>{exp.company}</TimelineSubtitle>
                  <TimelineText>{exp.description}</TimelineText>
                </TimelineContent>
              </TimelineItem>
            </motion.div>
          ))}
          <TimelineLine />
        </TimelineContainer>
      </ExperienceSection>

      <EducationSection>
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Education</SectionTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "150px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-line"
          />
        </SectionHeader>

        <EducationGrid>
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <EducationCard className="neon-border">
                <EducationPeriod>{edu.period}</EducationPeriod>
                <EducationDegree>{edu.degree}</EducationDegree>
                <EducationInstitution>{edu.institution}</EducationInstitution>
              </EducationCard>
            </motion.div>
          ))}
        </EducationGrid>
      </EducationSection>

      {/* <TestimonialsSection>
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Testimonials</SectionTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "150px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-line"
          />
        </SectionHeader>

        <TestimonialsGrid>
          {portfolioData.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <TestimonialCard className="neon-border">
                <TestimonialQuote>"</TestimonialQuote>
                <TestimonialText>{testimonial.text}</TestimonialText>
                <TestimonialAuthor>
                  <TestimonialName>{testimonial.name}</TestimonialName>
                  <TestimonialPosition>
                    {testimonial.position}
                  </TestimonialPosition>
                </TestimonialAuthor>
              </TestimonialCard>
            </motion.div>
          ))}
        </TestimonialsGrid>
      </TestimonialsSection> */}
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  width: 100%;
  padding-top: 80px;
`;

const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 5%;
  text-align: center;

  .page-line {
    height: 3px;
    background: ${({ theme }) => theme.accent};
    margin-top: 1rem;
    border-radius: 2px;
  }
`;

const PageTitle = styled.h1`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const AboutSection = styled.section`
  padding: 3rem 5%;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const AboutContent = styled.div`
  @media (max-width: 992px) {
    order: 2;
  }
`;

const SectionSubtitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const AboutText = styled.p`
  color: ${({ theme }) => theme.textAlt};
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const PersonalInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const PersonalInfoItem = styled.div``;

const PersonalInfoLabel = styled.span`
  display: block;
  color: ${({ theme }) => theme.accent};
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-family: var(--font-secondary);
`;

const PersonalInfoValue = styled.span`
  display: block;
  color: ${({ theme }) => theme.text};
  font-size: 1.1rem;

  a {
    color: ${({ theme }) => theme.text};

    &:hover {
      color: ${({ theme }) => theme.accent};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.glass};
  color: ${({ theme }) => theme.accent};
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 15px ${({ theme }) => theme.accent};
  }

  &:after {
    display: none;
  }
`;

const AboutVisual = styled.div`
  position: relative;

  .about-image-container {
    position: relative;
    width: 100%;
    height: 400px;
    border-radius: 8px;
    overflow: hidden;
  }

  @media (max-width: 992px) {
    order: 1;
  }
`;

const AboutImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://via.placeholder.com/600x400?text=Syed+Imran");
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
`;

const AboutImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.accent}40,
    ${({ theme }) => theme.accentAlt}40
  );
  z-index: 2;
`;

const AboutImagePattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      ${({ theme }) => theme.accent}20 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      ${({ theme }) => theme.accent}20 1px,
      transparent 1px
    );
  background-size: 20px 20px;
  z-index: 3;
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  text-align: center;

  .section-line {
    height: 3px;
    background: ${({ theme }) => theme.accent};
    margin-top: 1rem;
    border-radius: 2px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ExperienceSection = styled.section`
  padding: 6rem 5%;
  background: ${({ theme }) => theme.backgroundAlt};
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.gradient};
  }

  &:before {
    top: 0;
  }

  &:after {
    bottom: 0;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const TimelineLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: ${({ theme }) => theme.border};

  @media (max-width: 768px) {
    left: 30px;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  width: 50%;
  padding: 0 3rem;
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }

  &.left {
    left: 0;

    &:before {
      right: 0;
    }
  }

  &.right {
    left: 50%;

    &:before {
      left: 0;
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 15px;
    width: 15px;
    height: 15px;
    background: ${({ theme }) => theme.accent};
    border-radius: 50%;
    box-shadow: 0 0 10px ${({ theme }) => theme.accent};
    z-index: 1;
  }

  &.left:before {
    right: -7.5px;
  }

  &.right:before {
    left: -7.5px;
  }

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    padding-left: 60px;
    padding-right: 0;

    &.left,
    &.right {
      left: 0;
    }

    &:before {
      left: 23px !important;
      right: auto !important;
    }
  }
`;

const TimelineContent = styled.div`
  padding: 1.5rem;
  background: ${({ theme }) => theme.card};
  border-radius: 8px;
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 2;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const TimelinePeriod = styled.div`
  display: inline-block;
  background: ${({ theme }) => theme.glass};
  color: ${({ theme }) => theme.accent};
  font-size: 0.8rem;
  font-family: var(--font-secondary);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  margin-bottom: 1rem;
`;

const TimelineTitle = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const TimelineSubtitle = styled.h4`
  color: ${({ theme }) => theme.accent};
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const TimelineText = styled.p`
  color: ${({ theme }) => theme.textAlt};
  font-size: 0.95rem;
  line-height: 1.6;
`;

const EducationSection = styled.section`
  padding: 6rem 5%;
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
`;

const EducationCard = styled.div`
  padding: 2rem;
  background: ${({ theme }) => theme.card};
  border-radius: 8px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const EducationPeriod = styled.div`
  display: inline-block;
  background: ${({ theme }) => theme.glass};
  color: ${({ theme }) => theme.accent};
  font-size: 0.8rem;
  font-family: var(--font-secondary);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  margin-bottom: 1rem;
`;

const EducationDegree = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
`;

const EducationInstitution = styled.h4`
  color: ${({ theme }) => theme.accent};
  font-size: 1rem;
  font-weight: 500;
`;

const TestimonialsSection = styled.section`
  padding: 6rem 5%;
  background: ${({ theme }) => theme.backgroundAlt};
  position: relative;

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

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
`;

const TestimonialCard = styled.div`
  padding: 2rem;
  background: ${({ theme }) => theme.card};
  border-radius: 8px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  height: 100%;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const TestimonialQuote = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;
  font-size: 4rem;
  font-family: var(--font-secondary);
  color: ${({ theme }) => theme.accent}30;
  line-height: 1;
`;

const TestimonialText = styled.p`
  color: ${({ theme }) => theme.textAlt};
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  border-top: 1px solid ${({ theme }) => theme.border};
  padding-top: 1.5rem;
`;

const TestimonialName = styled.h4`
  color: ${({ theme }) => theme.text};
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
`;

const TestimonialPosition = styled.p`
  color: ${({ theme }) => theme.accent};
  font-size: 0.9rem;
  margin: 0;
`;

export default About;
