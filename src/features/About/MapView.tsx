import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Map } from "leaflet";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Container, Typography } from "@mui/material";
import { createMapWidget, addPopupToMapWidget } from "./mapWidget";

export function MapView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map | null>(null);
  const [popupContainer, setPopupContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (mapRef.current === null) {
      const map = createMapWidget(containerRef.current!);
      mapRef.current = map;
      const popupDiv = addPopupToMapWidget(map);
      setPopupContainer(popupDiv);
    }
  }, []);

  return (
    <Container ref={containerRef} sx={{ width: 800, height: 500, my: 2 }}>
      {popupContainer !== null && createPortal(<Greeting />, popupContainer)}
    </Container>
  );
}

function Greeting() {
  return (
    <Box>
       <Typography sx={{ fontSize: 12, color: "#FF0000" }}> Greetings from Germany! </Typography>
    <FavoriteIcon sx={{ fontSize: 14, color: "#000000" }} />
    <FavoriteIcon sx={{ fontSize: 14, color: "#FF0000"}} />
    <FavoriteIcon sx={{ fontSize: 14, color: "#FFD700"}} />
    </Box>
  );
}
