import dotenv from "dotenv";
dotenv.config();
console.log("Loaded GROQ:", process.env.GROQ_API_KEY);

import app from "./app.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});