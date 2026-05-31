import React from "react";
import {
  Container,
  Grid,
  Title,
  Text,
  Button,
  Stack,
  Card,
  Image,
  Group,
  ThemeIcon,
  SimpleGrid,
  Badge,
  Box,
  Overlay,
} from "@mantine/core";

import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaUsers,
  FaGraduationCap,
  FaHandsHelping,
  FaGlobeAsia,
  FaCheckCircle,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import heroImage from "../assets/pages/CA1.webp";
import fellowshipImage from "../assets/pages/partner.webp";
import resourceImage from "../assets/pages/volunteer.webp";

export default function OurProjectsPage() {
  /*  PROJECT DATA*/

  const focusAreas = [
    {
      id: 1,
      title: "Dr. B. R. Ambedkar Resource Centers",
      description:
        "Community-driven development platforms supporting education, leadership, legal awareness, social empowerment, and grassroots transformation.",
      icon: <FaGlobeAsia size={20} />,
      image: resourceImage,
      slug: "/Community-Resource-Centers",
      badge: "Community Development",
    },

    {
      id: 2,
      title: "Fellows For Equality",
      description:
        "Identifying and training the next generation of leaders from scavenger communities for sustainable social transformation.",
      icon: <FaGraduationCap size={20} />,
      image: fellowshipImage,
      slug: "/Fellowship-Equality",
      badge: "Leadership Program",
    },
  ];

  const communityWorks = [
    {
      id: 1,
      title: "Leadership Development",
      description:
        "Building strong community leaders through mentorship, education, and field engagement.",
    },

    {
      id: 2,
      title: "Education Support",
      description:
        "Supporting students and young people through learning initiatives and educational access.",
    },

    {
      id: 3,
      title: "Women Empowerment",
      description:
        "Creating safe and inclusive opportunities for women to lead social and economic transformation.",
    },

    {
      id: 4,
      title: "Community Organising",
      description:
        "Strengthening grassroots participation and collective action for social justice.",
    },
  ];

  const fellowshipHighlights = [
    "Leadership training & mentorship",
    "Grassroots field experience",
    "Community engagement projects",
    "Social justice & equality education",
    "Youth empowerment initiatives",
    "Building future changemakers",
  ];

  return (
    <div
      style={{
        background: "#f8fafc",
        overflow: "hidden",
      }}
    >
      {/*     REDESIGNED HERO SECTION*/}

      <Box
        style={{
          position: "relative",
          minHeight: "120vh",
          overflow: "hidden",
          background: "#071120",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* BACKGROUND IMAGE */}
        <Image
          src={heroImage}
          h="100vh"
          w="100%"
          fit="cover"
          style={{
            position: "absolute",
            inset: 0,
            transform: "scale(1.05)",
            filter: "brightness(0.4)",
          }}
        />

        {/* GRADIENT OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `
        radial-gradient(circle at top right, rgba(249,115,22,0.25), transparent 30%),
        linear-gradient(
          135deg,
          rgba(7,17,32,0.92) 0%,
          rgba(7,17,32,0.78) 45%,
          rgba(7,17,32,0.96) 100%
        )
      `,
            zIndex: 1,
          }}
        />

        {/* GLOW EFFECT */}
        <div
          style={{
            position: "absolute",
            top: "-180px",
            right: "-180px",
            width: "420px",
            height: "420px",
            borderRadius: "100%",
            background: "rgba(249,115,22,0.18)",
            filter: "blur(120px)",
            zIndex: 1,
          }}
        />

        <Container
          size="xl"
          style={{
            position: "relative",
            zIndex: 3,
            width: "100%",
          }}
        >
          <Grid align="center" gutter={60}>
            {/* LEFT CONTENT */}
            <Grid.Col span={{ base: 12, lg: 7 }}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                {/* HEADING */}
                <Title
                  order={1}
                  style={{
                    color: "white",
                    fontSize: "clamp(52px,8vw,100px)",
                    lineHeight: 0.95,
                    fontWeight: 900,
                    marginBottom: "28px",
                    maxWidth: "850px",
                  }}
                >
                  Building
                  <span
                    style={{
                      display: "block",
                      color: "#ff8a1d",
                    }}
                  >
                    Future Leaders
                  </span>
                  Through Equality
                </Title>

                {/* DESCRIPTION */}
                <Text
                  size="xl"
                  style={{
                    color: "rgba(255,255,255,0.78)",
                    lineHeight: 1.9,
                    maxWidth: "760px",
                    marginBottom: "38px",
                    fontSize: "18px",
                  }}
                >
                  Even though MSC supports a lot of different activities from
                  the scavenger community, we focus our daily work on two areas.
                  Our Dr. B. R. Ambedkar Resource Centers serve as platforms of
                  development for local communities while Fellows For Equality
                  trains the next generation of grassroots leaders.
                </Text>

                {/* STATS */}
                <Group mb={45} gap="xl">
                  {[
                    {
                      number: "20+",
                      label: "Community Programs",
                    },

                    {
                      number: "500+",
                      label: "Youth Empowered",
                    },

                    {
                      number: "50+",
                      label: "Future Leaders",
                    },
                  ].map((item, index) => (
                    <div key={index}>
                      <Title
                        order={2}
                        style={{
                          color: "#ff8a1d",
                          fontSize: "36px",
                          marginBottom: "4px",
                        }}
                      >
                        {item.number}
                      </Title>

                      <Text
                        size="sm"
                        style={{
                          color: "rgba(255,255,255,0.7)",
                        }}
                      >
                        {item.label}
                      </Text>
                    </div>
                  ))}
                </Group>

                {/* BUTTONS */}
                <Group>
                  <Button
                    component={Link}
                    to="/Fellowship-Program-app"
                    size="xl"
                    radius="xl"
                    color="orange"
                    rightSection={<FaArrowRight size={15} />}
                    style={{
                      height: "58px",
                      paddingInline: "30px",
                      fontWeight: 700,
                      boxShadow: "0 18px 40px rgba(249,115,22,0.35)",
                    }}
                  >
                    Apply For Fellowship
                  </Button>

                  <Button
                    component={Link}
                    to="/Community-Resource-Centers"
                    size="xl"
                    radius="xl"
                    variant="outline"
                    color="white"
                    style={{
                      height: "58px",
                      paddingInline: "30px",
                      border: "1px solid rgba(255,255,255,0.25)",
                      backdropFilter: "blur(10px)",
                      background: "rgba(255,255,255,0.04)",
                    }}
                  >
                    Explore Resource Centers
                  </Button>
                </Group>
              </motion.div>
            </Grid.Col>

            {/* RIGHT FLOATING CARD */}
            <Grid.Col span={{ base: 12, lg: 5 }}>
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}
              >
                <Card
                  radius="32px"
                  p="xl"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(18px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "white",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  {/* SMALL TOP LABEL */}
                  <Badge radius="xl" color="orange" variant="filled" mb="lg">
                    Our Mission
                  </Badge>

                  <Title
                    order={2}
                    mb="md"
                    style={{
                      lineHeight: 1.2,
                    }}
                  >
                    Sustainable Community Development
                  </Title>

                  <Text
                    style={{
                      color: "rgba(255,255,255,0.78)",
                      lineHeight: 1.9,
                      marginBottom: "28px",
                    }}
                  >
                    We believe lasting transformation begins when communities
                    lead their own change through education, leadership,
                    equality, and collective action.
                  </Text>

                  <Stack gap="lg">
                    {[
                      "Grassroots Leadership Training",
                      "Education & Resource Access",
                      "Women & Youth Empowerment",
                      "Building Equal Communities",
                    ].map((item, index) => (
                      <Group key={index} align="flex-start">
                        <div
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "100%",
                            background: "#ff8a1d",
                            marginTop: "8px",
                            flexShrink: 0,
                          }}
                        />

                        <Text
                          style={{
                            color: "rgba(255,255,255,0.88)",
                          }}
                        >
                          {item}
                        </Text>
                      </Group>
                    ))}
                  </Stack>
                </Card>
              </motion.div>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/*FOCUS AREAS*/}

      <Container size="xl" py={100}>
        <Stack align="center" mb={60}>
          <Badge size="lg" radius="xl" color="orange">
            Focus Areas
          </Badge>

          <Title
            ta="center"
            style={{
              fontSize: "clamp(34px,5vw,58px)",
              lineHeight: 1.15,
            }}
          >
            Building Communities Through
            <br />
            Leadership & Equality
          </Title>

          <Text
            ta="center"
            maw={850}
            size="lg"
            c="dimmed"
            style={{
              lineHeight: 1.9,
            }}
          >
            Our initiatives are designed to create sustainable opportunities,
            empower local communities, and nurture future leaders who can drive
            long-term social transformation.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="40px">
          {focusAreas.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card
                radius="32px"
                p={0}
                shadow="xl"
                style={{
                  overflow: "hidden",
                  background: "white",
                  height: "100%",
                }}
              >
                <Box
                  style={{
                    position: "relative",
                  }}
                >
                  <Image src={project.image} h={320} fit="cover" />

                  <Overlay
                    gradient="linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.8) 100%)"
                    opacity={1}
                  />

                  <Badge
                    color="orange"
                    radius="xl"
                    size="lg"
                    style={{
                      position: "absolute",
                      top: 20,
                      left: 20,
                      zIndex: 2,
                    }}
                  >
                    {project.badge}
                  </Badge>
                </Box>

                <Stack p="xl" gap="lg">
                  <Group>
                    <ThemeIcon
                      size={52}
                      radius="xl"
                      color="orange"
                      variant="light"
                    >
                      {project.icon}
                    </ThemeIcon>

                    <Title order={2}>{project.title}</Title>
                  </Group>

                  <Text
                    c="dimmed"
                    size="md"
                    style={{
                      lineHeight: 1.9,
                    }}
                  >
                    {project.description}
                  </Text>

                  <Button
                    component={Link}
                    to={project.slug}
                    radius="xl"
                    size="md"
                    color="orange"
                    rightSection={<FaArrowRight size={14} />}
                    style={{
                      width: "fit-content",
                    }}
                  >
                    Learn More
                  </Button>
                </Stack>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>

      {/*  HOW COMMUNITY WORKS */}
      <div
        style={{
          background: "white",
          padding: "100px 0",
        }}
      >
        <Container size="xl">
          <Grid gutter={60} align="center">
            <Grid.Col span={{ base: 12, lg: 5 }}>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Badge size="lg" radius="xl" color="orange" mb="lg">
                  Community Impact
                </Badge>

                <Title
                  style={{
                    fontSize: "clamp(34px,5vw,54px)",
                    lineHeight: 1.15,
                    marginBottom: "24px",
                  }}
                >
                  Learn How Our Community Works
                </Title>

                <Text
                  size="lg"
                  c="dimmed"
                  style={{
                    lineHeight: 1.9,
                    marginBottom: "30px",
                  }}
                >
                  We work closely with local communities through leadership,
                  education, equality, grassroots organising, and sustainable
                  development initiatives that create long-term social impact.
                </Text>

                <Button
                  component={Link}
                  to="/about"
                  radius="xl"
                  size="lg"
                  color="orange"
                  rightSection={<FaArrowRight size={14} />}
                >
                  Discover Our Mission
                </Button>
              </motion.div>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 7 }}>
              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
                {communityWorks.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.12,
                    }}
                    viewport={{ once: true }}
                  >
                    <Card
                      radius="28px"
                      p="xl"
                      shadow="md"
                      style={{
                        background:
                          "linear-gradient(135deg,#ffffff 0%, #f8fafc 100%)",
                        border: "1px solid #e2e8f0",
                        height: "100%",
                      }}
                    >
                      <ThemeIcon
                        size={60}
                        radius="xl"
                        color="orange"
                        variant="light"
                        mb="lg"
                      >
                        <FaHandsHelping size={24} />
                      </ThemeIcon>

                      <Title order={3} mb="sm">
                        {item.title}
                      </Title>

                      <Text
                        c="dimmed"
                        style={{
                          lineHeight: 1.8,
                        }}
                      >
                        {item.description}
                      </Text>
                    </Card>
                  </motion.div>
                ))}
              </SimpleGrid>
            </Grid.Col>
          </Grid>
        </Container>
      </div>

      {/* FELLOWSHIP SECTION*/}

      <Container size="xl" py={100}>
        <Grid gutter={60} align="center">
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image src={fellowshipImage} radius="32px" h={620} fit="cover" />
            </motion.div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge size="lg" radius="xl" color="orange" mb="lg">
                Fellowship Program
              </Badge>

              <Title
                style={{
                  fontSize: "clamp(34px,5vw,56px)",
                  lineHeight: 1.15,
                  marginBottom: "24px",
                }}
              >
                Fellows For Equality
              </Title>

              <Text
                size="lg"
                c="dimmed"
                style={{
                  lineHeight: 1.9,
                  marginBottom: "30px",
                }}
              >
                The fellowship program empowers young leaders from marginalized
                communities to become agents of social change through
                mentorship, field work, education, and leadership development.
              </Text>

              <Stack gap="lg" mb={40}>
                {fellowshipHighlights.map((item, index) => (
                  <Group key={index} align="flex-start">
                    <ThemeIcon radius="xl" color="orange" variant="light">
                      <FaCheckCircle size={14} />
                    </ThemeIcon>

                    <Text
                      size="md"
                      style={{
                        lineHeight: 1.7,
                      }}
                    >
                      {item}
                    </Text>
                  </Group>
                ))}
              </Stack>

              <Group>
                <Button
                  component={Link}
                  to="/Fellowship-Program-app"
                  size="lg"
                  radius="xl"
                  color="orange"
                  rightSection={<FaArrowRight size={14} />}
                  style={{
                    boxShadow: "0 14px 35px rgba(249,115,22,0.25)",
                  }}
                >
                  Apply For Fellowship
                </Button>

                <Button
                  component={Link}
                  to="/Fellowship-Equality"
                  variant="light"
                  color="orange"
                  radius="xl"
                  size="lg"
                >
                  Learn More
                </Button>
              </Group>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>

      {/*FINAL CTA */}

      <Container size="xl" pb={100}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card
            radius="40px"
            p="70px"
            shadow="xl"
            style={{
              background: "linear-gradient(135deg,#ff7b00 0%, #ff9d3d 100%)",
              color: "white",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* <Overlay color="#000" opacity={0.12} /> */}

            <Stack
              align="center"
              gap="xl"
              style={{
                position: "relative",
                zIndex: 2,
              }}
            >
              <ThemeIcon size={90} radius="100%" variant="white" color="orange">
                <FaUsers size={38} />
              </ThemeIcon>

              <Title
                ta="center"
                style={{
                  fontSize: "clamp(32px,5vw,62px)",
                  lineHeight: 1.1,
                  maxWidth: "850px",
                }}
              >
                Become Part of the Movement
              </Title>

              <Text
                ta="center"
                size="xl"
                style={{
                  maxWidth: "850px",
                  lineHeight: 1.9,
                  color: "rgba(255,255,255,0.92)",
                }}
              >
                Support community-led transformation through education,
                equality, leadership development, and grassroots action.
              </Text>

              <Group>
                <Button
                  component={Link}
                  to="/support-msc"
                  size="xl"
                  radius="xl"
                  variant="white"
                  color="orange"
                  rightSection={<FaArrowRight size={14} />}
                >
                  Support Our Work
                </Button>

                <Button
                  component={Link}
                  to="/contact"
                  size="xl"
                  radius="xl"
                  variant="outline"
                  color="white"
                >
                  Contact Us
                </Button>
              </Group>
            </Stack>
          </Card>
        </motion.div>
      </Container>
    </div>
  );
}
