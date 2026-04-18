import React from "react";
import {
  Container,
  Title,
  Text,
  Grid,
  Card,
  Image,
  Stack,
  Group,
  Badge,
  Button,
} from "@mantine/core";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaBook,
  FaLightbulb,
  FaGavel,
  FaAward,
} from "react-icons/fa";

import heroImg from "../assets/MSC/MSC_Back.jpg";
import problemImg from "../assets/home/about-1.jpg";
import projectImg from "../assets/home/about-1.jpg";
import g1 from "../assets/home/about-1.jpg";
import g2 from "../assets/home/about-1.jpg";
import g3 from "../assets/home/about-1.jpg";
import g4 from "../assets/home/about-1.jpg";

export default function MSCPage() {
  return (
    <div>
      {/* HERO */}
      <div style={{ position: "relative", height: "60vh" }}>
        <Image src={heroImg} h="100%" fit="cover" />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", padding: "20px" }}>
          <Stack align="center">
            <Title order={1} ta="center">Movement for Scavenger Community (MSC)</Title>
            <Text size="lg" ta="center">
              Empowering marginalized communities through dignity, education, and leadership
            </Text>
          </Stack>
        </div>
      </div>

      {/* ABOUT */}
      <Container size="lg" py={80}>
        <Title order={2}>About MSC</Title>
        <Text c="dimmed" mt="sm">
          Movement for Scavenger Community (MSC) is a grassroots NGO founded in 2009 by young social activists from within the scavenger community. Registered under the Societies Act, MSC focuses on uplifting marginalized communities through education, leadership development, economic diversification, and policy advocacy.
        </Text>
        <Text c="dimmed" mt="sm">
          Over the years, MSC has grown into a powerful movement operating community resource centres across multiple states in India. These centres act as hubs for transformation—providing access to knowledge, skills, and opportunities that enable individuals to break free from generational cycles of discrimination and poverty.
        </Text>
      </Container>

      {/* IMPACT STATS */}
      <Container size="lg" py={60}>
        <Grid>
          {[
            { number: "6+", label: "Community Centers" },
            { number: "5000+", label: "Lives Impacted" },
            { number: "100+", label: "Youth Empowered" },
            { number: "377", label: "Lives Lost (2019-23)" },
          ].map((item, i) => (
            <Grid.Col key={i} span={{ base: 6, md: 3 }}>
              <Card radius="xl" p="lg" shadow="md" style={{ textAlign: "center" }}>
                <Title order={2}>{item.number}</Title>
                <Text c="dimmed">{item.label}</Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* AWARD */}
      <Container size="lg" pb={60}>
        <Card radius="xl" p="xl" shadow="lg">
          <Group>
            <FaAward size={30} color="#f59e0b" />
            <Title order={3}>Recognition</Title>
          </Group>
          <Text mt="sm" fw={500}>Recipient of 1st Prize, ISC-FICCI 2023</Text>
          <Text c="dimmed" mt="sm">
            This national-level recognition highlights MSC’s commitment to improving the lives and dignity of sanitation workers through impactful grassroots initiatives.
          </Text>
        </Card>
      </Container>

      {/* PROBLEM */}
      <Container size="lg" py={80}>
        <Grid align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src={problemImg} radius="xl" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2}>The Problem</Title>
            <Text c="dimmed" mt="sm">
              Despite being legally banned, manual scavenging continues to persist in India. Between 2019 and 2023, at least 377 lives were lost due to hazardous sewer and septic tank cleaning.
            </Text>
            <Text c="dimmed" mt="sm">
              This practice is deeply rooted in caste-based discrimination, forcing generations of Dalit families into degrading and unsafe occupations. Lack of access to education, limited employment opportunities, and social exclusion further reinforce this cycle.
            </Text>
          </Grid.Col>
        </Grid>
      </Container>

      {/* PROJECT */}
      <Container size="lg" py={80}>
        <Grid align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2}>Dr. B.R. Ambedkar Community Resource Centres</Title>
            <Text c="dimmed" mt="sm">
              MSC has established community resource centres across Bihar, Uttar Pradesh, Rajasthan, Haryana, and Madhya Pradesh.
            </Text>
            <Text c="dimmed" mt="sm">
              These centres provide free education support, digital literacy training, vocational skills, and career guidance. They also nurture leadership through fellowship programs and support entrepreneurship through mentoring and seed funding.
            </Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src={projectImg} radius="xl" />
          </Grid.Col>
        </Grid>
      </Container>

      {/* OBJECTIVES */}
      <Container size="lg" py={80}>
        <Title order={2} ta="center" mb={40}>Objectives & Outcomes</Title>
        <Grid>
          {[
            { icon: <FaBook />, title: "Education & Skills", desc: "Enhancing access to quality education and employability skills" },
            { icon: <FaUsers />, title: "Leadership", desc: "Building a strong network of grassroots leaders" },
            { icon: <FaLightbulb />, title: "Entrepreneurship", desc: "Encouraging financial independence and innovation" },
            { icon: <FaGavel />, title: "Advocacy", desc: "Influencing policies for inclusive and equitable development" },
          ].map((item, i) => (
            <Grid.Col key={i} span={{ base: 12, sm: 6, md: 3 }}>
              <Card radius="xl" p="lg" shadow="md" style={{ textAlign: "center" }}>
                <Stack align="center">
                  {item.icon}
                  <Text fw={600}>{item.title}</Text>
                  <Text size="sm" c="dimmed">{item.desc}</Text>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* GALLERY */}
      <Container size="lg" py={80}>
        <Title order={2} ta="center" mb={40}>Gallery</Title>
        <Grid>
          {[g1, g2, g3, g4].map((img, i) => (
            <Grid.Col key={i} span={{ base: 12, sm: 6, md: 3 }}>
              <Image src={img} radius="lg" />
            </Grid.Col>
          ))}
        </Grid>
        <Stack align="center" mt={30}>
          <Button radius="xl">View Full Gallery</Button>
        </Stack>
      </Container>

      {/* VIDEO SECTION */}
      <Container size="lg" py={80}>
        <Grid align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2}>Our Work in Action</Title>
            <Text fw={500} mt="sm">
              Transforming lives through community-driven initiatives
            </Text>
            <Text c="dimmed" mt="sm">
              Watch how MSC is empowering individuals and communities by providing education, leadership opportunities, and sustainable livelihoods. This video highlights real stories, challenges, and the impact created on the ground.
            </Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="MSC Video"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "12px" }}
                allowFullScreen
              />
            </div>
          </Grid.Col>
        </Grid>
      </Container>

      {/* QUOTE */}
      <Container size="lg" py={80}>
        <Card radius="xl" p="xl" shadow="lg" style={{ textAlign: "center" }}>
          <Text size="lg" fw={500}>
            “We are not just ending manual scavenging — we are building a movement of leaders.”
          </Text>
          <Text mt="sm" c="dimmed">— Vimal Kumar</Text>
        </Card>
      </Container>
    </div>
  );
}
