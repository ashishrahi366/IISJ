import { Loader, Overlay } from "@mantine/core";

function LoaderOverlay({ visible }) {
  if (!visible) return null;

  return (
    <Overlay
      opacity={0.6}
      color="#000"
      zIndex={1000}
      blur={2}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loader size="lg" color="orange" />
      </div>
    </Overlay>
  );
}

export default LoaderOverlay;