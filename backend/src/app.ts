import express from 'express';
import cors from 'cors';

// Import route files
import testimonialRoutes from './routes/testimonialRoutes';
import coachingRoutes from './routes/coachingRoutes';
import blogRoutes from './routes/blogRoutes';
import bookRoutes from './routes/bookRoutes';
import workshopRoutes from './routes/workshopRoutes';

const app = express();

app.use(cors({
  origin: '*' // For now, allow all origins. Adjust later as needed.
}));

// Parse JSON bodies
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.send('Asha Bharti Backend is running!');
});

// API routes
app.use('/api', testimonialRoutes);
app.use('/api', coachingRoutes);
app.use('/api', blogRoutes);
app.use('/api', bookRoutes);
app.use('/api', workshopRoutes);

export default app;
