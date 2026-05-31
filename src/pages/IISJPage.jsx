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
  Progress,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Timeline,
  Title,
  Divider,
} from "@mantine/core";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaBookOpen,
  FaUsers,
  FaGavel,
  FaLightbulb,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaHandshake,
  FaBalanceScale,
  FaMapMarkerAlt,
} from "react-icons/fa";

import heroImg from "../assets/home/heroHome3.webp";
import introImg from "../assets/pages/introiisj.webp";

import g1 from "../assets/home/homeHero1.webp";
import g2 from "../assets/home/homeHero1.webp";
import g3 from "../assets/home/homeHero1.webp";
import g4 from "../assets/home/homeHero1.webp";

function IISJPage() {
  const scopeData = [
    {
      icon: <FaChalkboardTeacher size={24} />,
      title: "Residential Training Programs",
      desc: "Leadership fellowships, social entrepreneurship training, and public advocacy programs for youth from disadvantaged communities.",
    },

    {
      icon: <FaBookOpen size={24} />,
      title: "Community Education",
      desc: "Tuition support, literacy programs, digital education, financial literacy, and awareness initiatives at grassroots level.",
    },

    {
      icon: <FaGraduationCap size={24} />,
      title: "Scholarships & Fellowships",
      desc: "Merit and need-based educational scholarships and fellowships supporting civic leadership and social innovation.",
    },

    {
      icon: <FaUsers size={24} />,
      title: "Mentorship & Capacity Building",
      desc: "One-on-one mentoring, governance exposure, NGO collaborations, and community leadership development.",
    },

    {
      icon: <FaGavel size={24} />,
      title: "Advocacy & Research",
      desc: "Localized campaigns on rights, constitutional values, inclusion, and policy-focused grassroots research.",
    },

    {
      icon: <FaLightbulb size={24} />,
      title: "Leadership Incubation",
      desc: "Building socially conscious youth leaders equipped with civic awareness, problem-solving, and community organizing skills.",
    },
  ];

  const stats = [
    {
      number: "100+",
      label: "Youth Leaders",
    },

    {
      number: "200+",
      label: "Scholarships",
    },

    {
      number: "2000+",
      label: "Community Members Reached",
    },

    {
      number: "1",
      label: "Training Hub in Assam",
    },
  ];

  const gallery = [g1, g2, g3, g4];

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
          w="100%"
          fit="cover"
          style={{
            position: "absolute",
            inset: 0,
          }}
        />

        {/* OVERLAY */}

        <Overlay
          color="#000"
          opacity={0.72}
          zIndex={1}
        />

        {/* ORANGE GLOW */}

        <Box
          style={{
            position: "absolute",
            width: "550px",
            height: "550px",
            borderRadius: "100%",
            background: "rgba(255,123,0,0.18)",
            filter: "blur(120px)",
            top: "-120px",
            right: "-120px",
            zIndex: 2,
          }}
        />

        {/* CONTENT */}

        <Container
          size="xl"
          style={{
            position: "relative",
            zIndex: 5,
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            paddingTop: "120px",
            paddingBottom: "100px",
          }}
        >
          <Grid
            align="center"
            gutter={50}
          >
            {/* LEFT */}

            <Grid.Col span={{ base: 12, lg: 7 }}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Paper
                  radius="36px"
                  p="clamp(28px,5vw,50px)"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(14px)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <Group mb="md">
                    <ThemeIcon
                      size={58}
                      radius="xl"
                      variant="light"
                      color="orange"
                    >
                      <FaBalanceScale size={24} />
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
                      International Institute for Social Justice
                    </Text>
                  </Group>

                  <Title
                    c="white"
                    style={{
                      fontSize: "clamp(42px,7vw,82px)",
                      lineHeight: 1.05,
                    }}
                  >
                    Empowering
                    <br />
                    Communities Through
                    <br />
                    Education & Leadership
                  </Title>

                  <Text
                    c="rgba(255,255,255,0.78)"
                    mt={30}
                    maw={700}
                    style={{
                      lineHeight: 1.9,
                      fontSize: "clamp(15px,2vw,19px)",
                    }}
                  >
                    IISJ is a mission-driven nonprofit committed to nurturing
                    socially conscious leadership, uplifting marginalized
                    communities, and advancing equity through education,
                    training, mentorship, and advocacy.
                  </Text>

                  <Group
                    mt={35}
                    gap="md"
                    wrap="wrap"
                  >
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
                      Join The Movement
                    </Button>

                    <Button
                      size="lg"
                      radius="xl"
                      variant="white"
                      color="dark"
                      component={Link}
                      to="/Fellowship-Program-app"
                    >
                      Apply For Fellowship
                    </Button>
                  </Group>
                </Paper>
              </motion.div>
            </Grid.Col>

            {/* RIGHT */}

            <Grid.Col span={{ base: 12, lg: 5 }}>
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Stack gap="lg">
                  {[
                    "Leadership Development",
                    "Grassroots Education",
                    "Youth Empowerment",
                    "Women Leadership",
                    "Community Advocacy",
                  ].map((item, index) => (
                    <Card
                      key={index}
                      radius="24px"
                      p="lg"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <Group justify="space-between">
                        <Text
                          c="white"
                          fw={600}
                        >
                          {item}
                        </Text>

                        <Text
                          c="#ff9d3d"
                          fw={700}
                        >
                          {90 - index * 5}%
                        </Text>
                      </Group>

                      <Progress
                        value={90 - index * 5}
                        color="orange"
                        radius="xl"
                        size="lg"
                        mt="sm"
                      />
                    </Card>
                  ))}
                </Stack>
              </motion.div>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* INTRO SECTION */}

      <Container
        size="xl"
        py={120}
      >
        <Grid
          align="center"
          gutter={60}
        >
          {/* IMAGE */}

          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box
                style={{
                  position: "relative",
                }}
              >
                <Image
                  src={introImg}
                  radius="36px"
                  h={600}
                  fit="cover"
                />

                <Card
                  radius="28px"
                  p="lg"
                  style={{
                    position: "absolute",
                    bottom: 25,
                    left: 25,
                    background: "rgba(7,17,32,0.92)",
                    backdropFilter: "blur(12px)",
                    maxWidth: "280px",
                  }}
                >
                  <Text
                    c="#ff9d3d"
                    fw={700}
                    size="sm"
                    tt="uppercase"
                  >
                    Our Vision
                  </Text>

                  <Text
                    c="white"
                    mt={10}
                    style={{
                      lineHeight: 1.8,
                    }}
                  >
                    A just and inclusive society where every individual has the
                    tools, knowledge, and voice to thrive.
                  </Text>
                </Card>
              </Box>
            </motion.div>
          </Grid.Col>

          {/* CONTENT */}

          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Text
                c="orange"
                fw={700}
                tt="uppercase"
                mb={12}
                size="sm"
              >
                Executive Summary
              </Text>

              <Title
                style={{
                  fontSize: "clamp(34px,5vw,60px)",
                  lineHeight: 1.1,
                }}
              >
                Creating Community-Led
                <br />
                Social Transformation
              </Title>

              <Text
                c="dimmed"
                mt={25}
                style={{
                  lineHeight: 1.9,
                }}
              >
                The International Institute for Social Justice (IISJ) is a
                grassroots nonprofit dedicated to building equitable societies
                through education, leadership development, and advocacy.
              </Text>

              <Text
                c="dimmed"
                mt="md"
                style={{
                  lineHeight: 1.9,
                }}
              >
                Guided by values of inclusion, dignity, and sustainability, IISJ
                empowers women, youth, and underserved populations to become
                changemakers within their own communities.
              </Text>

              <Text
                c="dimmed"
                mt="md"
                style={{
                  lineHeight: 1.9,
                }}
              >
                Founded by social sector leaders and educators, IISJ combines
                deep local knowledge with scalable impact strategies to nurture
                leadership rooted in justice and equality.
              </Text>

              <Group
                mt={35}
                gap="xl"
              >
                <Box>
                  <Title order={2}>3+</Title>

                  <Text c="dimmed">Years Vision</Text>
                </Box>

                <Divider orientation="vertical" />

                <Box>
                  <Title order={2}>2000+</Title>

                  <Text c="dimmed">People Reached</Text>
                </Box>

                <Divider orientation="vertical" />

                <Box>
                  <Title order={2}>100+</Title>

                  <Text c="dimmed">Future Leaders</Text>
                </Box>
              </Group>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>

      {/* STATS */}

      <Box
        py={100}
        style={{
          background:
            "linear-gradient(135deg, #071120 0%, #0f172a 100%)",
        }}
      >
        <Container size="xl">
          <SimpleGrid
            cols={{ base: 2, md: 4 }}
            spacing="xl"
          >
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
              >
                <Card
                  radius="28px"
                  p="xl"
                  ta="center"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <Title
                    c="#ff9d3d"
                    style={{
                      fontSize: "clamp(34px,5vw,58px)",
                    }}
                  >
                    {item.number}
                  </Title>

                  <Text
                    c="rgba(255,255,255,0.72)"
                    mt={10}
                  >
                    {item.label}
                  </Text>
                </Card>
              </motion.div>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* WHY THIS WORK MATTERS */}

      <Container
        size="xl"
        py={120}
      >
        <Grid
          align="center"
          gutter={60}
        >
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text
              c="orange"
              fw={700}
              tt="uppercase"
              mb={12}
            >
              Why This Work Matters
            </Text>

            <Title
              style={{
                fontSize: "clamp(34px,5vw,58px)",
                lineHeight: 1.1,
              }}
            >
              Addressing Inequality
              <br />
              Through Education &
              <br />
              Leadership
            </Title>

            <Text
              c="dimmed"
              mt={25}
              style={{
                lineHeight: 1.9,
              }}
            >
              Millions of individuals in underserved regions continue to face
              systemic exclusion from educational opportunities, vocational
              guidance, leadership spaces, and civic participation.
            </Text>

            <Text
              c="dimmed"
              mt="md"
              style={{
                lineHeight: 1.9,
              }}
            >
              Rural youth often discontinue education due to financial barriers,
              while women remain underrepresented in decision-making and public
              leadership roles.
            </Text>

            <Text
              c="dimmed"
              mt="md"
              style={{
                lineHeight: 1.9,
              }}
            >
              IISJ was created to bridge these gaps by fostering learning,
              empowerment, mentorship, and grassroots advocacy.
            </Text>
          </Grid.Col>

          {/* TIMELINE */}

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Timeline
              active={4}
              bulletSize={34}
              lineWidth={3}
              color="orange"
            >
              <Timeline.Item
                title="Educational Inequality"
              >
                <Text
                  c="dimmed"
                  size="sm"
                >
                  Lack of access to quality education and tuition support.
                </Text>
              </Timeline.Item>

              <Timeline.Item
                title="Youth Disempowerment"
              >
                <Text
                  c="dimmed"
                  size="sm"
                >
                  Young people lack opportunities for civic leadership.
                </Text>
              </Timeline.Item>

              <Timeline.Item
                title="Women Leadership Gap"
              >
                <Text
                  c="dimmed"
                  size="sm"
                >
                  Women remain excluded from decision-making spaces.
                </Text>
              </Timeline.Item>

              <Timeline.Item
                title="Community Transformation"
              >
                <Text
                  c="dimmed"
                  size="sm"
                >
                  Building sustainable and community-led solutions.
                </Text>
              </Timeline.Item>
            </Timeline>
          </Grid.Col>
        </Grid>
      </Container>

      {/* SCOPE OF WORK */}

      <Box
        py={120}
        style={{
          background: "#ffffff",
        }}
      >
        <Container size="xl">
          <Box
            ta="center"
            mb={70}
          >
            <Text
              c="orange"
              fw={700}
              tt="uppercase"
              mb={10}
              size="sm"
            >
              Scope Of Work
            </Text>

            <Title
              style={{
                fontSize: "clamp(34px,5vw,60px)",
              }}
            >
              Building Impact Through
              <br />
              Grassroots Action
            </Title>

            <Text
              c="dimmed"
              mt={20}
              maw={780}
              mx="auto"
              style={{
                lineHeight: 1.8,
              }}
            >
              IISJ focuses on leadership, education, scholarships, mentorship,
              advocacy, and community empowerment programs that create
              sustainable social transformation.
            </Text>
          </Box>

          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 3 }}
            spacing="xl"
          >
            {scopeData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
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
                    height: "100%",
                    background: "#fff",
                    border: "1px solid #eee",
                    transition: "0.35s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-10px)";

                    e.currentTarget.style.boxShadow =
                      "0 20px 50px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(0px)";

                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <ThemeIcon
                    size={70}
                    radius="xl"
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
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* TRAINING CENTER */}

      <Container
        size="xl"
        py={120}
      >
        <Card
          radius="40px"
          p="clamp(30px,5vw,70px)"
          style={{
            background:
              "linear-gradient(135deg, #071120 0%, #0f172a 100%)",

            overflow: "hidden",

            position: "relative",
          }}
        >
          <Box
            style={{
              position: "absolute",
              width: "450px",
              height: "450px",
              background: "rgba(255,123,0,0.18)",
              borderRadius: "100%",
              filter: "blur(120px)",
              top: "-140px",
              right: "-120px",
            }}
          />

          <Grid align="center">
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Text
                c="#ff9d3d"
                fw={700}
                tt="uppercase"
                mb={15}
              >
                Bongaigaon Training Center
              </Text>

              <Title
                c="white"
                style={{
                  fontSize: "clamp(34px,5vw,60px)",
                  lineHeight: 1.1,
                }}
              >
                A Hub Of Hope,
                <br />
                Leadership &
                <br />
                Community Learning
              </Title>

              <Text
                c="rgba(255,255,255,0.76)"
                mt={25}
                style={{
                  lineHeight: 1.9,
                }}
              >
                The upcoming residential training center in Bongaigaon, Assam,
                will serve as a dedicated leadership and education hub for youth
                leaders, grassroots activists, and underserved communities.
              </Text>

              <Group
                mt={30}
                gap="lg"
              >
                <Group gap="xs">
                  <FaMapMarkerAlt color="#ff9d3d" />

                  <Text c="white">Bongaigaon, Assam</Text>
                </Group>

                <Group gap="xs">
                  <FaUsers color="#ff9d3d" />

                  <Text c="white">100+ Youth Leaders</Text>
                </Group>
              </Group>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 5 }}>
              <Stack gap="lg">
                {[
                  "Leadership Fellowships",
                  "Community Innovation",
                  "Advocacy Training",
                  "Scholarship Support",
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
                        radius="xl"
                        color="orange"
                        variant="light"
                      >
                        <FaHandshake size={15} />
                      </ThemeIcon>

                      <Text c="white">{item}</Text>
                    </Group>
                  </Paper>
                ))}
              </Stack>
            </Grid.Col>
          </Grid>
        </Card>
      </Container>

      {/* GALLERY */}

      <Container
        size="xl"
        py={40}
      >
        <Box
          ta="center"
          mb={60}
        >
          <Text
            c="orange"
            fw={700}
            tt="uppercase"
            mb={10}
          >
            Gallery
          </Text>

          <Title
            style={{
              fontSize: "clamp(32px,5vw,58px)",
            }}
          >
            Moments Of Leadership,
            <br />
            Learning & Community
          </Title>
        </Box>

        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 4 }}
          spacing="xl"
        >
          {gallery.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.03,
              }}
            >
              <Image
                src={img}
                radius="32px"
                h={320}
                fit="cover"
              />
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>

      {/* VIDEO SECTION */}

      <Container
        size="xl"
        py={120}
      >
        <Grid
          align="center"
          gutter={60}
        >
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text
              c="orange"
              fw={700}
              tt="uppercase"
              mb={12}
            >
              Impact In Action
            </Text>

            <Title
              style={{
                fontSize: "clamp(34px,5vw,60px)",
                lineHeight: 1.1,
              }}
            >
              Stories Of
              <br />
              Leadership &
              <br />
              Transformation
            </Title>

            <Text
              c="dimmed"
              mt={25}
              style={{
                lineHeight: 1.9,
              }}
            >
              IISJ programs create meaningful change by empowering individuals
              to become leaders, advocates, and changemakers within their own
              communities.
            </Text>

            <Text
              c="dimmed"
              mt="md"
              style={{
                lineHeight: 1.9,
              }}
            >
              Through education, grassroots engagement, mentorship, and civic
              participation, IISJ is building a future rooted in justice,
              dignity, and equality.
            </Text>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
                borderRadius: "30px",
                boxShadow: "0 25px 60px rgba(0,0,0,0.12)",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/szoHB8dpaMs"
                title="IISJ Video"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
              />
            </Box>
          </Grid.Col>
        </Grid>
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

            position: "relative",

            overflow: "hidden",
          }}
        >
          <Box
            style={{
              position: "absolute",
              width: "450px",
              height: "450px",
              borderRadius: "100%",
              background: "rgba(255,255,255,0.15)",
              filter: "blur(120px)",
              top: "-150px",
              right: "-120px",
            }}
          />

          <Grid align="center">
            <Grid.Col span={{ base: 12, md: 8 }}>
              <Text
                c="white"
                fw={700}
                tt="uppercase"
                mb={15}
                size="sm"
              >
                Join The Movement
              </Text>

              <Title
                c="white"
                style={{
                  fontSize: "clamp(34px,5vw,64px)",
                  lineHeight: 1.1,
                }}
              >
                Help Build A More
                <br />
                Just & Inclusive Future
              </Title>

              <Text
                c="rgba(255,255,255,0.88)"
                mt={20}
                maw={720}
                style={{
                  lineHeight: 1.9,
                }}
              >
                Partner with IISJ to support education, leadership, fellowships,
                scholarships, and grassroots social justice initiatives across
                underserved communities.
              </Text>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack align="flex-start">
                <Button
                  size="xl"
                  radius="xl"
                  component={Link}
                  to="/contact"
                  color="dark"
                  rightSection={<FaArrowRight size={15} />}
                >
                  Get Involved
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
              </Stack>
            </Grid.Col>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
}

export default IISJPage;