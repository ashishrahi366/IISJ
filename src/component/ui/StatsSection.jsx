import { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Text,
  Title,
  Paper,
  Group,
  Button,
  ThemeIcon,
  Stack,
} from "@mantine/core";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaAward,
  FaTasks,
  FaComments,
  FaCheck,
} from "react-icons/fa";
import { theme } from "../../theme";

/* ✅ Custom Counter Hook (NO BUGS) */
function useCounter(end, duration = 2) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

/* ✅ Stats Data */
const stats = [
  { icon: FaUsers, value: 500, label: "Team Members" },
  { icon: FaAward, value: 70, label: "Award Winning" },
  { icon: FaTasks, value: 3000, label: "Total Projects" },
  { icon: FaComments, value: 7000, label: "Client Reviews" },
];

function StatsSection() {
  return (
    <Container size="lg" py={{ base: 40, sm: 60, md: 80 }}>
      <Grid align="center" gutter={{ base: "md", md: "xl" }}>
        
        {/* 🔢 LEFT SIDE - STATS */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Grid gutter="md">
            {stats.map((item, index) => {
              const Icon = item.icon;
              const count = useCounter(item.value, 2);

              return (
                <Grid.Col span={{ base: 12, xs: 6 }} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Paper
                      radius="lg"
                      p="lg"
                      style={{
                        textAlign: "center",
                        background: "rgba(255,255,255,0.9)",
                        backdropFilter: "blur(10px)",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                      }}
                    >
                      {/* Icon */}
                      <ThemeIcon
                        size={50}
                        radius="xl"
                        color="orange"
                        variant="light"
                        mb="sm"
                      >
                        <Icon size={22} />
                      </ThemeIcon>

                      {/* Counter */}
                      <Text
                        fw={700}
                        style={{
                          fontSize: "clamp(22px, 4vw, 32px)",
                        }}
                      >
                        {count}+
                      </Text>

                      {/* Label */}
                      <Text size="sm" c="dimmed">
                        {item.label}
                      </Text>
                    </Paper>
                  </motion.div>
                </Grid.Col>
              );
            })}
          </Grid>
        </Grid.Col>

        {/* 📝 RIGHT SIDE CONTENT */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Stack gap="sm">

              <Text
                c={theme.colors.orange[6]}
                fw={600}
                tt="uppercase"
              >
                Why Choose Us
              </Text>

              <Title
                order={2}
                style={{
                  fontSize: "clamp(24px, 4vw, 34px)",
                  lineHeight: 1.3,
                }}
              >
                Few Reasons Why People Choose Us
              </Title>

              <Text c="dimmed">
                We believe in empowering communities through education,
                healthcare, and sustainable development. Your support helps
                create real impact.
              </Text>

              {/* Points */}
              <Stack gap={6} mt="sm">
                <Text size="sm">
                  <FaCheck color={theme.colors.orange[6]} /> Justo magna erat amet
                </Text>
                <Text size="sm">
                  <FaCheck color={theme.colors.orange[6]} /> Aliqu diam amet diam et eos
                </Text>
                <Text size="sm">
                  <FaCheck color={theme.colors.orange[6]} /> Clita erat ipsum et lorem
                </Text>
              </Stack>

              {/* Buttons */}
              <Group mt="md" wrap="wrap">
                <Button color="orange">Donate Now</Button>
                <Button variant="outline" color="orange">
                  Join Us
                </Button>
              </Group>

            </Stack>
          </motion.div>
        </Grid.Col>

      </Grid>
    </Container>
  );
}

export default StatsSection;