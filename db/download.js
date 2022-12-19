import fetch from "node-fetch"
import { promises as fsPromises } from "fs"

fetch("https://thronesapi.com/api/v2/Characters")
    .then (res => res.json())
    .then (data => {
        fsPromises.writeFile("./db/characters.json", JSON.stringify(data))
    })
    .catch (err => console.error(err))

fetch("https://thronesapi.com/api/v2/Continents")
    .then (res => res.json())
    .then (data => {
        fsPromises.writeFile("./db/continents.json", JSON.stringify(data))
    })
    .catch (err => console.error(err))
    