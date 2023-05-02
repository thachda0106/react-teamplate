import React from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";

interface PropsType {
  isOpen: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<PropsType> = ({ isOpen, setOpenMenu }) => {
  const navigate = useNavigate();
  const list = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem onClick={() => setOpenMenu(false)} key={"Products"} disablePadding>
          <ListItemButton onClick={() => navigate("/products")}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem onClick={() => setOpenMenu(false)} key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer anchor={"left"} open={isOpen}>
      {list}
    </Drawer>
  );
};

export default Menu;
