require("dotenv").config()
const express = require('express');

const app = express();

// Middleware
app.use(express.json())


const prot = process.env.PORT
app.listen(prot, () =>
  console.log(`🚀 Server running on port ${prot}`)
)