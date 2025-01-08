import express from 'express';
import cors from 'cors';

// Import route files
import testimonialRoutes from './routes/testimonialRoutes';
import coachingRoutes from './routes/coachingRoutes';
import blogRoutes from './routes/blogRoutes';
import bookRoutes from './routes/bookRoutes';
import workshopRoutes from './routes/workshopRoutes';

const app = express();


const allowedOrigins = [
  'http://localhost:5173', // Local frontend
  'https://asha-bharti-site-frontend.vercel.app/', // Deployed frontend URL
  'https://asha-bharti-site-frontend-kushagras-projects-5d330ca5.vercel.app/', // Alternative frontend
  'https://asha-bharti-site-frontend-git-main-kushagras-projects-5d330ca5.vercel.app/', // Branch frontend
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.error(`CORS error: Origin ${origin} not allowed`);
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);

/*
app.use(
  cors({
    origin: '*',
  })
);
*/

app.use(express.json());

/*
app.use((req, res, next) => {
  console.log(`Request Origin: ${req.headers.origin}`);
  console.log(`Request Path: ${req.path}`);
  console.log(`Request Method: ${req.method}`);
  next();
});
*/

// API routes
app.use('/api', testimonialRoutes);
app.use('/api', coachingRoutes);
app.use('/api', blogRoutes);
app.use('/api', bookRoutes);
app.use('/api', workshopRoutes);

app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

export default app;