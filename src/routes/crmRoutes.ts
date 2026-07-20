import express from "express";
import {
  addContact,
  getAllContacts,
  getContactById,
  updateContactById,
  deleteContactById,
} from "../controllers/authController.js";

const routes = (app: express.Application) => {
    app.route('/contacts')
    .get((req, res, next) => {
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
    }, getAllContacts)

    // POST endpoint to add a new contact
    .post(addContact);

    app.route('/contacts/:id')
    .get(getContactById)
    .put(updateContactById)
    .delete(deleteContactById);
}

export default routes;