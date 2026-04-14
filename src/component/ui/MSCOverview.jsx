import { Container, Grid, Title, Text, Group, ThemeIcon } from "@mantine/core";
import { motion } from "framer-motion";
import { FaHandsHelping } from "react-icons/fa";
import { theme } from "../../theme";
import { Button } from "@mantine/core";
import { FaArrowRight } from "react-icons/fa";
import overviewImg from "../../assets/home/about-1.jpg";

function MSCOverview() {
  return (
    <Container size="lg" py={{ base: 50, md: 80 }}>
      <Grid align="center" gutter={{ base: "lg", md: "xl" }}>
        {/* 📝 LEFT CONTENT */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Icon + Subheading */}
            <Group mb="md">
              <ThemeIcon size={50} radius="xl" color="orange" variant="light">
                <FaHandsHelping size={24} />
              </ThemeIcon>

              <Text
                fw={600}
                c={theme.colors.orange[6]}
                size="sm"
                tt="uppercase"
              >
                MSC Overview
              </Text>
            </Group>

            {/* Title */}
            <Title
              order={2}
              mb="md"
              style={{
                fontSize: "clamp(24px, 4vw, 36px)",
                lineHeight: 1.3,
              }}
            >
              Empowering Communities Through Meaningful Support
            </Title>

            {/* Description */}
            <Text c="dimmed" size="md" mb="md">
              We focus on creating sustainable solutions that uplift communities
              and improve lives. Our initiatives span across education,
              healthcare, and essential resources to ensure long-term impact.
            </Text>

            <Text c="dimmed" size="md">
              By collaborating with local organizations and volunteers, we
              ensure that help reaches those who need it most, efficiently and
              effectively.
            </Text>

            <Button
              mt="lg"
              color="orange"
              radius="md"
              rightSection={<FaArrowRight size={14} />}
            >
              Know More
            </Button>
              
          </motion.div>
        </Grid.Col>

        {/* 🖼 RIGHT IMAGE */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ position: "relative" }}
          >
            <motion.img
              src={overviewImg}
              alt="MSC Overview"
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              }}
              whileHover={{ scale: 1.02 }} // subtle effect
              transition={{ duration: 0.3 }}
            />

            {/* 🔥 Gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "16px",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.05))",
              }}
            />
          </motion.div>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default MSCOverview;
