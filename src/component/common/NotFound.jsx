import {
    Container,
    Title,
    Text,
    Button,
    Stack,
    Box,
  } from "@mantine/core";
  import { motion } from "framer-motion";
  import { Link } from "react-router-dom";
  import { FaArrowLeft } from "react-icons/fa";
  import { theme } from "../../theme";
  
  function NotFound() {
    return (
      <Box
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${theme.colors.darkBlue?.[8] || "#0b1c2c"}, #1e3a5f)`,
          padding: "20px",
        }}
      >
        <Container size="sm" style={{ textAlign: "center" }}>
          <Stack align="center" gap="md">
  
            {/* 🔥 404 Number */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Title
                style={{
                  fontSize: "clamp(80px, 15vw, 140px)",
                  fontWeight: 900,
                  color: theme.colors.orange[5],
                  lineHeight: 1,
                }}
              >
                404
              </Title>
            </motion.div>
  
            {/* 😕 Message */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Title order={2} c="white">
                Page Not Found
              </Title>
            </motion.div>
  
            {/* 📝 Description */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Text
                c="rgba(255,255,255,0.7)"
                size="md"
                style={{ maxWidth: 400 }}
              >
                The page you are looking for might have been removed,
                renamed, or is temporarily unavailable.
              </Text>
            </motion.div>
  
            {/* 🔙 Button */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                component={Link}
                to="/"
                size="md"
                color="orange"
                leftSection={<FaArrowLeft size={14} />}
                radius="md"
              >
                Back to Home
              </Button>
            </motion.div>
  
          </Stack>
        </Container>
      </Box>
    );
  }
  
  export default NotFound;