import { validationResult } from "express-validator";
import { Note } from "../models/note.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiRsponse } from "../utils/ApiRsponse.js";
import { tryCatch } from "../utils/helper.js";


const addNote = tryCatch(async (req, res) => {
    const result = validationResult(req)
    if (result.isEmpty()) {

        const body = req.body

        if (!req.user) {
            throw new ApiError(400, "Please Login First");
        }
        body.user = req.user._id
        const note = await Note.create(body)

        if (!note) {
            throw(new ApiError(400, "Something went wrong"));
        }

        res.json(new ApiRsponse(200, "note is added successfully"))
        return
    }

    res.json({ errors: result.array() });
})

const getNotes = tryCatch(async (req, res) => {
    if (!req.user) {
        throw(new ApiError(400, "Please Login First"));
    }

    const notes = await Note.find({ user: req.user._id }).select("-user")
    if (!notes || notes.length < 1) {
        throw(new ApiError(400, "No notes available"))
    }

    res.json(new ApiRsponse(200, "Notes are available", notes))
})

const getNotesById = tryCatch(async (req, res) => {
    if (!req.user) {
        throw(new ApiError(400, "Please Login First"));
    }

    const notes = await Note.find({ user: req.user._id, _id: req.params.id })
    if (!notes || notes.length < 1) {
        throw(new ApiError(400, "No notes available"))
    }

    res.json(new ApiRsponse(200, "Notes are available", notes[0]))
})

const updateNote = tryCatch(async (req, res) => {
    const result = validationResult(req)
    if (result.isEmpty()) {

        const body = req.body
        if (!req.user) {
            throw(new ApiError(400, "Please Login First"));
        }

        const notes = await Note.findOneAndUpdate({ user: req.user._id, _id: req.params.id }, body,{new:true});
        if (!notes || notes.length < 1) {
            throw(new ApiError(400, "No notes available"))
        }

        res.json(new ApiRsponse(200, "Notes are available", notes))
        return
    }

    res.json({ errors: result.array() });
})

const deleteNote = tryCatch(async (req, res) => {
    const body = req.body
        if (!req.user) {
           throw(new ApiError(400, "Please Login First"));
        }

        const notes = await Note.findOneAndDelete({ user: req.user._id, _id: req.params.id });
        if (!notes || notes.length < 1) {
            throw(new ApiError(400, "No notes available"))
        }

        res.json(new ApiRsponse(200, "Notes are available", notes))
})

export { addNote, getNotes, updateNote, getNotesById, deleteNote }