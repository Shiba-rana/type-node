"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContactById = exports.updateContactById = exports.getContactById = exports.getAllContacts = exports.addContact = void 0;
const crmModel_js_1 = __importDefault(require("../models/crmModel.js"));
// Add contact
const addContact = async (req, res) => {
    try {
        const newContact = new crmModel_js_1.default(req.body);
        const savedContact = await newContact.save();
        res.status(201).send(savedContact);
    }
    catch (error) {
        res.status(500).send(error);
    }
};
exports.addContact = addContact;
// Get all contacts
const getAllContacts = async (req, res) => {
    try {
        const contacts = await crmModel_js_1.default.find({});
        res.status(200).send(contacts);
    }
    catch (error) {
        res.status(500).send(error);
    }
};
exports.getAllContacts = getAllContacts;
// Get contact by ID
const getContactById = async (req, res) => {
    try {
        const contact = await crmModel_js_1.default.findById(req.params.id);
        res.status(200).send(contact);
    }
    catch (error) {
        res.status(500).send(error);
    }
};
exports.getContactById = getContactById;
// Update contact by ID
const updateContactById = async (req, res) => {
    try {
        const contact = await crmModel_js_1.default.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.status(200).send(contact);
    }
    catch (error) {
        res.status(500).send(error);
    }
};
exports.updateContactById = updateContactById;
// Delete contact by ID
const deleteContactById = async (req, res) => {
    try {
        const contact = await crmModel_js_1.default.findByIdAndDelete(req.params.id);
        res.status(200).send(contact);
    }
    catch (error) {
        res.status(500).send(error);
    }
};
exports.deleteContactById = deleteContactById;
