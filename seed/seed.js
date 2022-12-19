import mongoose from "mongoose"
import connection from "../db/connection.js"
import data from "../db/characters.json" assert { type: "json" }
import Character from "../models/Character.js"

let charData = data.map(item => {
    const char = {};
    char.id = item.id;
    char.firstName = item.firstName;
    char.lastName = item.lastName;
    char.fullName = item.fullName;
    char.title = item.title;
    char.family = item.family;
    char.image = item.image;
    char.imageUrl = item.imageUrl;

    return char;
})

Character  
    .deleteMany({})
    .then(() => Character.create(charData))
    .then(() => console.log("Characters listed!"))
    .then(() => mongoose.disconnect())
    .catch(error => console.error ("oops characters failed", error))
