import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroGreeting>Hello, I am</HeroGreeting>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <HeroName
              className="glitch-effect"
              data-text={portfolioData.personalInfo.name}
            >
              {portfolioData.personalInfo.name}
            </HeroName>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <HeroTitle>{portfolioData.personalInfo.title}</HeroTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <HeroBio>{portfolioData.personalInfo.bio}</HeroBio>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <HeroButtons>
              <PrimaryButton as={Link} to="/projects">
                <ButtonText>View Projects</ButtonText>
                <ButtonIcon className="icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonIcon>
              </PrimaryButton>

              <SecondaryButton as={Link} to="/contact">
                <ButtonText>Contact Me</ButtonText>
              </SecondaryButton>
            </HeroButtons>
          </motion.div>
        </HeroContent>

        <HeroVisual>
          <motion.div
            className="hero-sphere"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="sphere-outer" />
            <div className="sphere-inner" />
            <div className="sphere-core" />

            <div className="orbit orbit-1">
              <div className="satellite satellite-1" />
            </div>

            <div className="orbit orbit-2">
              <div className="satellite satellite-2" />
            </div>

            <div className="orbit orbit-3">
              <div className="satellite satellite-3" />
            </div>
          </motion.div>
        </HeroVisual>
      </HeroSection>

      <FeaturedSection>
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Featured Projects</SectionTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "150px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-line"
          />
        </SectionHeader>

        <ProjectsGrid>
          {portfolioData.projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ProjectCard className="neon-border">
                <ProjectImageWrapper>
                  <ProjectImage
                    src={`/images/${project.image}`}
                    alt={project.title}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/600x400?text=${project.title}`;
                    }}
                  />
                  <ProjectOverlay>
                    <ProjectLinks>
                      {project.github && (
                        <ProjectLink
                          href={project.github}
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
                        </ProjectLink>
                      )}
                      {project.liveDemo && (
                        <ProjectLink
                          href={project.liveDemo}
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
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </ProjectLink>
                      )}
                    </ProjectLinks>
                  </ProjectOverlay>
                </ProjectImageWrapper>

                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectTech>
                    {project.technologies.map((tech, techIndex) => (
                      <TechBadge key={techIndex}>{tech}</TechBadge>
                    ))}
                  </ProjectTech>
                </ProjectContent>
              </ProjectCard>
            </motion.div>
          ))}
        </ProjectsGrid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: "3rem" }}
        >
          <PrimaryButton as={Link} to="/projects">
            <ButtonText>View All Projects</ButtonText>
            <ButtonIcon className="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonIcon>
          </PrimaryButton>
        </motion.div>
      </FeaturedSection>

      <SkillsSection>
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle>My Skills</SectionTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "150px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-line"
          />
        </SectionHeader>

        <SkillsGrid>
          {portfolioData.skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <SkillCategory className="neon-border">
                <SkillCategoryTitle>
                  {skillCategory.category}
                </SkillCategoryTitle>
                <SkillList>
                  {skillCategory.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * techIndex }}
                      viewport={{ once: true }}
                    >
                      <SkillItem>
                        <SkillIcon>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 16V12"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 8H12.01"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </SkillIcon>
                        <SkillName>{tech}</SkillName>
                      </SkillItem>
                    </motion.div>
                  ))}
                </SkillList>
              </SkillCategory>
            </motion.div>
          ))}
        </SkillsGrid>
      </SkillsSection>

      <CTASection>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <CTACard>
            <CTAContent>
              <CTATitle>Ready to build something amazing?</CTATitle>
              <CTAText>
                Let's collaborate and bring your vision to life with
                cutting-edge technology and design.
              </CTAText>
              <PrimaryButton as={Link} to="/contact">
                <ButtonText>Get in Touch</ButtonText>
                <ButtonIcon className="icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonIcon>
              </PrimaryButton>
            </CTAContent>
          </CTACard>
        </motion.div>
      </CTASection>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  position: relative;

  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    padding-top: 80px;
    padding-bottom: 80px;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
  z-index: 2;

  @media (max-width: 992px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4rem;
  }
`;

const HeroGreeting = styled.h3`
  color: ${({ theme }) => theme.accent};
  margin-bottom: 1rem;
  font-weight: 400;
`;

const HeroName = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 1rem;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroTitle = styled.h2`
  color: ${({ theme }) => theme.textAlt};
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const HeroBio = styled.p`
  color: ${({ theme }) => theme.textAlt};
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  max-width: 540px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`;

const PrimaryButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.accent};
  border: 2px solid ${({ theme }) => theme.accent};
  padding: 0.8rem 2rem;
  font-size: 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 1;
  font-family: var(--font-secondary);
  min-width: 180px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: ${({ theme }) => theme.accent};
    transition: all 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: ${({ theme }) => theme.background};
    box-shadow: 0 0 10px ${({ theme }) => theme.accent};

    &:before {
      width: 100%;
    }

    .icon {
      transform: translateX(3px);
    }
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.border};

  &:before {
    background: ${({ theme }) => theme.border};
  }

  &:hover {
    color: ${({ theme }) => theme.accent};
    box-shadow: 0 0 10px ${({ theme }) => theme.border};
  }
`;

const ButtonText = styled.span`
  z-index: 2;
  position: relative;
`;

const ButtonIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
`;

const HeroVisual = styled.div`
  position: relative;
  width: 400px;
  height: 400px;

  .hero-sphere {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sphere-outer {
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 1px solid rgba(0, 255, 255, 0.3);
    box-shadow: 0 0 50px rgba(0, 255, 255, 0.15);
  }

  .sphere-inner {
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 1px solid rgba(255, 0, 255, 0.3);
    box-shadow: 0 0 30px rgba(255, 0, 255, 0.15);
  }

  .sphere-core {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: ${({ theme }) => theme.gradient};
    box-shadow: 0 0 30px rgba(0, 128, 255, 0.5);
  }

  .orbit {
    position: absolute;
    border-radius: 50%;
    border: 1px dashed rgba(255, 255, 255, 0.2);

    &.orbit-1 {
      width: 350px;
      height: 350px;
      animation: rotate 15s linear infinite;
    }

    &.orbit-2 {
      width: 250px;
      height: 250px;
      animation: rotate 10s linear infinite reverse;
    }

    &.orbit-3 {
      width: 150px;
      height: 150px;
      animation: rotate 5s linear infinite;
    }
  }

  .satellite {
    position: absolute;
    background: ${({ theme }) => theme.accent};
    border-radius: 50%;
    box-shadow: 0 0 10px ${({ theme }) => theme.accent};

    &.satellite-1 {
      width: 15px;
      height: 15px;
      top: 0;
      transform: translateY(-7.5px);
    }

    &.satellite-2 {
      width: 10px;
      height: 10px;
      top: 0;
      transform: translateY(-5px);
      background: ${({ theme }) => theme.accentAlt};
      box-shadow: 0 0 10px ${({ theme }) => theme.accentAlt};
    }

    &.satellite-3 {
      width: 8px;
      height: 8px;
      top: 0;
      transform: translateY(-4px);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 992px) {
    width: 300px;
    height: 300px;

    .sphere-outer {
      width: 200px;
      height: 200px;
    }

    .sphere-inner {
      width: 140px;
      height: 140px;
    }

    .sphere-core {
      width: 70px;
      height: 70px;
    }

    .orbit-1 {
      width: 250px;
      height: 250px;
    }

    .orbit-2 {
      width: 180px;
      height: 180px;
    }

    .orbit-3 {
      width: 110px;
      height: 110px;
    }
  }
`;

const FeaturedSection = styled.section`
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

const ProjectsGrid = styled.div`
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

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadow};

    .project-overlay {
      opacity: 1;
    }
  }
`;

const ProjectImageWrapper = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(3px);

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.background};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 15px ${({ theme }) => theme.accent};
  }

  &:after {
    display: none;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.text};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.textAlt};
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  flex: 1;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
`;

const TechBadge = styled.span`
  background: ${({ theme }) => theme.glass};
  color: ${({ theme }) => theme.accent};
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  backdrop-filter: blur(4px);
  border: 1px solid ${({ theme }) => theme.border};
`;

const SkillsSection = styled.section`
  padding: 6rem 5%;
  position: relative;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 2rem;
  border-radius: 8px;
  height: 100%;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const SkillCategoryTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.accent};
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const SkillList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SkillIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.accent};
`;

const SkillName = styled.span`
  color: ${({ theme }) => theme.textAlt};
  font-size: 1rem;

  ${SkillItem}:hover & {
    color: ${({ theme }) => theme.text};
  }
`;

const CTASection = styled.section`
  padding: 3rem 5% 6rem;
`;

const CTACard = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 10px;
  padding: 3rem;
  background: ${({ theme }) => theme.gradient};
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.backgroundAlt};
    opacity: 0.9;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTAText = styled.p`
  max-width: 600px;
  margin: 0 auto 2rem;
  color: ${({ theme }) => theme.textAlt};
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default Home;
