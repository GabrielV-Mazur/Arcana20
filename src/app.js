import express from 'express';

//autenticação e autorização
import { authMiddleware } from './middlewares/auth.middleware.js';
import errorMiddleware from './middlewares/error.middleware.js';
import logMiddleware from './middlewares/logger.middleware.js';


//routes
import healthcheckRoutes from './routes/healthcheck.routes.js';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import tableRoutes from './routes/table.routes.js';
import characterRoutes from './routes/character.routes.js';


const app = express();
app.use(express.json());
app.use(logMiddleware);

app.use('/api', healthcheckRoutes);
app.use('/api', userRoutes);
app.use('/api', authRoutes);

app.use('/api', authMiddleware, tableRoutes);
app.use('/api', authMiddleware, characterRoutes);

app.use(errorMiddleware);

export default app;
