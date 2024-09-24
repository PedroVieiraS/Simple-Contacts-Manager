import "./contactslist.css";
import { STORAGE_SERVICE } from "../services/storage";
import { useEffect, useState } from "react";

export default function ContactsList() {
  const [contacts, setcontact] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); 
  const [editContact, setEditContact] = useState({ name: "", tel: "", email: "" }); 

  useEffect(() => {
    const initialContacts = STORAGE_SERVICE.listContacts();
    console.log("Initial Contacts:", initialContacts);
    setcontact(initialContacts);
  }, []);

  function removeContact(index) {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setcontact(updatedContacts);
    STORAGE_SERVICE.saveContacts(updatedContacts);
    console.log("Removed contact at index:", index);
  }

  
  function startEditing(index) {
    setEditingIndex(index);
    setEditContact(contacts[index].contacts);
  }

  function saveContact() {
    const updatedContacts = [...contacts];
    updatedContacts[editingIndex].contacts = editContact;
    setcontact(updatedContacts);
    STORAGE_SERVICE.saveContacts(updatedContacts);
    setEditingIndex(null); 
  }

  return (
    <div className="principaldiv2">
      <div className="contactdiv">
        <ul>
          {contacts.map((contact, index) => (
            <li key={index} className="contactli">
              {editingIndex === index ? (
                <div>
                  <p>
                    <strong>Name:</strong>
                    <input
                      type="text"
                      value={editContact.name}
                      onChange={(e) => setEditContact({ ...editContact, name: e.target.value })}
                    />
                  </p>
                  <p>
                    <strong>Phone:</strong>
                    <input
                      type="text"
                      value={editContact.tel}
                      onChange={(e) => setEditContact({ ...editContact, tel: e.target.value })}
                    />
                  </p>
                  <p>
                    <strong>Email:</strong>
                    <input
                      type="email"
                      value={editContact.email}
                      onChange={(e) => setEditContact({ ...editContact, email: e.target.value })}
                    />
                  </p>
                  <button className="btn-submit" onClick={saveContact}>
                    Salvar
                  </button>
                  <button className="btn-submit" onClick={() => setEditingIndex(null)}>
                    Cancelar
                  </button>
                </div>
              ) : (
                <div>
                  <p>
                    <strong>Name:</strong> {contact.contacts.name}
                  </p>
                  <p>
                    <strong>Phone:</strong> {contact.contacts.tel}
                  </p>
                  <p>
                    <strong>Email:</strong> {contact.contacts.email}
                  </p>
                  <button className="btn-submit" onClick={() => removeContact(index)}>
                    Deletar
                  </button>
                  <button className="btn-submit" onClick={() => startEditing(index)}>
                    Alterar
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
