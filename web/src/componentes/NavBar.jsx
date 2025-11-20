import { AppBar, Toolbar, Button, Stack } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

export default function NavBar() {
  const location = useLocation();

  return (
    <AppBar
      position="static"
      sx={{
        borderRadius: "12px",
        margin: "16px",
        width: "calc(100% - 32px)",
        backgroundColor: "#1976d2",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
      }}
    >
      <Toolbar>
        <Stack direction="row" spacing={2}>
          <Button
            color={location.pathname === "/" ? "secondary" : "inherit"}
            variant={location.pathname === "/" ? "contained" : "text"}
            component={RouterLink}
            to="/"
            startIcon={<ListAltIcon />}
            sx={{ fontWeight: "bold" }}
          >
            ALUNOS
          </Button>

          <Button
            color={location.pathname === "/novo" ? "secondary" : "inherit"}
            variant={location.pathname === "/novo" ? "contained" : "text"}
            component={RouterLink}
            to="/novo"
            startIcon={<PersonAddAlt1Icon />}
            sx={{ fontWeight: "bold" }}
          >
            NOVO ALUNO
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
