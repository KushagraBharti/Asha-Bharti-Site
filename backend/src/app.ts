import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: '*' // For now, allow all origins. Adjust later as needed.
}));

app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.send('Asha Bharti Backend is running!');
});

// Here we will add routes later, such as:
// app.use('/api/scheduling', schedulingRoutes);
// app.use('/api/events', eventsRoutes);

export default app;
