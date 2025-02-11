const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function connectDB() {
  try {
    await prisma.$connect();
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1); // Exit the app if database connection fails
  }
}

// Call the function to check the connection when the app starts
connectDB();

module.exports = prisma;

