import {
  Container,
  Grid,
  Text,
  Title,
  Paper,
  TextInput,
  Button,
  Badge,
} from "@mantine/core";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight, FaEnvelope, FaCheck } from "react-icons/fa";
import { useRef, useState } from "react";
import bgImage from "../../assets/home/DRBRBack.jpg";

function DonateSection() {
  const ref = useRef(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // 🔥 Parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const validateEmail = (value) => {
    if (!value) return "Email is required";

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // ✅ better regex

    if (!regex.test(value.trim())) {
      return "Enter a valid email";
    }

    return "";
  };

  const handleSubmit = () => {
    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      // reset after 2 sec
      setTimeout(() => {
        setSuccess(false);
        setEmail("");
      }, 2000);
    }, 2000);
  };

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "80px 0",
      }}
    >
      {/* 🌄 Background */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: yBg,
        }}
      />

      {/* 🔥 Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.6))",
        }}
      />

      <Container size="lg" style={{ position: "relative", zIndex: 2 }}>
        <Grid align="center" gutter="xl">
          {/* LEFT */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge color="orange" variant="light" mb="md">
                Donate Now
              </Badge>

              <Title c="white" mb="md">
                Thanks For The Results Achieved With You
              </Title>

              <Text c="#ffffffcc">
                Enter your email and our team will reach out shortly.
              </Text>
            </motion.div>
          </Grid.Col>

          {/* RIGHT FORM */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Paper
              radius="lg"
              p="xl"
              style={{
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Text mb="md" fw={500}>
                Enter your email — we’ll contact you
              </Text>

              {/* 🔥 Floating label input */}
              <TextInput
                label="Email Address"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={error}
                leftSection={<FaEnvelope size={14} />}
                mb="md"
                styles={{
                  input: {
                    "&:focus": {
                      borderColor: "#ff922b",
                      boxShadow: "0 0 0 2px rgba(255,146,43,0.2)",
                    },
                  },
                }}
              />
              <Button
                fullWidth
                color={success ? "green" : "orange"}
                loading={loading}
                disabled={loading}
                rightSection={
                  !loading &&
                  (success ? (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      <FaCheck />
                    </motion.div>
                  ) : (
                    <FaArrowRight size={14} />
                  ))
                }
                onClick={handleSubmit}
              >
                {loading ? "Submitting..." : success ? "Submitted" : "Submit"}
              </Button>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>

      {/* Loader */}
      {/* <LoaderOverlay visible={loading} /> */}
    </div>
  );
}

export default DonateSection;
