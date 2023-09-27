import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler } from "react-hook-form";
import ICursorFunctions from "../Interface/ICursorFunctions";
import { useState } from "react";
import "./Contact.scss";

type Inputs = {
  name_from: string;
  email_from: string;
  num_from: Number;
  message: string;
};
function setSession() {
  // To set a cookie with a name "timeout" and a value of "true" for 3 hours
  const now = new Date();
  now.setTime(now.getTime() + 3 * 60 * 60 * 1000); // 3 hours in milliseconds
  const expires = `expires=${now.toUTCString()}`;
  document.cookie = `timeout=true; ${expires}; path=/Contact`; // You can specify the path as needed
}

function isSent() {
  let x = document.cookie;
  if (x) return true;
  return false;
}
//dotenv.config();
const publicKey = import.meta.env.VITE_PUBLIC_KEY || "null";
const serviceId = import.meta.env.VITE_SERVICE_ID || "null";
const templateId = import.meta.env.VITE_TEMPLATE_ID || "null";
function Contact({ cursorFunctions }: { cursorFunctions: ICursorFunctions }) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(JSON.stringify(data));
    setLoading(true);
    if (!sent && !loading) {
      emailjs.send(serviceId, templateId, data, publicKey).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setSession();
          setSent(true);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    } else {
      alert("Please wait 3 hours to send another message");
    }
    setLoading(false);
  };

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(isSent());
  return (
    <div id="Contact">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h5>You can send one message every 3 hours</h5>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            {...register("name_from")}
            id="name"
            onMouseOver={cursorFunctions.cursorAim}
            onMouseLeave={cursorFunctions.cursorDefault}
          ></input>
        </div>{" "}
        <hr></hr>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            onMouseOver={cursorFunctions.cursorAim}
            onMouseLeave={cursorFunctions.cursorDefault}
            {...register("email_from")}
            id="email"
          ></input>
        </div>
        <hr></hr>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <br />
          <div
            style={{ display: "Flex", alignItems: "center", fontSize: "30px" }}
          >
            +961/
            <input
              {...register("num_from")}
              id="phone"
              onMouseOver={cursorFunctions.cursorAim}
              onMouseLeave={cursorFunctions.cursorDefault}
            ></input>
          </div>
        </div>{" "}
        <hr></hr>
        <div>
          <label htmlFor="message">Message</label>
          <br />
          <textarea
            {...register("message")}
            id="message"
            onMouseOver={cursorFunctions.cursorAim}
            onMouseLeave={cursorFunctions.cursorDefault}
          ></textarea>
        </div>
        <hr></hr>
        <div style={{ width: "90%", marginTop: "20px" }}>
          <button
            type="submit"
            onMouseOver={cursorFunctions.cursorAim}
            onMouseLeave={cursorFunctions.cursorDefault}
          >
            {loading ? "Loading" : !loading && !sent ? "Send" : "Sent"}
          </button>
        </div>
      </form>
    </div>
  );
}
export default Contact;
