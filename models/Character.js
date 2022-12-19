import mongoose from "mongoose"

const characterSchema = new mongoose.Schema({
    charId: Number,
    firstName: String,
    lastName: String,
    fullName: String,
    title: String,
    family: String,
    image: String,
    imageUrl: String
})

export default mongoose.model("Character", characterSchema);

