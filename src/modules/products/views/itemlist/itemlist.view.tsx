import React from "react";

import MediaCard from "../../components/card.component";
import { List, ListItem, Container } from "@mui/material";

const ItemList: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <List sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {[...Array(10)].map((_, index) => (
          <ListItem key={index}>
            <MediaCard />
          </ListItem>
        ))}
        <MediaCard />
      </List>
    </Container>
  );
};

export default ItemList;
