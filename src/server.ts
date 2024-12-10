import express from "express";
import userRouter from "./routes/userRoutes";
import medicationRouter from "./routes/medicationRoutes";
import dotenv from "dotenv";
import cors from "cors";  // Importa el paquete cors

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; 

// Habilitar CORS para todas las rutas
app.use(cors());  // Esto permite que tu API acepte solicitudes desde cualquier origen

// Si deseas permitir solo solicitudes de un dominio específico, puedes configurarlo así:
app.use(cors({
  origin: "*" // Solo permitirá solicitudes de este dominio
}));

app.use(express.json());

// Rutas principales
app.use("/api", userRouter);
app.use("/api/manage", medicationRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
