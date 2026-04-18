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
  
  import {
    FaUsers,
    FaBook,
    FaLightbulb,
    FaGavel,
    FaChalkboardTeacher,
  } from "react-icons/fa";
  
  import { motion } from "framer-motion";
  
  import heroImg from "../assets/home/about-1.jpg";
  import sectionImg from "../assets/home/about-1.jpg";
  import g1 from "../assets/home/about-1.jpg";
  import g2 from "../assets/home/about-1.jpg";
  import g3 from "../assets/home/about-1.jpg";
  import g4 from "../assets/home/about-1.jpg";
  
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  export default function IISJPage() {
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
            }}
          >
            <Stack align="center">
              <Title order={1}>IISJ</Title>
              <Text>Empowering communities through education & leadership</Text>
            </Stack>
          </div>
        </div>
  
        {/* INTRO */}
        <Container size="lg" py={80}>
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <Grid align="center">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Image src={sectionImg} radius="xl" />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Title order={2}>Executive Summary</Title>
                <Text c="dimmed" mt="sm">
                  The International Institute for Social Justice (IISJ) is a mission-driven organization committed to building equitable societies through education, leadership, and advocacy.
                </Text>
                <Text c="dimmed" mt="sm">
                  By focusing on youth, women, and underserved communities, IISJ nurtures leadership from the grassroots level and empowers individuals to shape their own futures.
                </Text>
                <Text c="dimmed" mt="sm">
                  The organization blends local knowledge with scalable impact strategies, ensuring sustainable and community-led transformation.
                </Text>
              </Grid.Col>
            </Grid>
          </motion.div>
        </Container>
  
        {/* STATS */}
        <Container size="lg" py={60}>
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <Grid>
              {[
                { number: "100+", label: "Youth Leaders" },
                { number: "200+", label: "Scholarships" },
                { number: "2000+", label: "Lives Impacted" },
                { number: "1", label: "Training Hub" },
              ].map((item, i) => (
                <Grid.Col key={i} span={{ base: 6, md: 3 }}>
                  <Card radius="xl" p="lg" shadow="md" style={{ textAlign: "center" }}>
                    <Title order={2}>{item.number}</Title>
                    <Text c="dimmed">{item.label}</Text>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </motion.div>
        </Container>
  
        {/* WHY */}
        <Container size="lg" py={80}>
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <Title order={2}>Why This Work Matters</Title>
            <Text c="dimmed" mt="sm">
              Millions of individuals remain excluded from opportunities due to systemic inequalities in education and access to resources.
            </Text>
            <Text c="dimmed" mt="sm">
              IISJ addresses these challenges by equipping communities with knowledge, leadership skills, and platforms for civic engagement.
            </Text>
          </motion.div>
        </Container>
  
        {/* SCOPE */}
        <Container size="lg" py={80}>
          <Title order={2} ta="center" mb={40}>Scope of Work</Title>
  
          <Grid>
            {[
              {
                icon: <FaChalkboardTeacher color="#4f46e5" size={26} />,
                title: "Training Programs",
                desc: "Structured residential fellowships focused on leadership and social innovation.",
              },
              {
                icon: <FaBook color="#16a34a" size={26} />,
                title: "Education Initiatives",
                desc: "Local programs for literacy, tuition support, and digital education.",
              },
              {
                icon: <FaUsers color="#0ea5e9" size={26} />,
                title: "Scholarships",
                desc: "Financial support to help students continue their education.",
              },
              {
                icon: <FaLightbulb color="#f97316" size={26} />,
                title: "Mentorship",
                desc: "Guidance and exposure to governance, NGOs, and leadership roles.",
              },
              {
                icon: <FaGavel color="#3b82f6" size={26} />,
                title: "Advocacy",
                desc: "Campaigns and research focused on rights and inclusion.",
              },
            ].map((item, i) => (
              <Grid.Col key={i} span={{ base: 12, sm: 6, md: 4 }}>
                <motion.div whileHover={{ y: -5 }}>
                  <Card radius="xl" p="lg" shadow="md" style={{ height: "100%" }}>
                    <Stack align="center">
                      {item.icon}
                      <Text fw={600}>{item.title}</Text>
                      <Text size="sm" c="dimmed" ta="center">
                        {item.desc}
                      </Text>
                    </Stack>
                  </Card>
                </motion.div>
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
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Image src={img} radius="lg" />
                </motion.div>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
  
        {/* VIDEO */}
        <Container size="lg" py={80}>
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <Grid align="center">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Title order={2}>Impact in Action</Title>
                <Text mt="sm">
                  IISJ programs create real transformation by empowering individuals to become leaders within their communities.
                </Text>
                <Text c="dimmed" mt="sm">
                  From grassroots initiatives to policy engagement, IISJ fosters sustainable social change.
                </Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                  <iframe
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    style={{ position: "absolute", width: "100%", height: "100%", borderRadius: "12px" }}
                    allowFullScreen
                  />
                </div>
              </Grid.Col>
            </Grid>
          </motion.div>
        </Container>
  
        {/* CTA */}
        <Container size="lg" py={80}>
          <Card radius="xl" p="xl" style={{ background: "#4f46e5", color: "white", textAlign: "center" }}>
            <Title order={2}>Join the Movement</Title>
            <Text mt="sm">
              Be part of a growing movement dedicated to justice, equality, and empowerment.
            </Text>
            <Button mt={20} radius="xl" color="dark">Get Involved</Button>
          </Card>
        </Container>
      </div>
    );
  }
  