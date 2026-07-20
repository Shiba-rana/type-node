"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authController_js_1 = require("../controllers/authController.js");
const routes = (app) => {
    app.route('/contacts')
        .get((req, res, next) => {
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
    }, authController_js_1.getAllContacts)
        // POST endpoint to add a new contact
        .post(authController_js_1.addContact);
    app.route('/contacts/:id')
        .get(authController_js_1.getContactById)
        .put(authController_js_1.updateContactById)
        .delete(authController_js_1.deleteContactById);
};
exports.default = routes;
