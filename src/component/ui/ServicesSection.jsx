import {
    Container,
    Grid,
    Card,
    Text,
    Title,
    Button,
    Badge,
    Group,
  } from "@mantine/core";
  import { motion } from "framer-motion";
  import { FaArrowRight, FaBookOpen, FaHeartbeat, FaTint } from "react-icons/fa";
  import { theme } from "../../theme";
  
  const services = [
    {
      icon: <FaBookOpen size={40} />,
      title: "Child Education",
      desc: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",
    },
    {
      icon: <FaHeartbeat size={40} />,
      title: "Medical Treatment",
      desc: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",
    },
    {
      icon: <FaTint size={40} />,
      title: "Pure Drinking Water",
      desc: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",
    },
  ];
  
  function ServicesSection() {
    return (
      <Container size="lg" py={{ base: 50, md: 80 }}>
  
        {/* 🔥 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", maxWidth: 500, margin: "0 auto" }}
        >
          <Badge
            size="lg"
            radius="xl"
            color="orange"
            variant="light"
            mb="md"
          >
            What We Do
          </Badge>
  
          <Title
            order={2}
            mb="xl"
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              lineHeight: 1.3,
            }}
          >
            Learn More What We Do And Get Involved
          </Title>
        </motion.div>
  
        {/* 🧩 Cards */}
        <Grid gutter="xl" justify="center">
          {services.map((item, index) => (
            <Grid.Col
              key={index}
              span={{ base: 12, sm: 6, md: 4 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  shadow="md"
                  radius="lg"
                  p="xl"
                  style={{
                    textAlign: "center",
                    height: "100%",
                    transition: "0.3s",
                    border: "1px solid #eee",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 40px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  {/* Icon */}
                  <Group justify="center" mb="md">
                    <div
                      style={{
                        background: theme.colors.orange[0],
                        color: theme.colors.orange[6],
                        padding: "16px",
                        borderRadius: "50%",
                      }}
                    >
                      {item.icon}
                    </div>
                  </Group>
  
                  {/* Title */}
                  <Title order={4} mb="sm">
                    {item.title}
                  </Title>
  
                  {/* Description */}
                  <Text size="sm" c="dimmed" mb="md">
                    {item.desc}
                  </Text>
  
                  {/* Button */}
                  <Button
                    variant="light"
                    color="orange"
                    rightSection={<FaArrowRight size={14} />}
                  >
                    Learn More
                  </Button>
                </Card>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    );
  }
  
  export default ServicesSection;