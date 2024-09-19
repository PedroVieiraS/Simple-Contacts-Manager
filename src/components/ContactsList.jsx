import "./contactslist.css";
import { STORAGE_SERVICE } from "../services/storage";
import { useEffect, useState } from "react";

export default function ContactsList() {
  const [contacts, setcontact] = useState([]);

  useEffect(() => {
    const initialContacts = STORAGE_SERVICE.listContacts();
    console.log("Initial Contacts:", initialContacts);
    setcontact(initialContacts);
  }, []);

  return (
    <div className="principaldiv2">
      <div className="contactdiv">
          <ul>
            {contacts.map((contact, index) => (
              <li key={index} className="contactli">
                <p>
                  <strong>Name:</strong> {contact.contacts.name}
                </p>
                <p>
                  <strong>Phone:</strong> {contact.contacts.tel}
                </p>
                <p>
                  <strong>Email:</strong> {contact.contacts.email}
                </p>
                <button className="btn-submit">Deletar</button>
                <button className="btn-submit">Alterar</button>
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
}
