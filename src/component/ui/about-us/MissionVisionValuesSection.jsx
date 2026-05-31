import {
  Box,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaBookOpen,
  FaHandsHelping,
  FaHeart,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

import mvv3 from "../../../assets/pages/mvv1.webp";
import mvv2 from "../../../assets/pages/mvv2.webp";
import mvv1 from "../../../assets/pages/mvv3.webp";
const MotionBox = motion(Box);
const MotionCard = motion(Card);

const missionCards = [
  {
    title: "Our Mission",
    icon: FaHandsHelping,
    image: mvv1,
    desc: "To empower marginalized communities through education, leadership, equality, and sustainable social transformation.",
  },
  {
    title: "Our Vision",
    icon: FaLightbulb,
    image: mvv2,
    desc: "A society where every individual lives with dignity, equal opportunity, and freedom from caste discrimination.",
  },
  {
    title: "Our Values",
    icon: FaHeart,
    image: mvv3,
    desc: "Community leadership, inclusion, empathy, justice, and collective action are at the core of everything we do.",
  },
];

const valuePoints = [
  {
    icon: FaBalanceScale,
    title: "Equality & Justice",
  },
  {
    icon: FaUsers,
    title: "Community Leadership",
  },
  {
    icon: FaBookOpen,
    title: "Education For All",
  },
];

export default function MissionVisionValuesSection() {
  return (
    <Box
      py={{ base: 90, md: 130 }}
      pos="relative"
      style={{
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #071120 0%, #0c1b33 50%, #13284a 100%)",
      }}
    >
      {/* BACKGROUND IMAGE */}

      <Box
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${mvv1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.06,
        }}
      />
      {/* BLUR ORBS */}

      <Box
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(255,123,0,0.3)",
          filter: "blur(120px)",
          zIndex: 1,
        }}
      />

      <Box
        style={{
          position: "absolute",
          bottom: -120,
          left: -100,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(255,170,0,0.2)",
          filter: "blur(120px)",
          zIndex: 1,
        }}
      />

      <Container size="xl" pos="relative" style={{ zIndex: 2 }}>
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
            c="orange.4"
            fw={700}
            tt="uppercase"
            mb="md"
            style={{ letterSpacing: 1 }}
          >
            Mission • Vision • Values
          </Text>

          <Title
            order={2}
            c="white"
            fw={900}
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1.08,
            }}
          >
            The Purpose
            <br />
            Behind Our
            <br />
            Movement
          </Title>

          <Text
            c="gray.3"
            size="lg"
            maw={760}
            mx="auto"
            mt="xl"
            style={{
              lineHeight: 1.9,
            }}
          >
            IISJ and MSC believe in building a future rooted in dignity,
            equality, leadership, and sustainable community-driven change.
          </Text>
        </MotionBox>

        {/* MAIN CARDS */}

        <Grid gutter={35}>
          {missionCards.map((item, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 4 }}>
              <MotionCard
                radius={34}
                p={0}
                bg="rgba(255,255,255,0.06)"
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
                  backdropFilter: "blur(18px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  height: "100%",
                }}
              >
                {/* IMAGE */}

                <Box pos="relative">
                  <Image src={item.image} h={260} fit="cover" />

                  {/* <Overlay
                      gradient="linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.75) 100%)"
                      opacity={1}
                    /> */}

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
                      boxShadow: "0 10px 30px rgba(255,123,0,0.35)",
                    }}
                  >
                    <item.icon size={30} />
                  </ThemeIcon>
                </Box>

                {/* CONTENT */}

                <Stack p="xl" pt={50}>
                  <Title order={3} c="white" fw={800}>
                    {item.title}
                  </Title>

                  <Text c="gray.4" lh={1.9}>
                    {item.desc}
                  </Text>
                </Stack>
              </MotionCard>
            </Grid.Col>
          ))}
        </Grid>

        {/* VALUES STRIP */}

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          mt={80}
        >
          <Card
            radius={36}
            p={{ base: "xl", md: 45 }}
            bg="rgba(255,255,255,0.06)"
            style={{
              backdropFilter: "blur(18px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Grid align="center">
              <Grid.Col span={{ base: 12, md: 5 }}>
                <Text
                  c="orange.4"
                  fw={700}
                  tt="uppercase"
                  mb="md"
                  style={{ letterSpacing: 1 }}
                >
                  Core Principles
                </Text>

                <Title
                  order={3}
                  c="white"
                  fw={900}
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    lineHeight: 1.1,
                  }}
                >
                  Values That Guide Every Action
                </Title>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 7 }}>
                <Group justify="space-between" gap={20} wrap="wrap">
                  {valuePoints.map((item, index) => (
                    <Card
                      key={index}
                      radius={28}
                      p="lg"
                      bg="rgba(255,255,255,0.06)"
                      style={{
                        flex: 1,
                        minWidth: 180,
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <Stack align="center" gap="md">
                        <ThemeIcon
                          size={64}
                          radius="xl"
                          color="orange"
                          variant="light"
                        >
                          <item.icon size={24} />
                        </ThemeIcon>

                        <Text c="white" fw={700} ta="center">
                          {item.title}
                        </Text>
                      </Stack>
                    </Card>
                  ))}
                </Group>
              </Grid.Col>
            </Grid>
          </Card>
        </MotionBox>
      </Container>
    </Box>
  );
}
