import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  TextInput,
  Title,
  ActionIcon,
  Paper,
} from "@mantine/core";

import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";

import { motion } from "framer-motion";
import logo from "../../assets/Logomark_Digital.png";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "What We Do", path: "/what-we-do" },
  { label: "Contact", path: "/contact" },
];

const projectsLinks = [
  {
    label: "MSC",
    path: "/msc",
  },

  {
    label: "AVARNA Foundation",
    path: "/avarna",
  },

  {
    label: "IISJ",
    path: "/iisj",
  },

  {
    label: "Fellowship Program",
    path: "/Fellowship-Equality",
  },

  {
    label: "Support MSC",
    path: "/Support-MSC",
  },
];

function Footer() {
  return (
    <Box
      style={{
        background: "linear-gradient(180deg, #071120 0%, #0f172a 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
        marginTop: "80px",
      }}
    >
      {/* BACKGROUND GLOW */}

      <Box
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "rgba(255,123,0,0.08)",
          filter: "blur(120px)",
          borderRadius: "100%",
          top: "-180px",
          right: "-150px",
        }}
      />

      <Container size="xl" py={{ base: 60, md: 90 }}>
        <Grid gutter={50}>
          {/* LEFT BRAND SECTION */}

          <Grid.Col span={{ base: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Stack gap="lg">
                {/* LOGO */}

                <Group gap="md">
                  <Image src={logo} w={55} h={55} fit="contain" />
                </Group>

                <Text c="rgba(255,255,255,0.72)" size="sm" lh={1.9}>
                  Building equality, dignity, and leadership through education,
                  grassroots action, and community empowerment initiatives
                  across India.
                </Text>

                {/* SOCIAL ICONS */}

                <Group gap="sm">
                  <ActionIcon
                    size={42}
                    radius="xl"
                    variant="light"
                    color="orange"
                    component="a"
                    href="https://www.youtube.com/@mscindia2530"
                    style={{
                      transition: "0.3s",
                    }}
                  >
                    <FaYoutube size={18} />
                  </ActionIcon>
                  <ActionIcon
                    size={42}
                    radius="xl"
                    variant="light"
                    color="orange"
                    component="a"
                    href="https://www.linkedin.com/company/movement-for-scavenger-community-msc/posts/?feedView=all"
                    style={{
                      transition: "0.3s",
                    }}
                  >
                    <FaLinkedinIn size={16} />
                  </ActionIcon>
                </Group>
              </Stack>
            </motion.div>
          </Grid.Col>

          {/* QUICK LINKS */}

          <Grid.Col span={{ base: 6, md: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Title order={4} mb="lg" c="white">
                Quick Links
              </Title>

              <Stack gap="sm">
                {quickLinks.map((item, index) => (
                  <Text
                    key={index}
                    component={Link}
                    to={item.path}
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      transition: "0.3s",
                      width: "fit-content",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#ff7b00";
                      e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                      e.currentTarget.style.transform = "translateX(0px)";
                    }}
                  >
                    {item.label}
                  </Text>
                ))}
              </Stack>
            </motion.div>
          </Grid.Col>

          {/* PROJECTS */}

          <Grid.Col span={{ base: 6, md: 3 }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Title order={4} mb="lg" c="white">
                Our Projects
              </Title>

              <Stack gap="sm">
                {projectsLinks.map((item, index) => (
                  <Text
                    key={index}
                    component={Link}
                    to={item.path}
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      transition: "0.3s",
                      width: "fit-content",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#ff7b00";
                      e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                      e.currentTarget.style.transform = "translateX(0px)";
                    }}
                  >
                    {item.label}
                  </Text>
                ))}
              </Stack>
            </motion.div>
          </Grid.Col>

          {/* CONTACT + NEWSLETTER */}

          <Grid.Col span={{ base: 12, md: 3 }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <Stack gap="lg">
                <Title order={4} c="white">
                  Contact Us
                </Title>

                <Paper
                  radius="24px"
                  p="lg"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Stack gap="md">
                    <Group gap="sm" align="flex-start">
                      <FaMapMarkerAlt color="#ff7b00" />

                      <Text size="sm" c="rgba(255,255,255,0.72)">
                        Haryana, India
                      </Text>
                    </Group>{" "}
                    <Group gap="sm">
                      <FaEnvelope color="#ff7b00" />

                      <Text size="sm" c="rgba(255,255,255,0.72)">
                        iisj.contact@gmail.com
                      </Text>
                    </Group>
                  </Stack>
                </Paper>

                {/* NEWSLETTER */}

                <Box>
                  <Text fw={600} mb="sm">
                    Newsletter
                  </Text>

                  <Text size="sm" c="rgba(255,255,255,0.7)" mb="md">
                    Get updates about fellowships, community stories, and social
                    justice initiatives.
                  </Text>

                  <Box
                    style={{
                      position: "relative",
                    }}
                  >
                    <TextInput
                      placeholder="Enter your email"
                      radius="xl"
                      size="md"
                      styles={{
                        input: {
                          background: "rgba(255,255,255,0.06)",

                          border: "1px solid rgba(255,255,255,0.1)",

                          color: "white",

                          paddingRight: "120px",
                        },
                      }}
                    />

                    <Button
                      radius="xl"
                      size="sm"
                      rightSection={<FaArrowRight size={12} />}
                      style={{
                        position: "absolute",
                        top: 4,
                        right: 4,

                        background:
                          "linear-gradient(135deg, #ff7b00 0%, #ff9d3d 100%)",
                      }}
                    >
                      Subscribe
                    </Button>
                  </Box>
                </Box>
              </Stack>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>

      {/* BOTTOM BAR */}

      <Divider color="rgba(255,255,255,0.08)" />

      <Container size="xl" py="lg">
        <Group justify="space-between" wrap="wrap">
          <Text size="sm" c="rgba(255,255,255,0.6)">
            © {new Date().getFullYear()} IISJ Collective. All Rights Reserved.
          </Text>

          <Text size="sm" c="rgba(255,255,255,0.6)">
            Built with ❤️ for social justice & equality
          </Text>
        </Group>
      </Container>
    </Box>
  );
}

export default Footer;
