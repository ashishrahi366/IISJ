import {
  Container,
  Grid,
  Text,
  Title,
  Paper,
  Group,
  Avatar,
} from "@mantine/core";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import drImage from "../../assets/home/DrBRAanimation.webp";
import { theme } from "../../theme";

function DRBRAAni() {
  return (
    <Container size="lg" py={{ base: 50, md: 80 }}>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: "50px" }}
      >
        <Title
          order={2}
          mb="sm"
          style={{
            fontSize: "clamp(26px, 4vw, 36px)",
            lineHeight: 1.3,
          }}
        >
          Inspired by the Vision of Dr. B. R. Ambedkar
        </Title>

        <Text
          c="dimmed"
          size="md"
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          We follow the path of equality, education, and empowerment as
          envisioned by Dr. B. R. Ambedkar, striving to create a society built
          on justice and opportunity for all.
        </Text>
      </motion.div>
      <Grid align="center" gutter={{ base: "lg", md: "xl" }}>
        {/* 🖼 IMAGE */}
        <Grid.Col span={{ base: 12, md: 5 }}>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ position: "relative" }}
          >
            <motion.img
              src={drImage}
              alt="Dr BR Ambedkar"
              style={{
                width: "100%",
                height: "420px",
                objectFit: "cover",
                borderRadius: "16px",
                boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

            {/* 🔥 Gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "16px",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.05))",
              }}
            />
          </motion.div>
        </Grid.Col>

        {/* 📝 CONTENT */}
        <Grid.Col span={{ base: 12, md: 7 }}>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Paper
              radius="lg"
              p={{ base: "lg", md: "xl" }}
              style={{
                background: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(10px)",
                borderLeft: `5px solid ${theme.colors.orange[5]}`,
              }}
            >
              {/* Quote Icon */}
              <FaQuoteLeft
                size={30}
                style={{
                  color: theme.colors.orange[5],
                  marginBottom: "10px",
                }}
              />

              {/* Quote */}
              <Text size="lg" fw={500} mb="md" style={{ lineHeight: 1.6 }}>
                “Cultivation of mind should be the ultimate aim of human
                existence.”
              </Text>

              {/* Description */}
              <Text c="dimmed" mb="lg">
                Dr. B.R. Ambedkar was a visionary leader, social reformer, and
                the chief architect of the Indian Constitution. His
                contributions toward equality, education, and social justice
                continue to inspire generations.
              </Text>

              {/* Author */}
              <Group>
                <Avatar src={drImage} radius="xl" size="md" />
                <div>
                  <Text fw={600}>Dr. B. R. Ambedkar</Text>
                  <Text size="xs" c="dimmed">
                    Social Reformer & Economist
                  </Text>
                </div>
              </Group>
            </Paper>
          </motion.div>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default DRBRAAni;
