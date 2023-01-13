import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Toolbar from "@mui/material/Toolbar";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const drawerWidth = "5vw";
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                height: "100vh",
                backgroundColor: "#1C315E",
              },
            }}
            open
          >
            <div style={{ backgroundColor: "#1C315E", marginLeft: "0.5vw" }}>
              <Link to={"/Home"}>
                <List sx={{ marginTop: "20vh" }}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <ViewQuiltIcon
                          sx={{ color: "white", fontSize: "2vw" }}
                        />
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                </List>
              </Link>
              <Divider />
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <PeopleAltIcon sx={{ color: "white", fontSize: "2vw" }} />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />
              <Link to={"/table"}>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <EventAvailableIcon
                          sx={{ color: "white", fontSize: "2vw" }}
                        />
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                </List>
              </Link>
              <Divider />
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <CurrencyRupeeIcon
                        sx={{ color: "white", fontSize: "2vw" }}
                      />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <NewspaperIcon sx={{ color: "white", fontSize: "2vw" }} />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <SettingsIcon sx={{ color: "white", fontSize: "2vw" }} />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />
            </div>
          </Drawer>
        </Box>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
        </Box>
      </Box>
    </div>
  );
}
