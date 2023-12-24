import { app } from "./app";
import { PORT } from "./env";

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));