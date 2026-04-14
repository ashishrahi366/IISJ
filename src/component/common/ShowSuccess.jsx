import { notifications } from "@mantine/notifications";

export function showSuccess() {
  notifications.show({
    title: "Success 🎉",
    message: "We received your email. We'll contact you soon!",
    color: "green",
  });
}