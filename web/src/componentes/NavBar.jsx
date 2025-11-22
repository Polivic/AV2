import { AppBar, Toolbar, Button, Stack } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

export default function NavBar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar
      position="static"
      sx={{
        borderRadius: "12px",
        margin: "16px",
        width: "calc(100% - 32px)",
        backgroundColor: "#7b001c", // vinho escuro
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      <Toolbar>
        <Stack direction="row" spacing={2}>
          <Button
            color={isActive("/alunos") ? "secondary" : "inherit"}
            variant={isActive("/alunos") ? "contained" : "text"}
            component={RouterLink}
            to="/alunos"
            startIcon={<ListAltIcon />}
            sx={{ fontWeight: "bold"}}
          >
            ALUNOS
          </Button>

          <Button
            color={isActive("/novo") ? "secondary" : "inherit"}
            variant={isActive("/novo") ? "contained" : "text"}
            component={RouterLink}
            to="/novo"
            startIcon={<PersonAddAlt1Icon />}
            sx={{ fontWeight: "bold"}}
          >
            NOVO ALUNO
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
