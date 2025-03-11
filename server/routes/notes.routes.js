import express from "express"
import { addNote, deleteNote, getNotes, getNotesById, updateNote } from "../controllers/notes.js"
import { addNoteValidator } from "../validators/notes.js"
import { getUser } from "../middleware/user.middleware.js"

const routes=express.Router()

routes.post("/add",addNoteValidator(),getUser,addNote)
routes.get("/read",getUser,getNotes)
routes.get("/read/:id",getUser,getNotesById)
routes.put("/update/:id",getUser,updateNote)
routes.delete("/delete/:id",getUser,deleteNote)

export default routes