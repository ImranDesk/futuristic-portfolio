import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Find the project with the matching id
    const projectId = parseInt(id, 10);
    const foundProject = portfolioData.projects.find((p) => p.id === projectId);

    if (foundProject) {
      setProject(foundProject);

      // Find related projects that share at least one technology
      const related = portfolioData.projects
        .filter((p) => p.id !== projectId)
        .filter((p) =>
          p.technologies.some((tech) =>
            foundProject.technologies.includes(tech)
          )
        )
        .slice(0, 3); // Limit to 3 related projects

      setRelatedProjects(related);
    } else {
      // If project not found, redirect to projects page
      navigate("/projects");
    }

    setLoading(false);
  }, [id, navigate]);

  if (loading) {
    return (
      <LoadingContainer>
        <LoadingSpinner />
      </LoadingContainer>
    );
  }

  if (!project) {
    return null; // This will be handled by the navigate in useEffect
  }

  return (
    <ProjectContainer>
      <ProjectHero>
        <HeroOverlay />
        <HeroImage
          style={{
            backgroundImage: `url(/images/${project.image})`,
            backgroundImage: `url(https://via.placeholder.com/1600x900?text=${project.title})`,
          }}
        />
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BackButton onClick={() => navigate(-1)}>
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
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Back</span>
            </BackButton>
            <HeroTitle>{project.title}</HeroTitle>
            <HeroTechStack>
              {project.technologies.map((tech, index) => (
                <TechBadge key={index}>{tech}</TechBadge>
              ))}
            </HeroTechStack>
          </motion.div>
        </HeroContent>
      </ProjectHero>

      <ProjectDetailsSection>
        <ProjectDetailsGrid>
          <DetailsMain>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SectionSubtitle>Project Overview</SectionSubtitle>
              <DetailsParagraph>{project.description}</DetailsParagraph>

              <KeyFeatures>
                <SectionSubtitle>Key Features</SectionSubtitle>
                <FeaturesList>
                  <FeatureItem>
                    <FeatureIcon>
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
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </FeatureIcon>
                    <FeatureText>
                      Immersive user experience with futuristic interface
                    </FeatureText>
                  </FeatureItem>
                  <FeatureItem>
                    <FeatureIcon>
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
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </FeatureIcon>
                    <FeatureText>
                      Advanced data visualization with real-time updates
                    </FeatureText>
                  </FeatureItem>
                  
                  <FeatureItem>
                    <FeatureIcon>
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
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </FeatureIcon>
                    <FeatureText>
                      Responsive design for all device types and screen sizes
                    </FeatureText>
                  </FeatureItem>
                </FeaturesList>
              </KeyFeatures>

              <TechnicalDetails>
                <SectionSubtitle>Technical Approach</SectionSubtitle>
                <DetailsParagraph>
                  This project leverages cutting-edge technologies to create a
                  seamless and intuitive experience. The frontend is built with{" "}
                  {project.technologies.join(", ")}, ensuring optimal
                  performance and visual appeal.
                </DetailsParagraph>
                <DetailsParagraph>
                  Special attention was given to accessibility and performance
                  optimization, resulting in a highly responsive and inclusive
                  application that maintains its futuristic aesthetic without
                  compromising usability.
                </DetailsParagraph>
              </TechnicalDetails>
            </motion.div>
          </DetailsMain>

          <DetailsSidebar>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <SidebarCard className="neon-border">
                <SidebarTitle>Project Links</SidebarTitle>
                {project.github && (
                  <SidebarLink
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    GitHub Repository
                  </SidebarLink>
                )}
                {project.liveDemo && (
                  <SidebarLink
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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
                    Live Demo
                  </SidebarLink>
                )}
              </SidebarCard>

              <SidebarCard className="neon-border">
                <SidebarTitle>Technologies</SidebarTitle>
                <TechnologiesList>
                  {project.technologies.map((tech, index) => (
                    <TechnologyItem key={index}>
                      <TechIcon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                        </svg>
                      </TechIcon>
                      {tech}
                    </TechnologyItem>
                  ))}
                </TechnologiesList>
              </SidebarCard>

              <SidebarCard className="neon-border">
                <SidebarTitle>Project Timeline</SidebarTitle>
                <TimelineItem>
                  <TimelineDate>Planning & Design</TimelineDate>
                  <TimelineDescription>2 weeks</TimelineDescription>
                </TimelineItem>
                <TimelineItem>
                  <TimelineDate>Development</TimelineDate>
                  <TimelineDescription>6 weeks</TimelineDescription>
                </TimelineItem>
                <TimelineItem>
                  <TimelineDate>Testing & Refinement</TimelineDate>
                  <TimelineDescription>3 weeks</TimelineDescription>
                </TimelineItem>
                <TimelineItem>
                  <TimelineDate>Deployment</TimelineDate>
                  <TimelineDescription>1 week</TimelineDescription>
                </TimelineItem>
              </SidebarCard>
            </motion.div>
          </DetailsSidebar>
        </ProjectDetailsGrid>
      </ProjectDetailsSection>

      <RelatedProjectsSection>
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Related Projects</SectionTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "150px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-line"
          />
        </SectionHeader>

        <RelatedProjectsGrid>
          {relatedProjects.length > 0 ? (
            relatedProjects.map((relatedProject, index) => (
              <motion.div
                key={relatedProject.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <RelatedProjectCard
                  className="neon-border"
                  as={Link}
                  to={`/project/${relatedProject.id}`}
                >
                  <RelatedProjectImage
                    src={`/images/${relatedProject.image}`}
                    alt={relatedProject.title}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/600x400?text=${relatedProject.title}`;
                    }}
                  />
                  <RelatedProjectOverlay>
                    <RelatedProjectTitle>
                      {relatedProject.title}
                    </RelatedProjectTitle>
                    <RelatedProjectArrow>
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
                    </RelatedProjectArrow>
                  </RelatedProjectOverlay>
                </RelatedProjectCard>
              </motion.div>
            ))
          ) : (
            <NoRelatedMessage>
              <p>No related projects found.</p>
            </NoRelatedMessage>
          )}
        </RelatedProjectsGrid>

        <MoreProjectsButton as={Link} to="/projects">
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
        </MoreProjectsButton>
      </RelatedProjectsSection>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  width: 100%;
  padding-top: 80px;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
`;

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid ${({ theme }) => theme.backgroundAlt};
  border-top: 3px solid ${({ theme }) => theme.accent};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ProjectHero = styled.div`
  height: 60vh;
  min-height: 400px;
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
`;

const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.background},
    transparent
  );
  z-index: 2;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  padding: 3rem 5%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const BackButton = styled.button`
  background: ${({ theme }) => theme.glass};
  border: none;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => `${theme.accent}30`};
    transform: translateX(-5px);
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroTechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const TechBadge = styled.span`
  background: ${({ theme }) => theme.glass};
  color: ${({ theme }) => theme.accent};
  font-size: 0.85rem;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  backdrop-filter: blur(4px);
  border: 1px solid ${({ theme }) => theme.border};
`;

const ProjectDetailsSection = styled.section`
  padding: 5rem 5%;
`;

const ProjectDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const DetailsMain = styled.div``;

const SectionSubtitle = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const DetailsParagraph = styled.p`
  color: ${({ theme }) => theme.textAlt};
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const KeyFeatures = styled.div`
  margin-bottom: 3rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
`;

const FeatureItem = styled.li`
  display: flex;
  margin-bottom: 1rem;
`;

const FeatureIcon = styled.div`
  color: ${({ theme }) => theme.accent};
  margin-right: 1rem;
  display: flex;
  align-items: center;
`;

const FeatureText = styled.span`
  color: ${({ theme }) => theme.textAlt};
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TechnicalDetails = styled.div``;

const DetailsSidebar = styled.div``;

const SidebarCard = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const SidebarTitle = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.textAlt};
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.glass};
    color: ${({ theme }) => theme.accent};
    transform: translateX(5px);
  }

  &:after {
    display: none;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const TechnologiesList = styled.ul`
  list-style: none;
`;

const TechnologyItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.textAlt};

  &:last-child {
    margin-bottom: 0;
  }
`;

const TechIcon = styled.div`
  color: ${({ theme }) => theme.accent};
  display: flex;
  align-items: center;
`;

const TimelineItem = styled.div`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineDate = styled.h4`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.25rem;
`;

const TimelineDescription = styled.p`
  color: ${({ theme }) => theme.textAlt};
  font-size: 0.9rem;
  margin: 0;
`;

const RelatedProjectsSection = styled.section`
  padding: 5rem 5%;
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

const RelatedProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
`;

const RelatedProjectCard = styled.div`
  position: relative;
  height: 250px;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const RelatedProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${RelatedProjectCard}:hover & {
    transform: scale(1.1);
  }
`;

const RelatedProjectOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.background}CC,
    transparent
  );
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;

  ${RelatedProjectCard}:hover & {
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.background},
      ${({ theme }) => theme.background}00
    );
    padding-bottom: 3rem;
  }
`;

const RelatedProjectTitle = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  margin: 0;
`;

const RelatedProjectArrow = styled.div`
  color: ${({ theme }) => theme.accent};
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.3s ease;

  ${RelatedProjectCard}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`;

const NoRelatedMessage = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 2rem;
  background: ${({ theme }) => theme.card};
  border-radius: 8px;
  color: ${({ theme }) => theme.textAlt};
`;

const MoreProjectsButton = styled.button`
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
  max-width: 250px;
  margin: 0 auto;

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

export default Project;
