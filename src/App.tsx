import { useState } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      setSnackbarMessage("Preencha todos os campos!");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    const newUser: User = { id: Date.now(), name, email, phone };
    setUsers([...users, newUser]);

    setName("");
    setEmail("");
    setPhone("");

    setSnackbarMessage("Usuário cadastrado com sucesso!");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Cadastro de Usuários
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
          margin="normal"
        />

        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
          margin="normal"
        />

        <TextField
          label="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          fullWidth
          required
          margin="normal"
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          sx={{ mt: 2 }}
        >
          Cadastrar
        </Button>
      </form>

      <Typography variant="h6" sx={{ mt: 4 }}>
        Lista de Usuários
      </Typography>

      <Paper elevation={2} sx={{ mt: 2 }}>
        <List>
          {users.map((user) => (
            <ListItem key={user.id} divider>
              <ListItemText
                primary={user.name}
                secondary={`${user.email} — ${user.phone}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
      {/* Snackbar para feedback */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
