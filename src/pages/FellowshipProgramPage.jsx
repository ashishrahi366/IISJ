import React, { useState } from "react";
import {
  Box,
  Container,
  Title,
  Text,
  Grid,
  Card,
  Image,
  Stack,
  Button,
  TextInput,
  Paper,
  ThemeIcon,
  Group,
  Notification,
  Badge,
  Divider,
} from "@mantine/core";

import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaCheckCircle,
  FaEnvelope,
} from "react-icons/fa";

import {programs} from "../constants/comon"
import CTAImg from "../assets/pages/MSC-Activism.jpg";
import heroImg from "../assets/pages/mvv2.webp";
import fellowshipImg from "../assets/pages/fellowshipImg.jpg";


function FellowshipProgramPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ Email Validation
  const validateEmail = (value) => {
    const trimmed = value.trim();

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
  };

  // ✅ Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setEmail("");
    }, 1500);
  };
  return (
    <>
      {/* 🔥 HERO SECTION */}
      <Box
        style={{
          height: "90vh",
          minHeight: "650px",
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Container
          size="xl"
          style={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge
              size="lg"
              radius="xl"
              color="orange"
              variant="filled"
              mb={25}
            >
              Fellowship For Equality
            </Badge>

            <Title
              c="white"
              fw={900}
              style={{
                fontSize: "clamp(40px, 7vw, 78px)",
                lineHeight: 1.05,
                maxWidth: "900px",
              }}
            >
              Become A Future Leader For Social Justice
            </Title>

            <Text
              c="rgba(255,255,255,0.82)"
              size="xl"
              mt="xl"
              maw={760}
              lh={1.9}
            >
              Join our Fellowship Program designed to empower young leaders from
              marginalized communities through education, mentorship, leadership
              training, and grassroots action.
            </Text>

            {/* <Group mt={45}>
              <Button
                size="lg"
                radius="xl"
                color="orange"
                rightSection={<FaArrowRight size={14} />}
              >
                Apply Now
              </Button>

              <Button
                size="lg"
                radius="xl"
                variant="outline"
                color="gray"
              >
                Learn More
              </Button>
            </Group> */}
          </motion.div>
        </Container>
      </Box>
      {/* 🔥 APPLICATION SECTION */}
      <Container size="lg" py={110}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Paper
            radius="40px"
            p="50px"
            shadow="xl"
            style={{
              background: "linear-gradient(135deg, #fff7ed 0%, #ffffff 100%)",
              border: "1px solid rgba(249,115,22,0.15)",
            }}
          >
            <Grid align="center" gutter={50}>
              {/* LEFT */}
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Badge color="orange" variant="filled" radius="xl" mb={20}>
                  Apply For Fellowship
                </Badge>

                <Title
                  order={2}
                  fw={900}
                  style={{
                    fontSize: "clamp(30px, 4vw, 52px)",
                    lineHeight: 1.2,
                  }}
                >
                  Start Your Leadership Journey Today
                </Title>

                <Text mt="lg" c="dimmed" size="lg" lh={2}>
                  Enter your email address to receive fellowship application
                  details, eligibility information, mentorship opportunities,
                  and updates about our upcoming fellowship cohort.
                </Text>

                <Divider my={30} />

                <Stack gap="lg">
                  {[
                    "Leadership training workshops",
                    "Community project opportunities",
                    "Mentorship & networking support",
                    "Funding assistance for initiatives",
                  ].map((item, index) => (
                    <Group key={index} align="center">
                      <FaCheckCircle color="#22c55e" size={18} />

                      <Text fw={500}>{item}</Text>
                    </Group>
                  ))}
                </Stack>
              </Grid.Col>

              {/* RIGHT */}
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Paper
                  radius="30px"
                  p="40px"
                  shadow="md"
                  style={{
                    background: "white",
                  }}
                >
                  <Stack gap="lg">
                    <ThemeIcon
                      size={75}
                      radius="100%"
                      color="orange"
                      variant="light"
                    >
                      <FaEnvelope size={30} />
                    </ThemeIcon>

                    <div>
                      <Title order={3} fw={800}>
                        Get Application Details
                      </Title>

                      <Text c="dimmed" mt={8}>
                        We’ll send fellowship application information directly
                        to your inbox.
                      </Text>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <Stack>
                        <TextInput
                          placeholder="Enter your email address"
                          radius="xl"
                          size="lg"
                          value={email}
                          error={error}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setError("");
                          }}
                        />

                        <Button
                          type="submit"
                          size="lg"
                          radius="xl"
                          color="orange"
                          loading={loading}
                          rightSection={<FaArrowRight size={14} />}
                        >
                          Send Application Info
                        </Button>

                        {success && (
                          <Notification
                            color="green"
                            radius="lg"
                            title="Email Sent Successfully"
                            icon={<FaCheckCircle />}
                            onClose={() => setSuccess(false)}
                          >
                            Fellowship application details have been sent to
                            your email.
                          </Notification>
                        )}
                      </Stack>
                    </form>

                    <Divider />

                    <Text ta="center" c="dimmed" size="sm">
                      Or contact us directly at
                    </Text>

                    <Text ta="center" fw={700} size="lg" c="orange">
                      iisj.contact@gmail.com
                    </Text>
                  </Stack>
                </Paper>
              </Grid.Col>
            </Grid>
          </Paper>
        </motion.div>
      </Container>

      {/* 🔥 INTRO SECTION */}
      <Container size="xl" py={100}>
        <Grid gutter={60} align="center">
          {/* LEFT */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Image src={fellowshipImg} radius="32px" h={520} fit="cover" />
            </motion.div>
          </Grid.Col>

          {/* RIGHT */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Badge color="orange" variant="light" radius="xl" mb={20}>
                About The Fellowship
              </Badge>

              <Title
                order={2}
                fw={900}
                style={{
                  fontSize: "clamp(32px, 5vw, 52px)",
                  lineHeight: 1.2,
                }}
              >
                A Platform For Emerging Community Leaders
              </Title>

              <Text mt="xl" c="dimmed" size="lg" lh={2}>
                Our Fellowship Program was created to nurture future leaders
                from historically marginalized communities. We believe
                leadership should emerge from within communities — from
                individuals who understand local realities and carry the courage
                to create change.
              </Text>

              <Text mt="md" c="dimmed" size="lg" lh={2}>
                Fellows participate in workshops, mentorship sessions,
                collaborative projects, and social justice initiatives while
                receiving support to build their own community-driven programs.
              </Text>

              <Text mt="md" c="dimmed" size="lg" lh={2}>
                We welcome applications from all members of the scavenger
                community — regardless of caste, religion, language, or gender
                identity.
              </Text>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>

      {/* 🔥 PROGRAM HIGHLIGHTS */}
      <Box
        py={110}
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #111827 50%, #1e293b 100%)",
        }}
      >
        <Container size="xl">
          <Stack align="center" mb={70}>
            <Badge color="orange" variant="filled" radius="xl" size="lg">
              Fellowship Highlights
            </Badge>

            <Title
              c="white"
              ta="center"
              fw={900}
              style={{
                fontSize: "clamp(32px, 5vw, 58px)",
              }}
            >
              What Fellows Will Experience
            </Title>

            <Text
              ta="center"
              c="rgba(255,255,255,0.72)"
              size="lg"
              maw={760}
              lh={1.9}
            >
              A transformative journey focused on leadership, dignity,
              education, community action, and personal growth.
            </Text>
          </Stack>

          <Grid gutter="xl">
            {programs.map((item, index) => (
              <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
                <motion.div
                  whileHover={{
                    y: -10,
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  viewport={{ once: true }}
                >
                  <Card
                    radius="30px"
                    p={0}
                    h="100%"
                    style={{
                      overflow: "hidden",
                      background: "rgba(255,255,255,0.06)",
                      backdropFilter: "blur(14px)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <Image src={item.image} height={240} />

                    <Box p="xl">
                      <ThemeIcon
                        size={58}
                        radius="xl"
                        color="orange"
                        variant="light"
                      >
                        {item.icon}
                      </ThemeIcon>

                      <Title order={4} c="white" mt="lg" fw={800}>
                        {item.title}
                      </Title>

                      <Text
                        mt="md"
                        c="rgba(255,255,255,0.72)"
                        size="sm"
                        lh={1.9}
                      >
                        {item.desc}
                      </Text>
                    </Box>
                  </Card>
                </motion.div>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 🔥 CTA SECTION */}
      <Box
        py={120}
        style={{
          backgroundImage: `url(${CTAImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Container
          size="md"
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Badge
              color="orange"
              variant="filled"
              radius="xl"
              size="lg"
              mb={25}
            >
              Become A Changemaker
            </Badge>

            <Title
              c="white"
              fw={900}
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: 1.1,
              }}
            >
              Leadership Begins With Courage
            </Title>

            <Text
              c="rgba(255,255,255,0.78)"
              size="lg"
              mt="xl"
              maw={760}
              mx="auto"
              lh={2}
            >
              Join a movement dedicated to dignity, equality, and justice.
              Together, we can build stronger communities and create
              opportunities for future generations.
            </Text>
          </motion.div>
        </Container>
      </Box>
    </>
  );
}

export default FellowshipProgramPage;
