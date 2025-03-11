import { body } from "express-validator"


const addNoteValidator=()=>{
    return [
        body("title").notEmpty(),
        body("content").notEmpty()
    ]
}

export {addNoteValidator}