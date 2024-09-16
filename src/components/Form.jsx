import "./form.css";
import { STORAGE_SERVICE } from "../services/storage";
import { useState } from "react";

export default function Form() {
  const [inputValue, setInputValue] = useState("");
  const [inputtel, setInputtel] = useState("");
  const [inputemail, setInputemail] = useState("");

  function click() {
    if (!inputValue) {
      return console.log("sem ninguem");
    }

    const newContacts = {
      name: inputValue,
      tel: inputtel,
      email: inputemail,
    };

    STORAGE_SERVICE.createContacts(newContacts);
    setInputValue("");
    setInputtel("");
    setInputemail("");
  }

  return (
    <div className="divprincipal">
      <div className="divl">
        <div>
          <h1>Register contact</h1>

          <form action="">
            <div className="formint">
              <label htmlFor="">Nome:</label>
              <input
                type="text"
                // value={setInputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
              />
            </div>

            <div className="formint">
              <label htmlFor="">Telefone:</label>
              <input
                type="tel"
                // value={setInputtel}
                onChange={(e) => setInputtel(e.target.value)}
                required
              />
            </div>

            <div className="formint">
              <label htmlFor="">Email:</label>
              <input
                // value={setInputemail}
                onChange={(e) => setInputemail(e.target.value)}
                type="email"
                required
              />
            </div>

            <button type="submit" onClick={click} className="btn-submit">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
