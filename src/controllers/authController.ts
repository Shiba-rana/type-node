import { Request, Response } from "express";
import Contact from "../models/crmModel.js";

// Add contact
const addContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.status(201).send(savedContact);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get all contacts
const getAllContacts = async (req: Request, res: Response): Promise<void> => {
  try {
    const contacts = await Contact.find({});
    res.status(200).send(contacts);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get contact by ID
const getContactById = async (req: Request, res: Response): Promise<void> => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.status(200).send(contact);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update contact by ID
const updateContactById = async (req: Request, res: Response): Promise<void> => {
  try {
    const contact = await Contact.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true },
    );
    res.status(200).send(contact);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Delete contact by ID
const deleteContactById = async (req: Request, res: Response): Promise<void> => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    res.status(200).send(contact);
  } catch (error) {
    res.status(500).send(error);
  }
};

export {
  addContact,
  getAllContacts,
  getContactById,
  updateContactById,
  deleteContactById,
};
