import { useState } from "react";
import Button from "../button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  const [name, setName] = useState("Rahul");
  const [email, setEmail] = useState("Rahul@gmail.com");
  const [text, setText] = useState("Hey !");

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize={"24px"} />}
          />
          <Button text="VIA CALL" icon={<MdAddCall fontSize={"24px"} />} />
        </div>
        <Button
          isSecondary={true}
          text="VIA EMAIL FORM"
          icon={<MdEmail fontSize={"24px"} />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_controller}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
            <div className={styles.form_controller}>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" />
            </div>
            <div className={styles.form_controller}>
              <label htmlFor="text">Text</label>
              <textarea name="text" rows={5} />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginTop: "24px",
            }}
          >
            <Button text="SUBMIT" />
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img
          src="images\Service 24_7-pana 1.svg"
          alt="Image of girl"
          style={{ height: "515px" }}
        />
      </div>
    </section>
  );
};

export default ContactForm;
