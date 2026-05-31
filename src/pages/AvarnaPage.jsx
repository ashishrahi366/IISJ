import {
  Container,
  Title,
  Text,
  Grid,
  Card,
  Image,
  Stack,
  Badge,
  Button,
  Box,
  Group,
  Overlay,
  ThemeIcon,
  Paper,
  Divider,
  List,
} from "@mantine/core";

import { motion } from "framer-motion";

import {
  FaUsers,
  FaBook,
  FaLightbulb,
  FaGavel,
  FaHeartbeat,
  FaChalkboardTeacher,
  FaHandsHelping,
  FaUniversity,
  FaNetworkWired,
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle,
  FaGlobe,
  FaBalanceScale,
  FaGraduationCap,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import heroImg from "../assets/home/heroHome2.webp";
import sectionImg from "../assets/home/leader2.webp";

const actionAreas = [
  {
    icon: <FaChalkboardTeacher size={28} />,
    title: "Leadership Institute",
    desc: "Training grassroots leaders and strengthening community-led organizations.",
  },

  {
    icon: <FaBook size={28} />,
    title: "Community Learning Centres",
    desc: "Providing free education, digital literacy, and career guidance.",
  },

  {
    icon: <FaHandsHelping size={28} />,
    title: "Safe Community Spaces",
    desc: "Creating inclusive environments for youth, artists, and marginalized voices.",
  },

  {
    icon: <FaUsers size={28} />,
    title: "Fellowship Programs",
    desc: "Mentoring and supporting emerging leaders from marginalized communities.",
  },

  {
    icon: <FaLightbulb size={28} />,
    title: "Entrepreneurship",
    desc: "Helping individuals start and grow sustainable businesses.",
  },

  {
    icon: <FaNetworkWired size={28} />,
    title: "Economic Empowerment",
    desc: "Providing training, networking, and financial independence opportunities.",
  },

  {
    icon: <FaHeartbeat size={28} />,
    title: "Health Initiatives",
    desc: "Improving healthcare access and awareness in underserved communities.",
  },

  {
    icon: <FaGavel size={28} />,
    title: "Policy Advocacy",
    desc: "Driving reforms and campaigns for equality and social justice.",
  },

  {
    icon: <FaUniversity size={28} />,
    title: "Grassroots Network",
    desc: "Building strong community-based partnerships across regions.",
  },
];

const stats = [
  {
    number: "10+",
    label: "Action Areas",
  },

  {
    number: "5000+",
    label: "Lives Reached",
  },

  {
    number: "100+",
    label: "Grassroots Leaders",
  },

  {
    number: "25+",
    label: "Community Programs",
  },
];

function AvarnaPage() {
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
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <Image
          src={heroImg}
          h="100%"
          fit="cover"
          style={{
            position: "absolute",
            inset: 0,
          }}
        />

        <Overlay
          color="#000"
          opacity={0.68}
          zIndex={1}
        />

        {/* GRADIENT GLOW */}

        <Box
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "100%",
            background: "rgba(255,123,0,0.18)",
            filter: "blur(120px)",
            top: "-120px",
            right: "-150px",
            zIndex: 2,
          }}
        />

        <Container
          size="xl"
          style={{
            position: "relative",
            zIndex: 5,
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ width: "100%" }}
          >
            <Paper
              radius="36px"
              p="clamp(24px,5vw,60px)"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,0.12)",
                maxWidth: "850px",
              }}
            >
              <Badge
                size="lg"
                radius="xl"
                variant="light"
                color="orange"
                mb="xl"
              >
                Avarna Education & Training Foundation
              </Badge>

              <Title
                c="white"
                style={{
                  fontSize: "clamp(42px,7vw,88px)",
                  lineHeight: 1.02,
                  fontWeight: 900,
                }}
              >
                Beyond
                <br />
                Boundaries.
              </Title>

              <Text
                c="rgba(255,255,255,0.78)"
                mt={30}
                maw={720}
                style={{
                  fontSize: "clamp(16px,2vw,21px)",
                  lineHeight: 1.9,
                }}
              >
                Avarna is a movement for dignity, equality, and collective
                empowerment beyond caste, gender, religion, and social
                exclusion. We build leadership, education, advocacy, and
                community-driven systems for lasting social transformation.
              </Text>

              <Group
                mt={40}
                gap="md"
                wrap="wrap"
              >
                <Button
                  size="xl"
                  radius="xl"
                  component={Link}
                  to="/contact"
                  rightSection={<FaArrowRight size={14} />}
                  style={{
                    background:
                      "linear-gradient(135deg, #ff7b00 0%, #ff9d3d 100%)",

                    boxShadow: "0 18px 45px rgba(255,123,0,0.35)",
                  }}
                >
                  Join The Movement
                </Button>

                <Button
                  size="xl"
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

      {/* WHAT IS AVARNA */}

      <Container
        size="xl"
        py={120}
      >
        <Grid
          gutter={60}
          align="center"
        >
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Image
                src={sectionImg}
                radius="36px"
              />
            </motion.div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Badge
                color="orange"
                variant="light"
                size="lg"
                radius="xl"
                mb="lg"
              >
                What “Avarna” Means
              </Badge>

              <Title
                style={{
                  fontSize: "clamp(32px,5vw,58px)",
                  lineHeight: 1.1,
                }}
              >
                Reclaiming Identity
                <br />
                Beyond Division
              </Title>

              <Text
                c="dimmed"
                mt={25}
                style={{
                  lineHeight: 1.9,
                  fontSize: "17px",
                }}
              >
                Traditionally, “Avarna” referred to people excluded from rigid
                caste systems. Today, we reclaim the term as a symbol of
                equality, unity, dignity, and liberation.
              </Text>

              <Text
                c="dimmed"
                mt="md"
                style={{
                  lineHeight: 1.9,
                  fontSize: "17px",
                }}
              >
                Avarna stands for a future where identity is not shaped by
                oppression, discrimination, or hierarchy — but by shared
                humanity, leadership, and collective progress.
              </Text>

              <List
                mt={30}
                spacing="md"
                icon={
                  <ThemeIcon
                    color="orange"
                    radius="xl"
                    size={24}
                  >
                    <FaCheckCircle size={12} />
                  </ThemeIcon>
                }
              >
                <List.Item>Dignity beyond caste and exclusion</List.Item>

                <List.Item>Education and leadership for all</List.Item>

                <List.Item>Grassroots empowerment and justice</List.Item>

                <List.Item>Community-led sustainable transformation</List.Item>
              </List>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>

      {/* STATS */}

      <Container
        size="xl"
        pb={120}
      >
        <Grid gutter="xl">
          {stats.map((item, index) => (
            <Grid.Col
              key={index}
              span={{ base: 6, md: 3 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <Card
                  radius="32px"
                  p="xl"
                  style={{
                    background: "white",
                    border: "1px solid #eee",
                    textAlign: "center",
                    height: "100%",
                  }}
                >
                  <Title
                    style={{
                      fontSize: "clamp(34px,5vw,58px)",
                    }}
                  >
                    {item.number}
                  </Title>

                  <Text
                    c="dimmed"
                    mt="sm"
                  >
                    {item.label}
                  </Text>
                </Card>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* WHY AVARNA */}

      <Container
        size="xl"
        pb={120}
      >
        <Card
          radius="40px"
          p="clamp(30px,5vw,70px)"
          style={{
            background:
              "linear-gradient(135deg, #0f172a 0%, #111827 100%)",

            color: "white",

            overflow: "hidden",

            position: "relative",
          }}
        >
          <Box
            style={{
              position: "absolute",
              width: "450px",
              height: "450px",
              borderRadius: "100%",
              background: "rgba(255,123,0,0.15)",
              filter: "blur(120px)",
              top: "-120px",
              right: "-100px",
            }}
          />

          <Grid align="center">
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Badge
                color="orange"
                variant="filled"
                size="lg"
                radius="xl"
                mb="lg"
              >
                Why Avarna Was Created
              </Badge>

              <Title
                c="white"
                style={{
                  fontSize: "clamp(34px,5vw,60px)",
                  lineHeight: 1.1,
                }}
              >
                From Grassroots
                <br />
                Experience To
                <br />
                Collective Action
              </Title>

              <Text
                c="rgba(255,255,255,0.78)"
                mt={30}
                maw={720}
                style={{
                  lineHeight: 1.9,
                }}
              >
                Avarna emerged from years of grassroots engagement through MSC
                and community-led activism. It recognizes that exclusion and
                marginalization are deeply interconnected across caste, tribe,
                gender, occupation, and geography.
              </Text>

              <Text
                c="rgba(255,255,255,0.78)"
                mt="md"
                maw={720}
                style={{
                  lineHeight: 1.9,
                }}
              >
                The foundation was created to expand impact, strengthen
                leadership ecosystems, and create long-term structures for
                education, dignity, justice, and economic empowerment.
              </Text>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 5 }}>
              <Stack gap="lg">
                {[
                  "Grassroots leadership development",
                  "Community-owned transformation",
                  "Education and economic empowerment",
                  "Social justice and policy advocacy",
                ].map((item, index) => (
                  <Paper
                    key={index}
                    radius="24px"
                    p="lg"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <Group>
                      <ThemeIcon
                        size={50}
                        radius="xl"
                        color="orange"
                      >
                        <FaCheckCircle size={18} />
                      </ThemeIcon>

                      <Text
                        c="white"
                        fw={600}
                      >
                        {item}
                      </Text>
                    </Group>
                  </Paper>
                ))}
              </Stack>
            </Grid.Col>
          </Grid>
        </Card>
      </Container>

      {/* ACTION AREAS */}

      <Container
        size="xl"
        pb={120}
      >
        <Box
          ta="center"
          mb={70}
        >
          <Badge
            size="lg"
            radius="xl"
            color="orange"
            variant="light"
            mb="lg"
          >
            10 Key Action Areas
          </Badge>

          <Title
            style={{
              fontSize: "clamp(34px,5vw,60px)",
            }}
          >
            Building Systems
            <br />
            Of Long-Term Change
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
            Avarna combines education, leadership, advocacy, healthcare,
            entrepreneurship, and grassroots organizing into one integrated
            movement for justice and empowerment.
          </Text>
        </Box>

        <Grid gutter="xl">
          {actionAreas.map((item, index) => (
            <Grid.Col
              key={index}
              span={{ base: 12, sm: 6, lg: 4 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
              >
                <Card
                  radius="32px"
                  p="xl"
                  style={{
                    height: "100%",
                    background: "white",
                    border: "1px solid #eee",
                    transition: "0.35s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0 25px 60px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(0px)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <ThemeIcon
                    size={70}
                    radius="24px"
                    mb="lg"
                    style={{
                      background:
                        "linear-gradient(135deg, #ff7b00 0%, #ff9d3d 100%)",
                    }}
                  >
                    {item.icon}
                  </ThemeIcon>

                  <Title
                    order={3}
                    mb="md"
                  >
                    {item.title}
                  </Title>

                  <Text
                    c="dimmed"
                    style={{
                      lineHeight: 1.9,
                    }}
                  >
                    {item.desc}
                  </Text>
                </Card>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* VISION & MISSION */}

      <Container
        size="xl"
        pb={120}
      >
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card
              radius="36px"
              p="clamp(28px,4vw,50px)"
              style={{
                background: "#eff6ff",
                height: "100%",
              }}
            >
              <ThemeIcon
                size={70}
                radius="24px"
                color="blue"
                mb="xl"
              >
                <FaGlobe size={28} />
              </ThemeIcon>

              <Badge
                color="blue"
                variant="light"
                mb="lg"
              >
                Our Vision
              </Badge>

              <Title order={2}>
                A World Beyond
                <br />
                Discrimination
              </Title>

              <Text
                mt={25}
                c="dimmed"
                style={{
                  lineHeight: 1.9,
                }}
              >
                Avarna envisions a society where every individual lives with
                dignity, equality, freedom, and opportunity beyond caste,
                religion, gender, race, or occupation.
              </Text>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card
              radius="36px"
              p="clamp(28px,4vw,50px)"
              style={{
                background: "#fff7ed",
                height: "100%",
              }}
            >
              <ThemeIcon
                size={70}
                radius="24px"
                color="orange"
                mb="xl"
              >
                <FaBalanceScale size={28} />
              </ThemeIcon>

              <Badge
                color="orange"
                variant="light"
                mb="lg"
              >
                Our Mission
              </Badge>

              <Title order={2}>
                Empowering Communities
                <br />
                Through Action
              </Title>

              <Text
                mt={25}
                c="dimmed"
                style={{
                  lineHeight: 1.9,
                }}
              >
                We empower marginalized communities through education,
                leadership development, advocacy, entrepreneurship, health
                initiatives, and grassroots organizing for long-term social
                transformation.
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>

      {/* LEGAL */}

      <Container
        size="xl"
        pb={120}
      >
        <Box
          ta="center"
          mb={50}
        >
          <Badge
            color="green"
            variant="light"
            size="lg"
            radius="xl"
            mb="lg"
          >
            Legal & Compliance
          </Badge>

          <Title
            style={{
              fontSize: "clamp(30px,5vw,54px)",
            }}
          >
            Transparent &
            <br />
            Accountable Operations
          </Title>
        </Box>

        <Grid gutter="xl">
          {[
            "12A Registered",
            "80G Certified",
            "CSR-1 Eligible",
          ].map((item, index) => (
            <Grid.Col
              key={index}
              span={{ base: 12, md: 4 }}
            >
              <Card
                radius="28px"
                p="xl"
                style={{
                  background: "white",
                  textAlign: "center",
                  border: "1px solid #eee",
                }}
              >
                <ThemeIcon
                  size={70}
                  radius="100%"
                  color="green"
                  mx="auto"
                  mb="lg"
                >
                  <FaShieldAlt size={28} />
                </ThemeIcon>

                <Text
                  fw={700}
                  size="lg"
                >
                  {item}
                </Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* FOUNDER MESSAGE */}

      <Container
        size="xl"
        pb={120}
      >
        <Card
          radius="40px"
          p="clamp(30px,5vw,70px)"
          style={{
            background:
              "linear-gradient(135deg, #111827 0%, #1f2937 100%)",

            color: "white",

            position: "relative",

            overflow: "hidden",
          }}
        >
          <Box
            style={{
              position: "absolute",
              width: "450px",
              height: "450px",
              background: "rgba(255,123,0,0.18)",
              filter: "blur(120px)",
              borderRadius: "100%",
              top: "-150px",
              right: "-100px",
            }}
          />

          <Grid align="center">
            <Grid.Col span={{ base: 12, md: 8 }}>
              <Badge
                color="orange"
                variant="filled"
                size="lg"
                radius="xl"
                mb="lg"
              >
                Founder’s Vision
              </Badge>

              <Title
                c="white"
                style={{
                  fontSize: "clamp(34px,5vw,58px)",
                  lineHeight: 1.15,
                }}
              >
                “Avarna Was Born
                <br />
                From Lived Experience”
              </Title>

              <Text
                c="rgba(255,255,255,0.8)"
                mt={30}
                maw={760}
                style={{
                  lineHeight: 2,
                  fontSize: "17px",
                }}
              >
                “Avarna was born from lived experience and a deep conviction to
                create a just and equal society. It is a platform for voices
                that were once silenced — and a movement for people to reclaim
                dignity, leadership, and opportunity.”
              </Text>

              <Divider
                my="xl"
                color="rgba(255,255,255,0.1)"
              />

              <Group>
                <ThemeIcon
                  size={65}
                  radius="100%"
                  style={{
                    background:
                      "linear-gradient(135deg, #ff7b00 0%, #ff9d3d 100%)",
                  }}
                >
                  <FaGraduationCap size={26} />
                </ThemeIcon>

                <div>
                  <Text
                    fw={700}
                    c="white"
                    size="lg"
                  >
                    Dr. Vimal Kumar
                  </Text>

                  <Text c="rgba(255,255,255,0.65)">
                    Founder & Social Justice Leader
                  </Text>
                </div>
              </Group>
            </Grid.Col>
          </Grid>
        </Card>
      </Container>

      {/* CTA */}

      <Container
        size="xl"
        pb={120}
      >
        <Card
          radius="40px"
          p="clamp(30px,5vw,70px)"
          style={{
            background:
              "linear-gradient(135deg, #ff7b00 0%, #ff9d3d 100%)",

            textAlign: "center",

            color: "white",

            overflow: "hidden",

            position: "relative",
          }}
        >
          <Box
            style={{
              position: "absolute",
              width: "500px",
              height: "500px",
              borderRadius: "100%",
              background: "rgba(255,255,255,0.1)",
              filter: "blur(120px)",
              top: "-200px",
              right: "-150px",
            }}
          />

          <Title
            style={{
              fontSize: "clamp(38px,6vw,72px)",
              lineHeight: 1.05,
            }}
          >
            Be Part Of
            <br />
            The Change
          </Title>

          <Text
            mt={25}
            maw={760}
            mx="auto"
            style={{
              lineHeight: 1.9,
              fontSize: "18px",
            }}
          >
            Avarna is more than an organization — it is a movement for dignity,
            equality, justice, and collective transformation. Join us in
            building a future beyond exclusion and discrimination.
          </Text>

          <Group
            justify="center"
            mt={40}
            gap="md"
            wrap="wrap"
          >
            <Button
              size="xl"
              radius="xl"
              variant="white"
              color="dark"
              component={Link}
              to="/contact"
              rightSection={<FaArrowRight size={14} />}
            >
              Join The Movement
            </Button>

            <Button
              size="xl"
              radius="xl"
              variant="outline"
              color="white"
              component={Link}
              to="/Support-MSC"
            >
              Support Avarna
            </Button>
          </Group>
        </Card>
      </Container>
    </Box>
  );
}

export default AvarnaPage;