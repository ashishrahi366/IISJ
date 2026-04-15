import {
    Container,
    Grid,
    Card,
    Image,
    Text,
    Title,
    Group,
    Stack,
    Box,
  } from "@mantine/core";
  import { motion } from "framer-motion";
  import { FaUser, FaCalendarAlt } from "react-icons/fa";
  import leaderImg from "../../assets/home/about-1.jpg";
  
  /* 🧠 Dummy Data */
  const blogs = [
    {
      id: 1,
      image: leaderImg,
      title: "Empowering Communities Through Education",
      description:
        "We focus on providing quality education to underprivileged children to build a brighter future.",
      author: "Admin",
      date: "March 12, 2026",
    },
    {
      id: 2,
      image: leaderImg,
      title: "Healthcare Support for Everyone",
      description:
        "Our mission is to deliver essential healthcare services to those who need it the most.",
      author: "Admin",
      date: "March 18, 2026",
    },
    {
      id: 3,
      image: leaderImg,
      title: "Clean Water Initiative",
      description:
        "Providing access to clean and safe drinking water in remote and rural areas.",
      author: "Admin",
      date: "March 22, 2026",
    },
    {
      id: 4,
      image: leaderImg,
      title: "Join Hands to Make a Difference",
      description:
        "Volunteers are the backbone of our organization. Be a part of the change.",
      author: "Admin",
      date: "March 25, 2026",
    },
  ];
  
  function BlogSection() {
    return (
      <Container size="lg" py={{ base: 50, md: 80 }}>
        
        {/* 🔝 Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "50px" }}
        >
          <Title order={2} mb="sm">
            Latest Blogs
          </Title>
          <Text c="dimmed" style={{ maxWidth: 600, margin: "0 auto" }}>
            Stay updated with our latest news and stories.
          </Text>
        </motion.div>
  
        {/* 📰 Cards */}
        <Grid gutter="xl">
          {blogs.map((blog, index) => (
            <Grid.Col key={blog.id} span={{ base: 12, sm: 6, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                style={{ height: "100%" }}
              >
                <Card
                  radius="lg"
                  shadow="sm"
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* 📸 Image */}
                  <Card.Section>
                    <Image
                      src={blog.image}
                      height={180}
                      alt={blog.title}
                    />
                  </Card.Section>
  
                  {/* 📦 Content Wrapper (FIXED HEIGHT) */}
                  <Box
                    mt="md"
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Stack gap={6}>
                      {/* Title */}
                      <Title order={5} lineClamp={2}>
                        {blog.title}
                      </Title>
  
                      {/* Description */}
                      <Text size="sm" c="dimmed" lineClamp={3}>
                        {blog.description}
                      </Text>
                    </Stack>
                  </Box>
  
                  {/* 📅 Footer (Always Bottom) */}
                  <Group justify="space-between" mt="md">
                    <Group gap={5}>
                      <FaUser size={12} />
                      <Text size="xs">{blog.author}</Text>
                    </Group>
  
                    <Group gap={5}>
                      <FaCalendarAlt size={12} />
                      <Text size="xs">{blog.date}</Text>
                    </Group>
                  </Group>
                </Card>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    );
  }
  
  export default BlogSection;