const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

// initialize express
const app = express();

// Enable body parser (Middleware)
// enables accepting body data that comes through request.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//connect to openai routes
app.use("openai", require("./routes/openaiRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
