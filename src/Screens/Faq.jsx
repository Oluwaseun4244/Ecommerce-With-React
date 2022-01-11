import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";
import QandA from "../Components/QandA";

function Faq() {
  const [faqs, setFaq] = useState([]);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = () => {
    let payload = {
      name: name,
      subject: subject,
      message: message,
    };

    fetch("http://localhost:8000/api/add_question", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(response => response.json())
      .then(response => {
        console.log("did it work?", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const getFaqs = () => {
    fetch("http://127.0.0.1:8000/api/faqs")
      .then((response) => response.json())
      .then((faqs) => {
        setFaq(faqs);
        console.log("this is my faq", faqs);
      });
  };

  useEffect(() => {
    getFaqs();
  }, []);

  return (
    <div>
      <Nav />
      <Header desc="Faq" />
      <MobileNav desc="Faq" />
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6 mt-5">
            <h3 id="general-info">General Information</h3>
            {faqs.map((faq, index) => {
              return (
                <QandA
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              );
            })}
          </div>

          <div className="col-lg-6">
            <div className="faq-card mt-5">
              <h3 className="onef mt-5 ms-5">Ask Question</h3>
              <input
                type="text"
                placeholder="Your Name*"
                className="input mt-5"
                onChange={(ev) => setName(ev.target.value)}
              />

              <input
                type="text"
                placeholder="Subject*"
                className="input mt-4"
                onChange={(ev) => setSubject(ev.target.value)}
              />

              <textarea
                name=""
                id=""
                style={{ resize: "none" }}
                cols="10"
                rows="10"
                placeholder="Type your Message*"
                className="area mt-5"
                onChange={(ev) => setMessage(ev.target.value)}
              ></textarea>

              <div className="btm ms-5 mt-5">
                <Button
                  type="button"
                  btnFunc={handleMessage}
                  btnText={"Send Mail"}
                  btnClass={"faq-btn"}
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Faq;
