import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Overlay,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBookOpen,
  FaHandsHelping,
  FaHome,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import wwd1 from "../../../assets/home/heroHome4.webp";
import wwd2 from "../../../assets/pages/wwd2.webp";
import wwd3 from "../../../assets/pages/wwd3.webp";
import wwd4 from "../../../assets/pages/wwd4.webp";

import about2 from "../../../assets/pages/abtHero1.webp";
import heroHome5 from "../../../assets/home/heroHome5.webp";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const programs = [
  {
    icon: FaUsers,
    title: "Leadership Programs",
    image: wwd1,
    path: "/Fellowship-Equality",
    desc: "We nurture grassroots leaders who work towards dignity, equality, and sustainable social transformation within their communities.",
  },
  {
    icon: FaBookOpen,
    title: "Education Initiatives",
    image: wwd2,
    path: "/Avarna",
    desc: "MSC creates access to education, workshops, mentorship, and learning opportunities for marginalized communities across India.",
  },
  {
    icon: FaHome,
    title: "Community Resource Centers",
    image: wwd3,
    path: "/Community-Resource-Centers",
    desc: "Our Dr. B. R. Ambedkar Community Resource Centres provide safe spaces for education, collaboration, and community development.",
  },
  {
    icon: FaHandsHelping,
    title: "Social Justice Campaigns",
    image: wwd4,
    path: "/IISJ",
    desc: "We advocate against caste discrimination and support initiatives focused on equality, dignity, and human rights.",
  },
];

export default function WhatWeDoSection() {
  return (
    <Box
      py={{ base: 90, md: 130 }}
      pos="relative"
      style={{
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #f8f9fc 0%, #eef2f8 50%, #f8fafc 100%)",
      }}
    >
      {/* BACKGROUND ORBS */}
      <Box
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(255,123,0,0.12)",
          filter: "blur(120px)",
        }}
      />

      <Box
        style={{
          position: "absolute",
          bottom: -100,
          left: -100,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(255,170,0,0.08)",
          filter: "blur(120px)",
        }}
      />

      <Container size="xl" pos="relative">
        {/* TOP CONTENT */}

        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          ta="center"
          mb={70}
        >
          <Text
            c="orange.6"
            fw={700}
            tt="uppercase"
            mb="md"
            style={{ letterSpacing: 1 }}
          >
            What We Do
          </Text>

          <Title
            order={2}
            fw={900}
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1.08,
            }}
          >
            Creating Change
            <br />
            Through Education,
            <br />
            Leadership & Action
          </Title>

          <Text
            c="dimmed"
            size="lg"
            maw={760}
            mx="auto"
            mt="xl"
            style={{
              lineHeight: 1.9,
            }}
          >
            IISJ and MSC work with communities to create opportunities,
            strengthen leadership, and support sustainable social justice
            initiatives across India.
          </Text>
        </MotionBox>

        {/* PROGRAMS GRID */}

        <Grid gutter={35}>
          {programs.map((item, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 6 }}>
              <MotionCard
                radius={36}
                p={0}
                bg="white"
                shadow="xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                style={{
                  overflow: "hidden",
                  height: "100%",
                }}
              >
                {/* IMAGE */}

                <Box pos="relative">
                  <Image src={item.image} h={320} fit="cover" />
                  {/* ICON */}

                  <ThemeIcon
                    size={72}
                    radius="xl"
                    color="orange"
                    variant="filled"
                    style={{
                      position: "absolute",
                      bottom: -35,
                      left: 30,
                      zIndex: 2,
                      boxShadow: "0 12px 30px rgba(255,123,0,0.35)",
                    }}
                  >
                    <item.icon size={28} />
                  </ThemeIcon>
                </Box>

                {/* CONTENT */}

                <Stack p="xl" pt={50}>
                  <Title order={3} fw={800}>
                    {item.title}
                  </Title>

                  <Text c="dimmed" lh={1.9}>
                    {item.desc}
                  </Text>

                  <Group mt="md">
                    <Button
                      component={Link}
                      to={item.path}
                      radius="xl"
                      color="orange"
                      rightSection={<FaArrowRight size={14} />}
                    >
                      Learn More
                    </Button>
                  </Group>
                </Stack>
              </MotionCard>
            </Grid.Col>
          ))}
        </Grid>

        {/* BOTTOM HIGHLIGHT SECTION */}

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          mt={90}
        >
          <Card
            radius={40}
            p={{ base: "xl", md: 50 }}
            style={{
              overflow: "hidden",
              position: "relative",
              background:
                "linear-gradient(135deg, #071120 0%, #0d1d36 50%, #13284a 100%)",
            }}
          >
            {/* BG IMAGE */}

            <Box
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${heroHome5})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.08,
              }}
            />

            <Grid align="center" pos="relative">
              <Grid.Col span={{ base: 12, md: 7 }}>
                <Text
                  c="orange.4"
                  fw={700}
                  tt="uppercase"
                  mb="md"
                  style={{ letterSpacing: 1 }}
                >
                  Community Driven Impact
                </Text>

                <Title
                  order={2}
                  c="white"
                  fw={900}
                  style={{
                    fontSize: "clamp(2.2rem, 5vw, 4rem)",
                    lineHeight: 1.1,
                  }}
                >
                  Empowering Communities
                  <br />
                  To Build Their
                  <br />
                  Own Future
                </Title>

                <Text
                  c="gray.3"
                  size="lg"
                  mt="xl"
                  maw={650}
                  style={{
                    lineHeight: 1.9,
                  }}
                >
                  Every initiative by IISJ and MSC is designed to strengthen
                  local leadership, encourage participation, and create
                  sustainable systems led by the community itself.
                </Text>

                <Button
                  component={Link}
                  to="/Our-Projects"
                  mt={35}
                  size="lg"
                  radius="xl"
                  color="orange"
                  rightSection={<FaArrowRight size={14} />}
                >
                  Explore Our Programs
                </Button>
              </Grid.Col>

              {/* RIGHT IMAGE */}

              <Grid.Col span={{ base: 12, md: 5 }}>
                <Box
                  style={{
                    overflow: "hidden",
                    borderRadius: 32,
                    boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
                  }}
                >
                  <Image src={about2} h={450} fit="cover" />
                </Box>
              </Grid.Col>
            </Grid>
          </Card>
        </MotionBox>
      </Container>
    </Box>
  );
}
