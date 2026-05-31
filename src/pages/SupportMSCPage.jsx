import { useState } from "react";
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
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Title,
  Notification,
} from "@mantine/core";
import {
  FaArrowRight,
  FaEnvelope,
  FaHandsHelping,
  FaHeart,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

import heroHome5 from "../assets/home/heroHome5.webp";
import mvv3 from "../assets/pages/mvv3.webp";
import partner from "../assets/pages/partner.webp";
import volunteer from "../assets/pages/volunteer.webp";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const supportCards = [
  {
    icon: FaHeart,
    title: "Donate",
    desc: "Support community education, fellowships, workshops, and grassroots empowerment initiatives.",
  },
  {
    icon: FaUsers,
    title: "Partner With MSC",
    desc: "Collaborate with local communities and help create sustainable opportunities for growth.",
  },
  {
    icon: FaHandsHelping,
    title: "Volunteer",
    desc: "Share your skills, knowledge, and time to empower communities with dignity and respect.",
  },
];

export default function SupportMSCPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Email is required.");
      return;
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSubmitted(true);
    setEmail("");

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <Box bg="#f8f9fc">
      {/* HERO SECTION */}

      <Box
        py={{ base: 90, md: 120 }}
        pos="relative"
        style={{
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #071120 0%, #0d1d36 50%, #13284a 100%)",
        }}
      >
        {/* BACKGROUND IMAGE */}

        <Box
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${heroHome5})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.16,
          }}
        />

        <Overlay
          gradient="linear-gradient(180deg, rgba(5,10,20,0.7) 0%, rgba(5,10,20,0.94) 100%)"
          opacity={1}
          zIndex={1}
        />

        {/* BLUR ORBS */}

        <Box
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "rgba(255,123,0,0.35)",
            filter: "blur(120px)",
            zIndex: 1,
          }}
        />

        <Container size="xl" pos="relative" style={{ zIndex: 2 }}>
          <Grid align="center" gutter={60}>
            {/* LEFT CONTENT */}

            <Grid.Col span={{ base: 12, md: 7 }}>
              <MotionBox
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Text
                  c="orange.4"
                  fw={700}
                  tt="uppercase"
                  mb="md"
                  style={{ letterSpacing: 1 }}
                >
                  Support MSC
                </Text>

                <Title
                  order={1}
                  c="white"
                  fw={900}
                  style={{
                    fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                    lineHeight: 1.05,
                  }}
                >
                  Every Movement
                  <br />
                  Begins With
                  <br />
                  Someone Who Cares
                </Title>

                <Text
                  c="gray.3"
                  size="lg"
                  mt="xl"
                  maw={650}
                  style={{ lineHeight: 1.9 }}
                >
                  Support MSC in building equality, dignity, leadership, and
                  opportunities for marginalized communities through education,
                  partnerships, donations, and volunteer initiatives.
                </Text>

                <Group mt={35}>
                  <Button size="lg" radius="xl" color="orange">
                    Support The Mission
                  </Button>

                  <Button
                    component={Link}
                    to="/contact"
                    size="lg"
                    radius="xl"
                    variant="white"
                    color="dark"
                  >
                    Become A Volunteer
                  </Button>
                </Group>
              </MotionBox>
            </Grid.Col>

            {/* RIGHT IMAGE */}

            <Grid.Col span={{ base: 12, md: 5 }}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                <Box
                  pos="relative"
                  style={{
                    maxWidth: 460,
                    margin: "auto",
                  }}
                >
                  <Card
                    radius={34}
                    p={0}
                    bg="rgba(255,255,255,0.08)"
                    style={{
                      overflow: "hidden",
                      backdropFilter: "blur(18px)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <Image src={heroHome5} h={560} fit="cover" />
                  </Card>

                  {/* FLOATING CARD */}

                  <Paper
                    radius={24}
                    p="lg"
                    bg="rgba(255,255,255,0.1)"
                    style={{
                      position: "absolute",
                      bottom: -30,
                      left: -30,
                      backdropFilter: "blur(18px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      width: 240,
                    }}
                  >
                    <Text c="orange.3" fw={700} size="sm">
                      Community Impact
                    </Text>

                    <Title order={3} c="white" mt={6}>
                      20K+
                    </Title>

                    <Text c="gray.3" size="sm" mt={4}>
                      Lives supported through education and leadership programs.
                    </Text>
                  </Paper>
                </Box>
              </MotionBox>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* SUPPORT OPTIONS */}

      <Container size="xl" py={110}>
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing={30}>
          {supportCards.map((item, index) => (
            <MotionCard
              key={index}
              radius={30}
              p="xl"
              shadow="xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <ThemeIcon
                size={70}
                radius="xl"
                color="orange"
                variant="light"
                mb="xl"
              >
                <item.icon size={28} />
              </ThemeIcon>

              <Title order={3} fw={800} mb="md">
                {item.title}
              </Title>

              <Text c="dimmed" lh={1.9}>
                {item.desc}
              </Text>
            </MotionCard>
          ))}
        </SimpleGrid>
      </Container>

      {/* DONATION SECTION */}

      <Container size="lg" pb={120}>
        <Card radius={36} p={{ base: "xl", md: 50 }} shadow="xl">
          <Grid align="center" gutter={50}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Image src={mvv3} radius={28} h={500} fit="cover" />

              <Text ta="center" mt="md" c="dimmed" fs="italic">
                Supporting communities through education, dignity, and
                leadership.
              </Text>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Text c="orange.6" fw={700} mb="md">
                Donate to MSC
              </Text>

              <Title order={2} fw={900} size="3rem" mb="xl">
                Your Contribution Creates Real Change
              </Title>

              <Stack gap="sm">
                <Text fw={700}>ACCOUNT HOLDER:</Text>
                <Text c="dimmed">Movement for Scavenger Community – MSC</Text>

                <Text fw={700} mt="md">
                  ACCOUNT NO:
                </Text>
                <Text c="dimmed">6428 0201 0000 376</Text>

                <Text fw={700} mt="md">
                  BANK NAME:
                </Text>
                <Text c="dimmed">Union Bank of India</Text>

                <Text fw={700} mt="md">
                  Branch:
                </Text>
                <Text c="dimmed">Ladwa (Kurukshetra)</Text>

                <Text fw={700} mt="md">
                  IFSC:
                </Text>
                <Text c="dimmed">UBIN 0564 281</Text>
              </Stack>

              {/* EMAIL FORM */}

              <Box mt={40}>
                <Text fw={700} mb="md">
                  Or Contact Us To Support MSC
                </Text>

                <Group align="flex-start">
                  <TextInput
                    placeholder="Enter your email"
                    size="lg"
                    radius="xl"
                    leftSection={<FaEnvelope size={14} />}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={error}
                    style={{ flex: 1 }}
                  />

                  <Button
                    size="lg"
                    radius="xl"
                    color="orange"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Group>

                {/* {submitted && (
                  <Notification
                    mt="lg"
                    radius="xl"
                    color="green"
                    title="Thank you!"
                  >
                    Your email has been submitted successfully.
                  </Notification>
                )} */}
                {submitted && (
                  <Notification
                    mt="xl"
                    radius="24px"
                    withCloseButton={false}
                    icon={<FaCheckCircle size={20} />}
                    title={
                      <Text fw={700} size="md">
                        Successfully Submitted!
                      </Text>
                    }
                    styles={{
                      root: {
                        background:
                          "linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(22,163,74,0.18) 100%)",
                        border: "1px solid rgba(34,197,94,0.25)",
                        backdropFilter: "blur(12px)",
                        padding: "18px 22px",
                        boxShadow: "0 10px 30px rgba(34,197,94,0.12)",
                      },
                      icon: {
                        background: "rgba(34,197,94,0.15)",
                        color: "#22c55e",
                      },
                      title: {
                        color: "#166534",
                        marginBottom: 4,
                      },
                      description: {
                        color: "#166534",
                      },
                    }}
                  >
                    Thank you for supporting MSC. Our team will contact you
                    shortly.
                  </Notification>
                )}
              </Box>
            </Grid.Col>
          </Grid>
        </Card>
      </Container>

      {/* PARTNER SECTION */}

      <Box
        py={110}
        style={{
          background:
            "linear-gradient(135deg, #071120 0%, #0c1b33 50%, #13284a 100%)",
        }}
      >
        <Container size="xl">
          <Grid align="center" gutter={70}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Text c="orange.4" fw={700} mb="md">
                Become A Partner of MSC
              </Text>

              <Title order={2} c="white" fw={900} size="3rem" mb="xl">
                Building Local Leadership Together
              </Title>

              <Text c="gray.3" size="lg" lh={2}>
                MSC works closely with local community members and believes in
                the importance of community autonomy and collective leadership.
              </Text>

              <Text c="gray.3" size="lg" lh={2} mt="lg">
                Our Dr. B. R. Ambedkar Community Resource Centres are operated
                by local committees who understand the needs and aspirations of
                their communities.
              </Text>

              <Text c="gray.3" size="lg" lh={2} mt="lg">
                We welcome collaborations, educational initiatives,
                microbusiness ideas, and projects that improve opportunities for
                marginalized communities.
              </Text>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Image src={partner} radius={34} h={600} fit="cover" />

              <Text ta="center" mt="md" c="gray.4" fs="italic">
                Community collaboration and partnership initiatives led by MSC.
              </Text>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* DONATIONS & VOLUNTEER */}

      <Container size="xl" py={120}>
        <Grid gutter={70} align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src={volunteer} radius={34} h={580} fit="cover" />

            <Text ta="center" mt="md" c="dimmed" fs="italic">
              Volunteers and fellows supporting community workshops and
              educational programs.
            </Text>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text c="orange.6" fw={700} mb="md">
              Donations & Volunteer Support
            </Text>

            <Title order={2} fw={900} size="3rem" mb="xl">
              Help Us Create Safe Spaces For Equality
            </Title>

            <Text size="lg" c="dimmed" lh={2}>
              MSC relies on donations to sustain workshops, fellowship programs,
              travel expenses, and community engagement initiatives across
              India.
            </Text>

            <Text size="lg" c="dimmed" lh={2} mt="lg">
              To ensure inclusivity, all workshops remain free of charge while
              MSC provides accommodation, food, and educational support for
              fellows and participants.
            </Text>

            <Text size="lg" c="dimmed" lh={2} mt="lg">
              We also welcome material donations such as books, furniture,
              teaching resources, and stationery for our community centers.
            </Text>

            <Text size="lg" c="dimmed" lh={2} mt="lg">
              Whether you are an individual, volunteer group, educator, artist,
              or trainer — your support can help communities grow with dignity
              and confidence.
            </Text>

            <Button
              component={Link}
              to="/contact"
              mt={35}
              size="lg"
              radius="xl"
              color="orange"
              rightSection={<FaArrowRight size={14} />}
            >
              Become A Volunteer
            </Button>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
