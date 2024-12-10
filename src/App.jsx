import "./App.css";
import ContactForm from "./components/contactForm/ContactForm";
import ContactHeader from "./components/contactHeader/ContactHeader";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="container">
      <Navigation />
      <main className="main_container">
          <ContactHeader />
          <ContactForm />
      </main>
    </div>
  );
}

export default App;
