import React from "react";

import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Overlay,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { FaArrowRight, FaUsers } from "react-icons/fa";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { teamMembers } from "../constants/comon";

import heroImg from "../assets/home/infoImg3.jpeg";

function TeamPage() {
  return (
    <Box
      style={{
        background: "#f8fafc",
        overflow: "hidden",
      }}
    >
      {/* HERO SECTION */}

      <Box
        style={{
          position: "relative",
          height: "85vh",
          minHeight: "650px",
          overflow: "hidden",
        }}
      >
        {/* BG IMAGE */}

        <Image src={heroImg} h="100%" fit="cover" />

        {/* OVERLAY */}

        <Overlay color="#000" opacity={0.62} zIndex={1} />

        {/* ORANGE GLOW */}

        <Box
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "100%",
            background: "rgba(255,123,0,0.18)",
            filter: "blur(120px)",
            top: "-100px",
            right: "-120px",
            zIndex: 2,
          }}
        />

        {/* CONTENT */}

        <Container
          size="xl"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 5,
            display: "flex",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Paper
              radius="32px"
              p="xl"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.1)",
                maxWidth: "760px",
              }}
            >
              <Group mb="md">
                <ThemeIcon size={55} radius="xl" variant="light" color="orange">
                  <FaUsers size={22} />
                </ThemeIcon>

                <Text
                  c="#ff9d3d"
                  fw={700}
                  tt="uppercase"
                  size="sm"
                  style={{
                    letterSpacing: "1px",
                  }}
                >
                  Our Leadership Team
                </Text>
              </Group>

              <Title
                c="white"
                style={{
                  fontSize: "clamp(38px,6vw,78px)",
                  lineHeight: 1.05,
                }}
              >
                People Building
                <br />
                Equality & Change
              </Title>

              <Text
                c="rgba(255,255,255,0.78)"
                mt={25}
                maw={620}
                style={{
                  lineHeight: 1.9,
                  fontSize: "clamp(15px,2vw,19px)",
                }}
              >
                Meet the passionate individuals behind IISJ, MSC, and AVARNA
                working to create leadership, education, dignity, and social
                justice opportunities for marginalized communities.
              </Text>

              <Group mt={35}>
                <Button
                  size="lg"
                  radius="xl"
                  component={Link}
                  to="/contact"
                  rightSection={<FaArrowRight size={14} />}
                  style={{
                    background:
                      "linear-gradient(135deg, #ff7b00 0%, #ff9d3d 100%)",

                    boxShadow: "0 15px 35px rgba(255,123,0,0.35)",
                  }}
                >
                  Join Our Mission
                </Button>

                <Button
                  size="lg"
                  radius="xl"
                  variant="white"
                  color="dark"
                  component={Link}
                  to="/Support-MSC"
                >
                  Support Our Work
                </Button>
              </Group>
            </Paper>
          </motion.div>
        </Container>
      </Box>

      {/* TEAM SECTION */}

      <Container size="xl" py={120}>
        {/* HEADING */}

        <Box ta="center" mb={80}>
          <Text
            c="orange"
            fw={700}
            tt="uppercase"
            size="sm"
            mb={12}
            style={{
              letterSpacing: "1px",
            }}
          >
            Meet Our Team
          </Text>

          <Title
            style={{
              fontSize: "clamp(34px,5vw,64px)",
              lineHeight: 1.1,
            }}
          >
            People Behind
            <br />
            The Movement
          </Title>

          <Text
            c="dimmed"
            mt={20}
            maw={760}
            mx="auto"
            style={{
              lineHeight: 1.9,
            }}
          >
            Passionate leaders, educators, and community organizers working
            together to create dignity, leadership, equality, and opportunity.
          </Text>
        </Box>

        {/* VERTICAL TEAM LIST */}

        <Stack gap={40}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <Card
                radius="36px"
                p={0}
                style={{
                  overflow: "hidden",
                  background: "white",
                  border: "1px solid #f1f1f1",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.06)",
                }}
              >
                <Grid gutter={0}>
                  {/* IMAGE SIDE */}

                  <Grid.Col span={{ base: 12, md: 4 }}>
                    <Box
                      style={{
                        position: "relative",
                        height: "100%",
                        minHeight: "420px",
                      }}
                    >
                      <Image src={member.image} h="100%" fit="cover" />

                      {/* OVERLAY */}

                      <Box
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.05))",
                        }}
                      />
                    </Box>
                  </Grid.Col>

                  {/* CONTENT SIDE */}

                  <Grid.Col span={{ base: 12, md: 8 }}>
                    <Box
                      p={{
                        base: 30,
                        md: 55,
                      }}
                      style={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Stack gap="lg">
                        {/* ROLE */}

                        <Group>
                          <Box
                            style={{
                              width: "55px",
                              height: "2px",
                              background:
                                "linear-gradient(135deg, #ff7b00 0%, #ff9d3d 100%)",
                            }}
                          />

                          <Text
                            fw={700}
                            tt="uppercase"
                            size="sm"
                            style={{
                              color: "#ff7b00",
                              letterSpacing: "1px",
                            }}
                          >
                            {member.role}
                          </Text>
                        </Group>

                        {/* NAME */}

                        <Title
                          style={{
                            fontSize: "clamp(30px,4vw,54px)",
                            lineHeight: 1.1,
                          }}
                        >
                          {member.name}
                        </Title>

                        {/* DESC */}

                        <Text
                          c="dimmed"
                          size="lg"
                          style={{
                            lineHeight: 1.9,
                            maxWidth: "750px",
                          }}
                        >
                          {member.desc}
                        </Text>

                        {/* BUTTONS */}

                        <Group mt="md">
                          <Button
                            radius="xl"
                            size="md"
                            rightSection={<FaArrowRight size={14} />}
                            style={{
                              background:
                                "linear-gradient(135deg, #ff7b00 0%, #ff9d3d 100%)",

                              boxShadow: "0 10px 30px rgba(255,123,0,0.25)",
                            }}
                          >
                            View Profile
                          </Button>

                          <Button
                            variant="light"
                            color="orange"
                            radius="xl"
                            size="md"
                          >
                            Connect
                          </Button>
                        </Group>
                      </Stack>
                    </Box>
                  </Grid.Col>
                </Grid>
              </Card>
            </motion.div>
          ))}
        </Stack>
      </Container>
      {/* CTA SECTION */}

      <Container size="xl" pb={120}>
        <Card
          radius="40px"
          p="clamp(30px,5vw,70px)"
          style={{
            background: "linear-gradient(135deg, #071120 0%, #0f172a 100%)",

            position: "relative",

            overflow: "hidden",
          }}
        >
          {/* GLOW */}

          <Box
            style={{
              position: "absolute",
              width: "400px",
              height: "400px",
              background: "rgba(255,123,0,0.18)",
              filter: "blur(120px)",
              borderRadius: "100%",
              top: "-150px",
              right: "-100px",
            }}
          />

          <Grid align="center">
            {/* LEFT */}

            <Grid.Col span={{ base: 12, md: 8 }}>
              <Text c="#ff9d3d" fw={700} tt="uppercase" mb={15} size="sm">
                Join The Movement
              </Text>

              <Title
                c="white"
                style={{
                  fontSize: "clamp(32px,5vw,60px)",
                  lineHeight: 1.1,
                }}
              >
                Together We Can
                <br />
                Build A More Equal Future
              </Title>

              <Text
                c="rgba(255,255,255,0.75)"
                mt={20}
                maw={700}
                style={{
                  lineHeight: 1.9,
                }}
              >
                Support our mission by volunteering, donating, partnering, or
                becoming part of our leadership and fellowship initiatives.
              </Text>
            </Grid.Col>

            {/* RIGHT */}

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack align="flex-end">
                <Button
                  size="xl"
                  radius="xl"
                  component={Link}
                  to="/Support-MSC"
                  rightSection={<FaArrowRight size={15} />}
                  style={{
                    background:
                      "linear-gradient(135deg, #ff7b00 0%, #ff9d3d 100%)",

                    boxShadow: "0 15px 40px rgba(255,123,0,0.35)",
                  }}
                >
                  Support Our Work
                </Button>

                <Button
                  size="xl"
                  radius="xl"
                  variant="white"
                  color="dark"
                  component={Link}
                  to="/contact"
                >
                  Contact Our Team
                </Button>
              </Stack>
            </Grid.Col>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
}

export default TeamPage;
