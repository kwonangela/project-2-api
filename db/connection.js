import mongoose from "mongoose";
import chalk from "chalk";

let connectionConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.set("strictQuery", true);

// mongoose.connect("mongodb://127.0.0.1:27017/GOT-characters", connectionConfig).catch((err) => { console.log(`Error connecting to MongoDB: ${err.message}`)});
const url = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/example'

mongoose.connect(url , connectionConfig)

mongoose.connection.on('connected', () => console.log("Connected to database"));

mongoose.connection.on('disconnected', () => console.log(chalk.bold("Disconnected from database")));

mongoose.connection.on('error', (error) => console.log(chalk.red(`Database error: ${error}`)));

export default mongoose.connection;


