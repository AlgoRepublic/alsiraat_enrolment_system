const mongoose = require('mongoose')

const dbConnection = async () => {
  try {
    const connected = await mongoose.connect(
      `mongodb://127.0.0.1:27017/${process.env.DATABASE_NAME}`
    )

    if (connected) {
      console.log(`Connected to the MongoDB : ${process.env.DATABASE_NAME}`)
    } else {
      throw new Error(
        `Failed to connect with MongoDB : ${process.env.DATABASE_NAME}`
      )
    }

    return true
  } catch (err) {
    throw new Error(
      `Failed to connect with MongoDB : ${process.env.DATABASE_NAME}`
    )
  }
}

module.exports = dbConnection
