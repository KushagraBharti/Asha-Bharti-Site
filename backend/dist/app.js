"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// Import route files
const testimonialRoutes_1 = __importDefault(require("./routes/testimonialRoutes"));
const coachingRoutes_1 = __importDefault(require("./routes/coachingRoutes"));
const blogRoutes_1 = __importDefault(require("./routes/blogRoutes"));
const bookRoutes_1 = __importDefault(require("./routes/bookRoutes"));
const workshopRoutes_1 = __importDefault(require("./routes/workshopRoutes"));
const app = (0, express_1.default)();
const allowedOrigins = [
    'http://localhost:5173', // Local frontend
    'https://asha-bharti-site-frontend.vercel.app', // Deployed frontend URL
    'https://asha-bharti-site-frontend-kushagras-projects-5d330ca5.vercel.app', // Alternative frontend
    'https://asha-bharti-site-frontend-git-main-kushagras-projects-5d330ca5.vercel.app', // Branch frontend
];
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            console.error(`CORS error: Origin ${origin} not allowed`);
            callback(new Error('Not allowed by CORS'));
        }
    },
}));
/*
app.use(
  cors({
    origin: '*',
  })
);
*/
app.use(express_1.default.json());
/*
app.use((req, res, next) => {
  console.log(`Request Origin: ${req.headers.origin}`);
  console.log(`Request Path: ${req.path}`);
  console.log(`Request Method: ${req.method}`);
  next();
});
*/
// API routes
app.use('/api', testimonialRoutes_1.default);
app.use('/api', coachingRoutes_1.default);
app.use('/api', blogRoutes_1.default);
app.use('/api', bookRoutes_1.default);
app.use('/api', workshopRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Backend server is running!');
});
exports.default = app;
