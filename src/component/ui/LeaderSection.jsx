import {
  Container,
  Grid,
  Image,
  Text,
  Title,
  Paper,
  Group,
  ThemeIcon,
  Stack,
  Card,
  Box,
  Badge,
  SimpleGrid,
  Overlay,
} from "@mantine/core";

import { motion } from "framer-motion";

import { FaQuoteRight, FaLinkedin, FaArrowRight } from "react-icons/fa";

// import leaderImg from "../../assets/home/Vimalpic2.jpg";
import { leaderSectionLeadersData } from "../../constants/comon";
import leaderImg from "../../assets/home/LeaderImg.jpg";

import { theme } from "../../theme";
function LeaderSection() {
  return (
    <Box
      py={100}
      style={{
        background:
          "linear-gradient(135deg, #f8fafc 0%, #ffffff 45%, #fff7ed 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 🔥 BACKGROUND BLUR */}
      <Box
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "100%",
          background: "rgba(249,115,22,0.12)",
          filter: "blur(120px)",
          top: -120,
          right: -100,
        }}
      />

      <Container size="xl" style={{ position: "relative", zIndex: 2 }}>
        {/* 🔥 SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          <Badge color="orange" variant="light" radius="xl" size="lg" mb={18}>
            Leadership Team
          </Badge>

          <Title
            order={2}
            fw={900}
            style={{
              fontSize: "clamp(34px, 5vw, 58px)",
              lineHeight: 1.1,
            }}
          >
            Visionaries Driving
            <span
              style={{
                color: theme.colors.orange[6],
              }}
            >
              {" "}
              Social Change
            </span>
          </Title>

          <Text c="dimmed" mt="lg" size="lg" maw={760} mx="auto" lh={1.9}>
            Our leadership team combines lived experience, grassroots activism,
            education, and community engagement to create sustainable social
            impact across underserved communities.
          </Text>
        </motion.div>

        {/* 🔥 FEATURED LEADER */}
        <Grid gutter={50} align="center" mb={90}>
          {/* LEFT IMAGE */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Box
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "34px",
                }}
              >
                <Image src={leaderImg} radius="34px" h={550} fit="cover" />

                <Overlay
                  gradient="linear-gradient(180deg, rgba(0,0,0,0) 20%, rgba(0,0,0,0.8) 100%)"
                  opacity={1}
                />

                {/* TEXT OVER IMAGE */}
                <Box
                  style={{
                    position: "absolute",
                    bottom: 30,
                    left: 30,
                    zIndex: 2,
                    color: "white",
                  }}
                >
                  <Badge color="orange" variant="filled" radius="xl" mb={12}>
                    Founder
                  </Badge>

                  <Title order={2} fw={900}>
                    Dr. Vimal Kumar
                  </Title>

                  <Text mt={4} c="rgba(255,255,255,0.85)">
                    CEO & Founder
                  </Text>
                </Box>
              </Box>
            </motion.div>
          </Grid.Col>

          {/* RIGHT CONTENT */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Paper
                radius="34px"
                p="45px"
                shadow="xl"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(18px)",
                  border: "1px solid rgba(255,255,255,0.6)",
                }}
              >
                <Stack gap="xl">
                  <ThemeIcon
                    size={70}
                    radius="100%"
                    variant="light"
                    color="orange"
                  >
                    <FaQuoteRight size={24} />
                  </ThemeIcon>

                  <Text
                    size="xl"
                    fw={500}
                    lh={2}
                    style={{
                      fontStyle: "italic",
                    }}
                  >
                    “Leadership is not about power — it is about creating
                    dignity, opportunity, and justice for communities that have
                    been unheard for generations.”
                  </Text>

                  <Text c="dimmed" lh={2} size="lg">
                    Dr. Vimal Kumar has dedicated his life to advocating for
                    marginalized communities and building movements that
                    challenge systemic inequality. Through grassroots
                    leadership, education, and policy advocacy, he continues to
                    inspire thousands of young changemakers across world.
                  </Text>

                  <Group
                    component="a"
                    href="https://www.linkedin.com/in/dr-vimal-kumar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    mt="md"
                    gap="md"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    <ThemeIcon
                      size={48}
                      radius="xl"
                      color="blue"
                      variant="light"
                    >
                      <FaLinkedin size={18} />
                    </ThemeIcon>

                    <div>
                      <Text fw={700} c="dark">
                        Connect With Leadership
                      </Text>

                      <Text size="sm" c="dimmed">
                        Learn more about our mission
                      </Text>
                    </div>
                  </Group>
                </Stack>
              </Paper>
            </motion.div>
          </Grid.Col>
        </Grid>

        {/* 🔥 LEADERSHIP CARDS */}
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
          {leaderSectionLeadersData.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
              }}
            >
              <Card
                radius="30px"
                p={0}
                shadow="xl"
                style={{
                  overflow: "hidden",
                  background: "white",
                  border: "1px solid rgba(0,0,0,0.05)",
                  height: "100%",
                }}
              >
                {/* IMAGE */}
                <Box
                  style={{
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Image src={leader.image} height={400} fit="cover" />

                  <Overlay
                    gradient="linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.75) 100%)"
                    opacity={1}
                  />

                  {/* OVERLAY CONTENT */}
                  <Box
                    style={{
                      position: "absolute",
                      bottom: 25,
                      left: 25,
                      zIndex: 2,
                      color: "white",
                    }}
                  >
                    <Title order={3} fw={800}>
                      {leader.name}
                    </Title>

                    <Text c="rgba(255,255,255,0.85)" fw={500}>
                      {leader.designation}
                    </Text>
                  </Box>
                </Box>

                {/* CONTENT */}
                <Box p="xl">
                  <Text c="dimmed" lh={1.9}>
                    {leader.description}
                  </Text>

                  {/* FOOTER */}
                  <Group justify="space-between" mt="xl">
                    <Badge color="orange" variant="light" radius="xl">
                      Leadership Team
                    </Badge>
                  </Group>
                </Box>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default LeaderSection;
