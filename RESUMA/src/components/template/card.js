import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./ImageCardStyles.css";

export default function ImageCard({ place, checked }) {
  return (
    <Card className="rootCard">
      <CardMedia className="media" image={place.imageUrl} title={place.title} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className="titleCard"
        >
          {place.title}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          style={{ color: "#6f42c1" }}
          className="description"
        >
          {place.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
