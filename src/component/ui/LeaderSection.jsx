import {
  Container,
  Grid,
  Image,
  Text,
  Title,
  Paper,
  Group,
  ThemeIcon,
  Stack,
} from "@mantine/core";
import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";
import leaderImg from "../../assets/home/about-1.jpg";
import { theme } from "../../theme";

function LeaderSection() {
  return (
    <Container size="lg" py={{ base: 50, md: 80 }}>
      {/* 🔝 Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: "50px" }}
      >
        <Title order={2} mb="sm">
          Our Leadership
        </Title>

        <Text c="dimmed" style={{ maxWidth: 600, margin: "0 auto" }}>
          Guided by vision, compassion, and dedication, our leadership team
          works tirelessly to create meaningful change in society.
        </Text>
      </motion.div>

      <Grid align="center" gutter="xl">
        {/* 🖼 LEFT IMAGE */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src={leaderImg}
              radius="lg"
              style={{
                height: "420px",
                objectFit: "cover",
                boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
              }}
            />
          </motion.div>
        </Grid.Col>

        {/* 📝 RIGHT CONTENT */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Paper
              p="xl"
              radius="lg"
              style={{
                background: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <Stack>
                {/* Quote Icon */}
                <ThemeIcon size={50} radius="xl" color="orange" variant="light">
                  <FaQuoteRight />
                </ThemeIcon>

                {/* Quote */}
                <Text
                  size="lg"
                  style={{
                    lineHeight: 1.7,
                    fontStyle: "italic",
                  }}
                >
                  Love and compassion have the power to heal. Through your
                  support, we can uplift communities and bring hope to those who
                  need it most.
                </Text>

                {/* Leader Info */}
                <div>
                  <Title order={4}>Vimal Kumar</Title>
                  <Text c={theme.colors.orange[6]} fw={500}>
                    CEO & Founder
                  </Text>
                </div>
              </Stack>
            </Paper>
          </motion.div>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default LeaderSection;
