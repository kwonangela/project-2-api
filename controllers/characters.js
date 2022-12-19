import Character from "../models/Character.js";

export const createChar = async (req, res) => {
    try {
        const char = new Character(req.body);
        await char.save()
        res.status(201).json(char);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: err.message
        });
    }
}

export const getChars = async (req, res) => {
    console.log('jhfghfkjgfkjg')
    try {
        const chars = await Character.find();
        res.json(chars);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message});
    }
};

export const getChar = async (req, res) => {
    console.log('jgfjhtdjdhdhgdhjffjkgfkjgkjggkjhgkjhg')
    try {
        const { id } = req.params;
        const char = await Character.findById(id);
  
        if (char) {
            return res.json(char);
        }
        res.status(404).json({ message: "Character not found!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

export const updateChar = async (req, res) => {
    try {
        const { id } = req.params;
        const char = await Character.findByIdAndUpdate(id, req.body);
        res.status(201).json(char);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: err.message});
    }
};

export const deleteChar = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Character.findByIdAndDelete(id);

        if (deleted) {
            return res.status(200).send("Character deleted!");
        }
        throw new Error ("Character not found");
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

