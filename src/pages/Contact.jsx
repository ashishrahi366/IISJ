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
  } from "@mantine/core";
  import { useState } from "react";
  import { motion } from "framer-motion";
  import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
  } from "react-icons/fa";
  import { theme } from "../theme";
  import heroImg from "../assets/home/about-1.jpg";
  
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
  
    /* ✅ Email Validation (FIXED) */
    const validateEmail = (email) => {
      const trimmed = email.trim();
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    };
  
    const handleSubmit = (e) => {
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
  
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 2000);
    };
  
    return (
      <>
        {/* 🔥 HERO */}
        <Box
          style={{
            height: "300px",
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.6)",
            }}
          />
  
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Title c="white" style={{ position: "relative" }}>
              Contact Us
            </Title>
          </motion.div>
        </Box>
  
        {/* 🗺️ MAP + FORM */}
        <Container size="lg" py={80}>
          <Grid gutter="xl">
  
            {/* MAP */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Box
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: 350,
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <iframe
                  title="map"
                  src="https://www.google.com/maps?q=13.0827,80.2707&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </Box>
            </Grid.Col>
  
            {/* FORM */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Paper shadow="sm" radius="lg" p="xl">
                  <Title order={3} mb="md">
                    Get In Touch
                  </Title>
  
                  <form onSubmit={handleSubmit}>
                    <Stack>
  
                      {/* Name */}
                      <TextInput
                        label="Your Name"
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                      />
  
                      {/* Email */}
                      <TextInput
                        label="Email"
                        placeholder="Enter your email"
                        required
                        error={error}
                        value={form.email}
                        onChange={(e) => {
                          setForm({ ...form, email: e.target.value });
                          setError("");
                        }}
                      />
  
                      {/* Subject */}
                      <TextInput
                        label="Subject"
                        placeholder="Enter subject"
                        value={form.subject}
                        onChange={(e) =>
                          setForm({ ...form, subject: e.target.value })
                        }
                      />
  
                      {/* Description */}
                      <Textarea
                        label="Description"
                        placeholder="Write your message..."
                        minRows={4}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                      />
  
                      {/* Submit */}
                      <Button
                        type="submit"
                        color="orange"
                        loading={loading}
                        fullWidth
                      >
                        Submit
                      </Button>
  
                      {/* Success */}
                      {success && (
                        <Notification
                          color="green"
                          title="Success"
                          onClose={() => setSuccess(false)}
                        >
                          We will contact you soon!
                        </Notification>
                      )}
                    </Stack>
                  </form>
                </Paper>
              </motion.div>
            </Grid.Col>
  
          </Grid>
        </Container>
  
        {/* 📍 CONTACT INFO */}
        <Box py={60} style={{ background: "#f8f9fa" }}>
          <Container size="lg">
            <Grid>
  
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Group align="flex-start">
                  <FaMapMarkerAlt size={20} color={theme.colors.orange[6]} />
                  <div>
                    <Text fw={600}>Address</Text>
                    <Text size="sm" c="dimmed">
                      Chennai, Tamil Nadu, India
                    </Text>
                  </div>
                </Group>
              </Grid.Col>
  
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Group align="flex-start">
                  <FaPhoneAlt size={20} color={theme.colors.orange[6]} />
                  <div>
                    <Text fw={600}>Phone</Text>
                    <Text size="sm" c="dimmed">
                      +91 98765 43210
                    </Text>
                  </div>
                </Group>
              </Grid.Col>
  
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Group align="flex-start">
                  <FaEnvelope size={20} color={theme.colors.orange[6]} />
                  <div>
                    <Text fw={600}>Email</Text>
                    <Text size="sm" c="dimmed">
                      info@example.com
                    </Text>
                  </div>
                </Group>
              </Grid.Col>
  
            </Grid>
          </Container>
        </Box>
      </>
    );
  }
  
  export default ContactPage;