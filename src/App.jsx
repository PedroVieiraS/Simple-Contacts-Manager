import Header from "./components/Header";
import "./App.css";
import Form from "./components/Form";
import Contacts from "./components/contacts";

function App() {
  return (
    <>
      <div className="header1">
        <Header/>
        <Form/>
        <Contacts/>
      </div>
    </>
  );
}

export default App;
