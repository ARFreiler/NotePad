const fs = require("fs");
const uniqid = require("uniqid");
const noteData = require("../db/db.json");

module.exports = (app) => {
    app.get("/api/notes", (req, res) => res.json(noteData));

    app.post("/api/notes", (req, res) => {
        const newNote = req.body;
        newNote.id = uniqid();

        noteData.push(newNote);

        fs.writeFile("./db/db.json", JSON.stringify(noteData), (err) =>
            err ? console.error(err) : res.json(newNote)
        );

    });
};







