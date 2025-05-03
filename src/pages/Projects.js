import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";

const Projects = () => {
  const [filters, setFilters] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Extract unique technologies from all projects
  const allTechnologies = [
    ...new Set(
      portfolioData.projects.flatMap((project) => project.technologies)
    ),
  ];

  useEffect(() => {
    // Reset to top of page when component mounts
    window.scrollTo(0, 0);

    // Initialize with all projects
    setFilteredProjects(portfolioData.projects);
  }, []);

  useEffect(() => {
    // If no filters are selected, show all projects
    if (filters.length === 0) {
      setFilteredProjects(portfolioData.projects);
      return;
    }

    // Filter projects based on selected technologies
    const filtered = portfolioData.projects.filter((project) => {
      return filters.some((filter) => project.technologies.includes(filter));
    });

    setFilteredProjects(filtered);
  }, [filters]);

  const toggleFilter = (tech) => {
    if (filters.includes(tech)) {
      setFilters(filters.filter((filter) => filter !== tech));
    } else {
      setFilters([...filters, tech]);
    }
  };

  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <ProjectsContainer>
      <PageHeader>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PageTitle>My Projects</PageTitle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "150px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="page-line"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <PageSubtitle>
            Showcasing my most innovative digital creations
          </PageSubtitle>
        </motion.div>
      </PageHeader>

      <FilterSection>
        <FilterContainer>
          <FilterTitle>Filter by Technology:</FilterTitle>
          <FilterButtons>
            {allTechnologies.map((tech, index) => (
              <FilterButton
                key={index}
                active={filters.includes(tech)}
                onClick={() => toggleFilter(tech)}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </FilterButton>
            ))}
          </FilterButtons>
          {filters.length > 0 && (
            <ClearFilterButton
              onClick={clearFilters}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Clear Filters
            </ClearFilterButton>
          )}
        </FilterContainer>
      </FilterSection>

      <ProjectsGrid>
        <AnimatePresence>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                layout
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
                        <ViewDetailsLink
                          as={Link}
                          to={`/project/${project.id}`}
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
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            <line x1="11" y1="8" x2="11" y2="14" />
                            <line x1="8" y1="11" x2="14" y2="11" />
                          </svg>
                        </ViewDetailsLink>
                      </ProjectLinks>
                    </ProjectOverlay>
                  </ProjectImageWrapper>

                  <ProjectContent>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>
                      {project.description}
                    </ProjectDescription>
                    <ProjectTech>
                      {project.technologies.map((tech, techIndex) => (
                        <TechBadge
                          key={techIndex}
                          active={filters.includes(tech)}
                          onClick={() => toggleFilter(tech)}
                        >
                          {tech}
                        </TechBadge>
                      ))}
                    </ProjectTech>
                    <ViewProjectButton as={Link} to={`/project/${project.id}`}>
                      <ButtonText>View Details</ButtonText>
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
                    </ViewProjectButton>
                  </ProjectContent>
                </ProjectCard>
              </motion.div>
            ))
          ) : (
            <NoProjectsMessage>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <NoProjectsIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </NoProjectsIcon>
                <NoProjectsTitle>
                  No projects match the selected filters
                </NoProjectsTitle>
                <NoProjectsText>
                  Try selecting different technologies or clear the filters
                </NoProjectsText>
                <ClearFilterButton
                  onClick={clearFilters}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Clear All Filters
                </ClearFilterButton>
              </motion.div>
            </NoProjectsMessage>
          )}
        </AnimatePresence>
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
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
    margin-bottom: 1.5rem;
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

const PageSubtitle = styled.p`
  color: ${({ theme }) => theme.textAlt};
  font-size: 1.2rem;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FilterSection = styled.section`
  padding: 0 5% 2rem;
`;

const FilterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: ${({ theme }) => theme.card};
  border-radius: 8px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 2;
`;

const FilterTitle = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;

const FilterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const FilterButton = styled(motion.button)`
  background: ${({ active, theme }) => (active ? theme.accent : theme.glass)};
  color: ${({ active, theme }) => (active ? theme.background : theme.text)};
  border: 1px solid
    ${({ active, theme }) => (active ? "transparent" : theme.border)};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ active, theme }) => (active ? theme.accent : theme.glass)};
    transform: translateY(-2px);
    box-shadow: ${({ active, theme }) =>
      active ? `0 0 10px ${theme.accent}` : "none"};
  }
`;

const ClearFilterButton = styled(motion.button)`
  background: transparent;
  color: ${({ theme }) => theme.accent};
  border: 1px solid ${({ theme }) => theme.accent};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;

  &:hover {
    background: ${({ theme }) => `${theme.accent}10`};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  padding: 2rem 5%;
  max-width: 1400px;
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
  }
`;

const ProjectImageWrapper = styled.div`
  position: relative;
  height: 250px;
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

const ViewDetailsLink = styled(ProjectLink)`
  background: ${({ theme }) => theme.accentAlt};

  &:hover {
    box-shadow: 0 0 15px ${({ theme }) => theme.accentAlt};
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
  line-height: 1.6;
  flex: 1;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechBadge = styled.span`
  background: ${({ active, theme }) => (active ? theme.accent : theme.glass)};
  color: ${({ active, theme }) => (active ? theme.background : theme.accent)};
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  backdrop-filter: blur(4px);
  border: 1px solid
    ${({ active, theme }) => (active ? "transparent" : theme.border)};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ active, theme }) =>
      active ? theme.accent : `${theme.accent}30`};
    transform: translateY(-2px);
  }
`;

const ViewProjectButton = styled.button`
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
  width: 100%;

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

const NoProjectsMessage = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NoProjectsIcon = styled.div`
  color: ${({ theme }) => theme.accent};
  margin-bottom: 1.5rem;
`;

const NoProjectsTitle = styled.h3`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;

const NoProjectsText = styled.p`
  color: ${({ theme }) => theme.textAlt};
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

export default Projects;
