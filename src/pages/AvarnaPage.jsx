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
} from "react-icons/fa";
// import {
//   Container,
//   Title,
//   Text,
//   Grid,
//   Card,
//   Image,
//   Stack,
//   Badge,
// } from "@mantine/core";
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
} from "@mantine/core";

import heroImg from "../assets/home/about-1.jpg";
import sectionImg from "../assets/home/about-1.jpg";

export default function AvarnaPage() {
  return (
    <div style={{ background: "#f9fafb" }}>
      {/* HERO */}
      <div style={{ position: "relative", height: "60vh" }}>
        <Image src={heroImg} h="100%" fit="cover" />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            padding: "20px",
          }}
        >
          <Stack align="center">
            <Title order={1} ta="center">
              Avarna Foundation
            </Title>
            <Text size="lg" ta="center">
              A movement for dignity, equality, and justice beyond all
              boundaries
            </Text>
          </Stack>
        </div>
      </div>

      {/* AVARNA MEANING */}
      <Container size="lg" py={80}>
        <Card radius="xl" p="xl" shadow="md" style={{ background: "#ede9fe" }}>
          <Title order={2}>What “Avarna” Means</Title>
          <Text mt="sm">
            Traditionally, “Avarna” referred to those outside rigid caste
            systems. We reclaim it as a symbol of unity, dignity, and human
            equality.
          </Text>
          <Text mt="sm">
            It represents a world beyond division—where identity is not defined
            by caste, gender, religion, or race, but by shared humanity and
            collective growth.
          </Text>
        </Card>
      </Container>

      {/* INTRO */}
      <Container size="lg" py={80}>
        <Grid align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src={sectionImg} radius="xl" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2}>Introduction</Title>
            <Text c="dimmed" mt="sm">
              Avarna Education and Training Foundation is committed to
              dismantling systemic oppression rooted in caste, race, gender,
              occupation, and religion. It stands for unity, dignity, and human
              equality.
            </Text>
            <Text c="dimmed" mt="sm">
              Avarna redefines identity beyond imposed divisions and empowers
              marginalized communities to co-create a future built on justice,
              inclusion, and collective growth.
            </Text>
          </Grid.Col>
        </Grid>
      </Container>

      {/* WHY AVARNA */}
      <Container size="lg" py={80}>
        <Card radius="xl" p="xl" shadow="md" style={{ background: "#eef2ff" }}>
          <Title order={2}>Why Avarna Was Created</Title>
          <Text mt="sm">
            Avarna emerged from MSC’s deep grassroots experience. It recognizes
            that marginalization is interconnected across caste, tribe, gender,
            and geography.
          </Text>
          <Text mt="sm">
            It was created to expand impact, build long-term systems of
            empowerment, and create a community-led platform for sustainable
            change.
          </Text>
        </Card>
      </Container>

      {/* PROBLEM */}
      <Container size="lg" py={80}>
        <Grid align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2}>Problem Statement</Title>
            <Text c="dimmed" mt="sm">
              Millions of Dalits, tribal communities, and marginalized groups
              face systemic discrimination, exclusion, and violence.
            </Text>
            <Text c="dimmed" mt="sm">
              Barriers in education, healthcare, and employment prevent full
              participation in society. Intersectional inequalities deepen this
              crisis.
            </Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src={sectionImg} radius="xl" />
          </Grid.Col>
        </Grid>
      </Container>

      {/* ACTION PLAN */}
      <Container size="lg" py={80}>
        <Title order={2} ta="center" mb={40}>
          10 Key Action Areas
        </Title>

        <Grid>
          {[
            {
              icon: <FaChalkboardTeacher color="#4f46e5" size={26} />,
              title: "Leadership Institute",
              desc: "Training grassroots leaders and strengthening community-led organizations.",
            },
            {
              icon: <FaBook color="#16a34a" size={26} />,
              title: "Community Learning Centres",
              desc: "Providing free education, digital literacy, and career guidance.",
            },
            {
              icon: <FaHandsHelping color="#f59e0b" size={26} />,
              title: "Safe Spaces",
              desc: "Creating inclusive environments for Dalit and tribal thinkers, artists, and youth.",
            },
            {
              icon: <FaUsers color="#0ea5e9" size={26} />,
              title: "Fellowship Programs",
              desc: "Mentoring and supporting emerging leaders from marginalized communities.",
            },
            {
              icon: <FaLightbulb color="#f97316" size={26} />,
              title: "Entrepreneurship",
              desc: "Helping individuals start and grow sustainable businesses.",
            },
            {
              icon: <FaNetworkWired color="#22c55e" size={26} />,
              title: "Economic Empowerment",
              desc: "Providing training, networking, and market access for financial independence.",
            },
            {
              icon: <FaHeartbeat color="#ef4444" size={26} />,
              title: "Health Initiatives",
              desc: "Improving healthcare access and spreading awareness in underserved areas.",
            },
            {
              icon: <FaGavel color="#3b82f6" size={26} />,
              title: "Policy Advocacy",
              desc: "Driving systemic reforms for equality and social justice.",
            },
            {
              icon: <FaUniversity color="#a855f7" size={26} />,
              title: "Grassroots Network",
              desc: "Building a strong ecosystem of community organizations under Avarna.",
            },
            {
              icon: <FaShieldAlt color="#14b8a6" size={26} />,
              title: "Comprehensive Support",
              desc: "Integrating education, health, and economic programs for lasting impact.",
            },
          ].map((item, i) => (
            <Grid.Col key={i} span={{ base: 12, sm: 6, md: 4 }}>
              <Card
                radius="xl"
                p="lg"
                shadow="md"
                style={{
                  height: "100%",
                  transition: "0.3s",
                }}
              >
                <Stack align="center" gap="sm">
                  {item.icon}

                  <Text fw={700} ta="center">
                    {item.title}
                  </Text>

                  <Text size="sm" c="dimmed" ta="center">
                    {item.desc}
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* VISION MISSION */}
      <Container size="lg" py={80}>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card p="xl" radius="xl" style={{ background: "#ecfeff" }}>
              <Badge>Vision</Badge>
              <Text mt="sm">
                A world where every individual lives with dignity, equality, and
                freedom beyond caste and discrimination.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card p="xl" radius="xl" style={{ background: "#fef9c3" }}>
              <Badge>Mission</Badge>
              <Text mt="sm">
                Empower marginalized communities through education, leadership,
                and economic empowerment.
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>

      {/* LEGAL */}
      <Container size="lg" py={80}>
        <Title order={2} ta="center" mb={30}>
          Legal & Compliance
        </Title>
        <Grid>
          {["12A Registered", "80G Certified", "CSR-1 Eligible"].map(
            (item, i) => (
              <Grid.Col key={i} span={{ base: 12, md: 4 }}>
                <Card
                  radius="xl"
                  p="lg"
                  shadow="md"
                  style={{ textAlign: "center", background: "#ecfeff" }}
                >
                  <Text fw={600}>{item}</Text>
                </Card>
              </Grid.Col>
            )
          )}
        </Grid>
      </Container>
      {/* FOUNDER */}
      <Container size="lg" py={80}>
        <Card
          radius="xl"
          p="xl"
          shadow="lg"
          style={{ background: "#111827", color: "white" }}
        >
          <Text size="lg">
            “Avarna was born from lived experience and a deep conviction to
            create a just and equal society. It is a platform for voices that
            were once silenced.”
          </Text>
          <Text mt="sm" c="gray">
            — Dr. Vimal Kumar
          </Text>
        </Card>
      </Container>

      {/* CONCLUSION CTA */}
      <Container size="lg" py={80}>
        <Card
          radius="xl"
          p="xl"
          shadow="lg"
          style={{ textAlign: "center", background: "#4f46e5", color: "white" }}
        >
          <Title order={2}>Be Part of the Change</Title>
          <Text mt="sm">
            Avarna is more than an initiative—it is a movement for justice,
            dignity, and equality.
          </Text>
          <Button mt={20} radius="xl" color="dark">
            Join the Movement
          </Button>
        </Card>
      </Container>
    </div>
  );
}
