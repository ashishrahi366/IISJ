import {
  Container,
  Grid,
  Text,
  Title,
  TextInput,
  Textarea,
  Button,
  Box,
  Stack,
  Paper,
  Group,
  Notification,
  Card,
  ThemeIcon,
  Overlay,
  Image,
  SimpleGrid,
  Divider,
} from "@mantine/core";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaHandsHelping,
  FaGlobeAsia,
  FaUsers,
  FaArrowRight,
  // FaFacebookF,
  // FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaHeart,
  FaHandshake,
  FaUserFriends,
} from "react-icons/fa";

import { sendEmail } from "../utils/mailer";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import heroImg from "../assets/pages/VimalinAction-scaled.webp";

import contact2 from "../assets/pages/contact2.jpeg";
import CA1 from "../assets/pages/CA1.webp";
import CA2 from "../assets/pages/CA2.jpg";
import CA3 from "../assets/pages/CA3.jpg";
import CA4 from "../assets/home/infoImg3.jpeg";

function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");

  // ✅ Email Validation
  const validateEmail = (email) => {
    const trimmed = email.trim();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const email = form.email.trim();
  
    if (!email) {
      setError("Email is required");
      return;
    }
  
    if (!validateEmail(email)) {
      setError("Enter a valid email");
      return;
    }
  
    setError("");
    setLoading(true);
  
    const result = await sendEmail({
      subject: form.subject || "Contact Form Submission",
      name: form.name,
      email: form.email,
      message: form.message,
    });
  
    setLoading(false);
  
    if (result.success) {
      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } else {
      setError(result.message || "Failed to send. Please try again.");
    }
  };

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      bg: "#0a66c2",
      link: "https://www.linkedin.com/company/movement-for-scavenger-community-msc/posts/?feedView=all",
    },
    {
      icon: <FaYoutube />,
      bg: "#ff0000",
      link: "/https://www.youtube.com/@mscindia2530",
    },
  ];

  return (
    <>
      {/* 🔥 HERO */}
      <Box
        style={{
          height: "420px",
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "20px",
          }}
        >
          <Title
            c="white"
            fw={800}
            style={{
              fontSize: "clamp(38px, 6vw, 70px)",
              lineHeight: 1.1,
            }}
          >
            Contact Us
          </Title>

          <Text
            c="rgba(255,255,255,0.85)"
            mt="md"
            maw={700}
            mx="auto"
            size="lg"
          >
            Join hands with us to create a world rooted in dignity, equality,
            education, and social justice.
          </Text>
        </motion.div>
      </Box>

      {/* 🔥 FEATURE SECTION */}
      <Box
        py={90}
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #111827 40%, #1e293b 100%)",
          position: "relative",
        }}
      >
        <Container size="xl">
          <Grid gutter="xl" align="center">
            {/* LEFT CONTENT */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Title
                  c="white"
                  fw={800}
                  style={{
                    fontSize: "clamp(32px, 4vw, 52px)",
                    lineHeight: 1.2,
                  }}
                >
                  Let’s Build Change Together
                </Title>

                <Text mt="lg" c="rgba(255,255,255,0.75)" size="lg" lh={1.9}>
                  We believe real transformation begins through collaboration,
                  compassion, and community leadership. Whether you are an
                  individual, organization, volunteer, donor, researcher, or
                  partner — your voice and support matter.
                </Text>

                <Text mt="md" c="rgba(255,255,255,0.75)" size="lg" lh={1.9}>
                  Reach out to us to collaborate on programs, support grassroots
                  initiatives, participate in community projects, or simply
                  learn more about our mission.
                </Text>

                <Group mt={35}>
                  <Button
                    component={Link}
                    to="/Fellowship-Program-app"
                    color="orange"
                    radius="xl"
                    size="md"
                    rightSection={<FaArrowRight size={14} />}
                  >
                    Become a Partner
                  </Button>
                </Group>
              </motion.div>
            </Grid.Col>

            {/* RIGHT CARDS */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Grid>
                {[
                  {
                    icon: <FaHandsHelping />,
                    title: "Community Support",
                    desc: "Helping marginalized communities through education, advocacy, and empowerment.",
                    color: "#f97316",
                  },
                  {
                    icon: <FaGlobeAsia />,
                    title: "Grassroots Impact",
                    desc: "Creating sustainable social transformation through local leadership.",
                    color: "#3b82f6",
                  },
                  {
                    icon: <FaUsers />,
                    title: "Collaborative Network",
                    desc: "Building partnerships with institutions, volunteers, and changemakers.",
                    color: "#22c55e",
                  },
                ].map((item, index) => (
                  <Grid.Col key={index} span={{ base: 12, sm: 6 }}>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.15,
                      }}
                      viewport={{ once: true }}
                    >
                      <Card
                        radius="24px"
                        p="xl"
                        h="100%"
                        style={{
                          background: "rgba(255,255,255,0.06)",
                          backdropFilter: "blur(14px)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        <ThemeIcon
                          size={58}
                          radius="xl"
                          variant="light"
                          style={{
                            background: item.color,
                            color: "white",
                          }}
                        >
                          {item.icon}
                        </ThemeIcon>

                        <Title order={4} c="white" mt="lg" fw={700}>
                          {item.title}
                        </Title>

                        <Text
                          mt="sm"
                          c="rgba(255,255,255,0.7)"
                          size="sm"
                          lh={1.8}
                        >
                          {item.desc}
                        </Text>
                      </Card>
                    </motion.div>
                  </Grid.Col>
                ))}
              </Grid>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* 🔥 ADDRESS + FORM */}
      <Container size="xl" py={100}>
        <Grid gutter={50}>
          {/* LEFT - ADDRESS */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Title order={2} fw={800}>
                Our Offices
              </Title>

              <Text c="dimmed" mt="md" size="lg">
                Connect with our teams and community centers across different
                regions.
              </Text>

              <Stack mt={40} gap="xl">
                {[
                  {
                    title: "Head Office",
                    address:
                      "New Delhi, India — Community Leadership & National Coordination Center",
                  },
                  {
                    title: "Assam Training Centre",
                    address:
                      "Bongaigaon, Assam — Residential Leadership & Fellowship Training Campus",
                  },
                  {
                    title: "Community Resource Centre",
                    address:
                      "Patna, Bihar — Education, Digital Literacy & Grassroots Programs",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    radius="24px"
                    p="xl"
                    shadow="md"
                    style={{
                      border: "1px solid rgba(0,0,0,0.05)",
                    }}
                  >
                    <Group align="flex-start" wrap="nowrap">
                      <ThemeIcon
                        size={52}
                        radius="xl"
                        color="orange"
                        variant="light"
                      >
                        <FaMapMarkerAlt size={20} />
                      </ThemeIcon>

                      <div>
                        <Text fw={700} size="lg">
                          {item.title}
                        </Text>

                        <Text c="dimmed" mt={5} lh={1.8}>
                          {item.address}
                        </Text>
                      </div>
                    </Group>
                  </Card>
                ))}
              </Stack>

              {/* EXTRA CONTACT */}
              <Card
                mt={40}
                radius="24px"
                p="xl"
                style={{
                  background:
                    "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                  color: "white",
                }}
              >
                <Stack gap="lg">
                  {/* <Group>
                    <FaPhoneAlt />
                    <Text fw={600}>+91 98765 43210</Text>
                  </Group> */}

                  <Group>
                    <FaEnvelope />
                    <Text fw={600}>iisj.contact@gmail.com</Text>
                  </Group>

                  <Divider color="rgba(255,255,255,0.2)" />

                  {/* 🔥 SOCIAL MEDIA */}
                  <Group mt={5}>
                    {socialLinks.map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.link}
                        whileHover={{
                          scale: 1.12,
                          y: -4,
                        }}
                        transition={{ duration: 0.2 }}
                        style={{
                          width: 42,
                          height: 42,
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        {item.icon}
                      </motion.a>
                    ))}
                  </Group>
                </Stack>
              </Card>
            </motion.div>
          </Grid.Col>

          {/* RIGHT - FORM */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Paper
                radius="30px"
                p="40px"
                shadow="xl"
                style={{
                  background:
                    "linear-gradient(180deg, #ffffff 0%, #fff7ed 100%)",
                  border: "1px solid rgba(249,115,22,0.1)",
                }}
              >
                <Title order={2} fw={800}>
                  Send Us a Message
                </Title>

                <Text c="dimmed" mt="sm">
                  We'd love to hear from you. Fill out the form below and our
                  team will contact you soon.
                </Text>

                <form onSubmit={handleSubmit}>
                  <Stack mt={35}>
                    <TextInput
                      label="Your Name"
                      placeholder="Enter your name"
                      radius="md"
                      size="md"
                      value={form.name}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          name: e.target.value,
                        })
                      }
                    />

                    <TextInput
                      label="Email Address"
                      placeholder="Enter your email"
                      radius="md"
                      size="md"
                      required
                      error={error}
                      value={form.email}
                      onChange={(e) => {
                        setForm({
                          ...form,
                          email: e.target.value,
                        });
                        setError("");
                      }}
                    />

                    <TextInput
                      label="Subject"
                      placeholder="Enter subject"
                      radius="md"
                      size="md"
                      value={form.subject}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          subject: e.target.value,
                        })
                      }
                    />

                    <Textarea
                      label="Message"
                      placeholder="Write your message..."
                      minRows={6}
                      radius="md"
                      size="md"
                      value={form.message}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          message: e.target.value,
                        })
                      }
                    />

                    <Button
                      type="submit"
                      color="orange"
                      radius="xl"
                      size="md"
                      loading={loading}
                      rightSection={<FaArrowRight size={14} />}
                    >
                      Send Message
                    </Button>

                    {success && (
                      <Notification
                        color="green"
                        radius="md"
                        title="Message Sent Successfully"
                        onClose={() => setSuccess(false)}
                      >
                        Thank you for reaching out. We will contact you soon.
                      </Notification>
                    )}
                  </Stack>
                </form>
              </Paper>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>

      {/* 🔥 WHY PARTNER WITH US */}
      <Box py={100} bg="#f8fafc">
        <Container size="xl">
          <Stack align="center" mb={60}>
            <Title order={2} fw={800} ta="center">
              Why Partner With Us
            </Title>

            <Text c="dimmed" maw={700} ta="center" size="lg">
              Together we can create sustainable social impact through
              education, leadership, and grassroots empowerment.
            </Text>
          </Stack>

          <Grid>
            {[
              {
                icon: <FaHeart />,
                title: "Human-Centered Approach",
                desc: "We focus on dignity, inclusion, and long-term transformation.",
                color: "#ef4444",
              },
              {
                icon: <FaHandshake />,
                title: "Strong Partnerships",
                desc: "Collaborating with organizations, volunteers, and communities.",
                color: "#3b82f6",
              },
              {
                icon: <FaUserFriends />,
                title: "Grassroots Leadership",
                desc: "Empowering local changemakers and future leaders.",
                color: "#22c55e",
              },
            ].map((item, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 4 }}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    radius="28px"
                    p="xl"
                    h="100%"
                    shadow="md"
                    style={{
                      border: "1px solid rgba(0,0,0,0.05)",
                    }}
                  >
                    <ThemeIcon
                      size={64}
                      radius="xl"
                      variant="light"
                      style={{
                        background: item.color,
                        color: "white",
                      }}
                    >
                      {item.icon}
                    </ThemeIcon>

                    <Title order={4} mt="lg" fw={700}>
                      {item.title}
                    </Title>

                    <Text c="dimmed" mt="sm" lh={1.8}>
                      {item.desc}
                    </Text>
                  </Card>
                </motion.div>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>
      {/* 🔥 COMMUNITY ACTIVITIES */}
      <Container size="xl" py={100}>
        <Stack align="center" mb={60}>
          <Title order={2} fw={800}>
            Community Activities
          </Title>

          <Text c="dimmed" ta="center" maw={700}>
            Moments from leadership workshops, fellowship programs, grassroots
            meetings, and education initiatives.
          </Text>
        </Stack>

        {/* 🔥 PROGRAM ARRAY */}
        {(() => {
          const programs = [
            {
              image: CA1,
              title: "Community Leadership Program",
              description:
                "Empowering youth and grassroots leaders through leadership workshops, civic participation, and community organizing initiatives.",
              buttonText: "Learn More",
              link: "/about",
            },

            {
              image: CA2,
              title: "Movement for Scavenger Community – MSC",
              description:
                "Aim is equality, the same chances for everyone, no matter what caste, class they belong to. Goal is empowerment through education.",
              buttonText: "Explore Program",
              link: "/MSC-Detail",
            },
            {
              image: CA3,
              title: "Fellowship Program",
              description:
                "Our fellows live and work at different locations. Working hand in hand with the committee of the local Dr. B. R. Ambedkar Community Resource Centre.",
              buttonText: "View Fellowship",
              link: "/Fellowship-Program-app",
            },

            {
              image: CA4,
              title: "Avarna Foundation",
              description:
                "It represents a world beyond division—where identity is not defined by caste, gender, religion, or race, but by shared humanity and collective growth.",
              buttonText: "Read More",
              link: "/Avarna",
            },
          ];

          return (
            <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
              {programs.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <Card
                    radius="28px"
                    p={0}
                    shadow="lg"
                    style={{
                      overflow: "hidden",
                      height: "100%",
                      border: "1px solid rgba(0,0,0,0.05)",
                      background: "#fff",
                    }}
                  >
                    {/* IMAGE */}
                    <Box
                      style={{
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.08,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                      >
                        <Image src={item.image} height={260} alt={item.title} />
                      </motion.div>

                      {/* OVERLAY */}
                      <Box
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                        }}
                      />
                    </Box>

                    {/* CONTENT */}
                    <Box p="xl">
                      <Title
                        order={4}
                        fw={800}
                        style={{
                          lineHeight: 1.3,
                        }}
                      >
                        {item.title}
                      </Title>

                      <Text size="sm" c="dimmed" mt="md" lh={1.8}>
                        {item.description}
                      </Text>

                      {/* BUTTON */}
                      <Button
                        component="a"
                        href={item.link}
                        mt="xl"
                        color="orange"
                        radius="xl"
                        fullWidth
                      >
                        {item.buttonText}
                      </Button>
                    </Box>
                  </Card>
                </motion.div>
              ))}
            </SimpleGrid>
          );
        })()}
      </Container>

      {/* 🔥 VOLUNTEER CTA */}
      <Box
        py={100}
        style={{
          backgroundImage: `url(${contact2})`,
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
          <Title
            c="white"
            fw={800}
            style={{
              fontSize: "clamp(34px, 5vw, 60px)",
            }}
          >
            Fellow for Equality Application
          </Title>

          <Text c="rgba(255,255,255,0.8)" size="lg" mt="lg" lh={1.9}>
            Become part of a growing movement dedicated to justice, equality,
            and grassroots empowerment. Join our internships, fellowships, and
            volunteer initiatives to create meaningful impact.
          </Text>

          <Group justify="center" mt={40}>
            <Button
              component={Link}
              to="/Fellowship-Program-app"
              color="orange"
              radius="xl"
              size="lg"
              rightSection={<FaArrowRight size={14} />}
            >
              Apply Now
            </Button>
          </Group>
        </Container>
      </Box>
      <Box
        py={90}
        style={{
          background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
        }}
      >
        <Container size="lg">
          <Grid align="center">
            <Grid.Col span={{ base: 12, md: 8 }}>
              <Title c="white" fw={800}>
                Support Our Mission
              </Title>

              <Text c="rgba(255,255,255,0.85)" mt="md" size="lg" lh={1.9}>
                Your contribution helps us provide education, leadership
                training, fellowships, and support systems for marginalized
                communities across India.
              </Text>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Group justify="flex-end">
                <Button
                  component={Link}
                  to="/Support-MSC"
                  size="lg"
                  radius="xl"
                  color="dark"
                  rightSection={<FaArrowRight size={14} />}
                >
                  Donate Now
                </Button>
              </Group>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default ContactPage;
