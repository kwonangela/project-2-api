import mongoose from "mongoose";

const contSchema = new mongoose.Schema({
    id: Number,
    name: String
});

export default mongoose.model("Continent", contSchema);