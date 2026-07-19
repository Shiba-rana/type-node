import mongoose from "mongoose";
import { contactSchema } from "../models/crmModel.js";

// Add contact
const addContact = async (req, res) => {
  let newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(contact);
    }
  });
};

// Get all contacts
const getAllContacts = async (req, res) => {
  Contact.find({}, (err, contacts) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(contacts);
    }
  });
};

// Get contact by ID
const getContactById = async (req, res) => {
  Contact.findById(req.params.id, (err, contact) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(contact);
    }
  });
};

// Update contact by ID
const updateContactById = async (req, res) => {
  Contact.findOneAndUpdate(
    { _id: req.params.contactId },
    req.body,
    { new: true },
    (err, contact) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(contact);
      }
    },
  );
};

// Delete contact by ID
const deleteContactById = async (req, res) => {
  Contact.findByIdAndRemove(req.params.id, (err, contact) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(contact);
    }
  });
};

export {
  addContact,
  getAllContacts,
  getContactById,
  updateContactById,
  deleteContactById,
};
