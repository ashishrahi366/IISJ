import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Overlay,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGraduationCap,
  FaHandsHelping,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import about3 from "../assets/pages/about3.JPG";
import vimal1 from "../assets/pages/vimal1.jpeg";
import leader13 from "../assets/home/leader13.webp";
import leader12 from "../assets/home/leader12.jpg";
import Vimalpic2 from "../assets/home/Vimalpic2.jpg";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const achievements = [
  {
    icon: FaUsers,
    title: "Founder of MSC",
    desc: "Leading the movement to eradicate manual scavenging and empower marginalized communities.",
  },
  {
    icon: FaHandsHelping,
    title: "Global Leadership Advocate",
    desc: "Supporting grassroots leadership movements and social justice initiatives worldwide.",
  },
  {
    icon: FaGraduationCap,
    title: "Scholar & Researcher",
    desc: "Masters in Social Work and currently pursuing a Ph.D. in Social Work.",
  },
];

export default function VimalKumarLeaderSection() {
  return (
    <Box bg="#f8f9fc">
      {/* HERO SECTION */}

      <Box
        py={130}
        pos="relative"
        style={{
          backgroundImage: `url(${about3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        <Overlay
          gradient="linear-gradient(180deg, rgba(5,10,25,0.75) 0%, rgba(7,16,32,0.95) 100%)"
          opacity={1}
          zIndex={1}
        />

        {/* BLUR EFFECTS */}

        <Box
          style={{
            position: "absolute",
            top: 100,
            right: 120,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "rgba(255, 120, 0, 0.35)",
            filter: "blur(120px)",
            zIndex: 1,
          }}
        />

        <Container size="xl" pos="relative" style={{ zIndex: 2 }}>
          <Grid align="center" gutter={60}>
            <Grid.Col span={{ base: 12, md: 7 }}>
              <MotionBox
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Group mb="xl">
                  <Avatar size={64} radius="xl" src={leader12} />

                  <Box>
                    <Text c="orange.4" fw={700}>
                      Founder of MSC
                    </Text>

                    <Text c="white" fw={700} size="lg">
                      Vimal Kumar
                    </Text>
                  </Box>
                </Group>

                <Title
                  order={1}
                  c="white"
                  fw={900}
                  lh={1.05}
                  style={{
                    fontSize: "clamp(3rem, 7vw, 5.8rem)",
                  }}
                >
                  A Voice For
                  <br />
                  Dignity, Equality
                  <br />& Leadership
                </Title>

                <Text
                  c="gray.2"
                  size="lg"
                  mt="xl"
                  maw={650}
                  style={{ lineHeight: 1.9 }}
                >
                  Vimal Kumar has dedicated his life to eradicating manual
                  scavenging, empowering marginalized communities, and creating
                  leadership opportunities for future generations.
                </Text>

                <Group mt={40}>
                  <Button
                    size="lg"
                    radius="xl"
                    color="orange"
                    rightSection={<FaArrowRight size={16} />}
                  >
                    Explore His Journey
                  </Button>

                  <Button size="lg" radius="xl" variant="white" color="dark">
                    Learn About MSC
                  </Button>
                </Group>
              </MotionBox>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 5 }}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Box
                  pos="relative"
                  style={{
                    maxWidth: 500,
                    margin: "auto",
                  }}
                >
                  <Card
                    radius={36}
                    p={0}
                    bg="rgba(255,255,255,0.08)"
                    style={{
                      backdropFilter: "blur(18px)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      overflow: "hidden",
                    }}
                  >
                    <Image src={leader13} h={620} fit="cover" />
                  </Card>

                  <Card
                    radius={28}
                    p="lg"
                    bg="rgba(255,255,255,0.12)"
                    style={{
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      position: "absolute",
                      bottom: -40,
                      left: -30,
                      width: 260,
                    }}
                  >
                    <Text c="orange.3" fw={700} size="sm">
                      Leadership Mission
                    </Text>

                    <Text c="white" fw={700} size="xl" mt={6}>
                      Building A Future Beyond Caste Barriers
                    </Text>
                  </Card>
                </Box>
              </MotionBox>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* ABOUT SECTION */}

      <Container size="xl" py={120}>
        <Grid gutter={70} align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Image src={Vimalpic2} radius={32} h={600} fit="cover" />

              <Text ta="center" mt="md" c="dimmed" fs="italic">
                Vimal Kumar working closely with communities and leadership
                initiatives.
              </Text>
            </MotionBox>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Text c="orange.6" fw={700} mb="md">
                Vimal Kumar: The Founder of MSC
              </Text>

              <Title order={2} fw={900} size="3.2rem" mb="xl">
                Transforming Pain Into A Movement For Justice
              </Title>

              <Text size="lg" c="dimmed" lh={2}>
                Vimal Kumar is a Next Generation Leader at The McCain Institute,
                Acumen Fellow at Acumen Funds, founder of the Democratizing
                Leadership Initiative (DLI), and founder of the Movement for
                Scavenger Community (MSC).
              </Text>

              <Text size="lg" c="dimmed" lh={2} mt="lg">
                MSC is committed to eradicating manual scavenging in India and
                works to bring education, dignity, and awareness to the
                scavenger community.
              </Text>

              <Text size="lg" c="dimmed" lh={2} mt="lg">
                As one of the very few members of the scavenger community who
                accessed higher education, Vimal brings lived experience and
                deep understanding of the struggles created by India’s caste
                system.
              </Text>
            </MotionBox>
          </Grid.Col>
        </Grid>
      </Container>

      {/* ACHIEVEMENTS SECTION */}

      <Box
        py={110}
        style={{
          background:
            "linear-gradient(135deg, #071120 0%, #0c1b33 50%, #13284a 100%)",
        }}
      >
        <Container size="xl">
          <Box ta="center" mb={60}>
            <Text c="orange.4" fw={700} mb="sm">
              Leadership & Impact
            </Text>

            <Title order={2} c="white" fw={900} size="3rem">
              Building Communities Through Leadership
            </Title>
          </Box>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing={30}>
            {achievements.map((item, index) => (
              <MotionCard
                key={index}
                radius={32}
                p="xl"
                bg="rgba(255,255,255,0.08)"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                style={{
                  backdropFilter: "blur(18px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <ThemeIcon
                  size={72}
                  radius="xl"
                  color="orange"
                  variant="light"
                  mb="xl"
                >
                  <item.icon size={30} />
                </ThemeIcon>

                <Title order={4} c="white" fw={800} mb="md">
                  {item.title}
                </Title>

                <Text c="gray.3" lh={1.9}>
                  {item.desc}
                </Text>
              </MotionCard>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* LIFE JOURNEY SECTION */}

      <Container size="xl" py={120}>
        <Grid gutter={70} align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Text c="orange.6" fw={700} mb="md">
                A Life Dedicated To Change
              </Text>

              <Title order={2} fw={900} size="3rem" mb="xl">
                Fighting Caste Violence Through Education
              </Title>

              <Text size="lg" c="dimmed" lh={2}>
                Vimal Kumar seeks to eradicate caste violence and discriminatory
                attitudes toward the scavenger community through the
                establishment of leadership education centers.
              </Text>

              <Text size="lg" c="dimmed" lh={2} mt="lg">
                He actively supports leadership movements among grassroots
                organizations and activists around the world, helping create
                sustainable and community-driven transformation.
              </Text>

              <Text size="lg" c="dimmed" lh={2} mt="lg">
                Through his work, Vimal continues to inspire young leaders to
                challenge inequality, pursue education, and build a more just
                and inclusive society.
              </Text>
            </MotionBox>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Card
                radius={34}
                p={0}
                shadow="xl"
                style={{ overflow: "hidden" }}
              >
                <Image src={vimal1} h={620} fit="cover" />
              </Card>

              <Text ta="center" mt="md" c="dimmed" fs="italic">
                Empowering future generations through leadership, education, and
                community solidarity.
              </Text>
            </MotionBox>
          </Grid.Col>
        </Grid>
      </Container>

      {/* CTA SECTION */}

      <Box
        py={120}
        pos="relative"
        style={{
          background:
            "linear-gradient(135deg, #ff7b00 0%, #ff9500 50%, #ffb347 100%)",
          overflow: "hidden",
        }}
      >
        <Box
          style={{
            position: "absolute",
            top: -100,
            right: -80,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.2)",
            filter: "blur(120px)",
          }}
        />

        <Container size="lg" ta="center" pos="relative">
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Text fw={700} c="dark" mb="md">
              Leadership Starts With Courage
            </Text>

            <Title
              order={2}
              fw={900}
              c="white"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: 1.1,
              }}
            >
              Great Leaders Don’t
              <br />
              Create Followers.
              <br />
              They Create More Leaders.
            </Title>

            <Text
              size="lg"
              c="rgba(255,255,255,0.92)"
              maw={760}
              mx="auto"
              mt="xl"
              style={{ lineHeight: 1.9 }}
            >
              Join the movement to empower communities, promote dignity, and
              support future leaders working toward equality and justice.
            </Text>

            <Group justify="center" mt={40}>
              <Button
                component={Link}
                to="/Support-MSC"
                size="xl"
                radius="xl"
                color="dark"
                rightSection={<FaArrowRight size={16} />}
              >
                Support The Mission
              </Button>

              <Button
                component={Link}
                to="/Fellowship-Program-app"
                size="xl"
                radius="xl"
                variant="white"
                color="dark"
              >
                Become A Volunteer
              </Button>
            </Group>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
}
