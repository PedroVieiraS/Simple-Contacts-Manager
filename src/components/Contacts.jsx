import "./contacts.css"
import ContactsList from "./ContactsList"

export default function Contacts() {
  return (
    <div className="principaldiv">
        <div className="divcontacts">
            <h1>Contacts</h1>
            <ContactsList/>
        </div>
    </div>
  )
}
