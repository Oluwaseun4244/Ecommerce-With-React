import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import CartTotals from "../Components/CartTotals";
import CheckoutProduct from "../Components/CheckoutProduct";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";
import { useCart } from "react-use-cart";
import notify  from '.././Context/userContext';
// import { ToastContainer, Zoom, toast } from "react-toastify";
// toast.configure();


// const warning = (message) => {
//   toast.warn(message, {
//     position: toast.POSITION.TOP_CENTER,
//     autoClose: 2500,
//     toastId: "01",
//     transition: Zoom,
//   });
// };

// const notify = (message) => {
//   toast.success(message, {
//     position: toast.POSITION.TOP_CENTER,
//     autoClose: 2500,
//     toastId: "01",
//     transition: Zoom,
//   });
// };


function ShippingInfo() {
  let user = JSON.parse(localStorage.getItem("user"));
  // const [errorMsg, setErrorMsg] = useState();
  const [contactUser, setContactUser] = useState(false);

  const { items } = useCart();

  const [contact, setContact] = useState({
    user_id: `${user.id}`,
    email_or_phone: "",
    first_name: "",
    last_name: "",
    address: "",
    apartment_address: "",
    city: "",
    country: "",
    postal_code: "",
  });



  const handleChange = (e) => {
    setContact({ ...contact, [e.target.id]: e.target.value });
  };

  const handleContact = () => {
    const payload = {
      user_id: `${user.id}`,
      email_or_phone: `${contact.email_or_phone}`,
      first_name: `${contact.first_name}`,
      last_name: `${contact.last_name}`,
      address: `${contact.address}`,
      apartment_address: `${contact.apartment_address}`,
      city: `${contact.city}`,
      country: `${contact.country}`,
      postal_code: `${contact.postal_code}`,
    };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(payload),
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/add_contact", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        notify("Contact info has been saved", "success")
      })
      .catch((error) => console.log("error", error));
  };

  const contactUpdate = () => {
    const payload2 = {
      ...contact

    };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions2 = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(payload2),
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/update_contact", requestOptions2)
      .then((response) => response.json())
      .then((result) => {
        if (result === 1){

          notify("Contact info has been updated", "success")
        } else {
          notify("Ensure all fields are filled", "warn")
          console.log(result)
        }
      })
      .catch((error) => console.log("error", error));
  };

  const getContact = () => {
    fetch(`http://127.0.0.1:8000/api/get_contact/${user.id}`)
      .then((response) => response.json())
      .then((user_contact) => {
        if (user_contact.length > 0) {
          setContactUser(true);
          setContact(user_contact[0]);

        } else {
          console.log("contact not found for logged in user");
        }
      });
  };


  useEffect(() => {
    getContact();
  }, []);

  return (
    <div>
      <Nav />
      <Header desc="Hekto Demo" />
      <MobileNav desc="Hekto Demo" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h4 className="demo-txt">Hecto Demo</h4>
            <p className="demo-Ptxt">Cart/ Information/ Shipping/ Payment</p>

            <div className="info-div">
              {/* <p style={{ textAlign: "center", color: "red" }}>{errorMsg}</p> */}
              <h5 className="contact-info">Contact Information</h5>

              <div>
                <input
                  required
                  id="email_or_phone"
                  onChange={handleChange}
                  // value={contact.email_or_phone}
                  value={contact.email_or_phone}
                  className="checkout-input"
                  type="text"
                  placeholder="Email or mobile phone number"
                />

                <input className="checkout-input-checkbox" type="checkbox" />
                <label className="input-checkbox-label" htmlFor="">
                  Keep me up to date on news and excluive offers
                </label>

                <div className="row shipping-add-div">
                  <h4 className="shipping-txt">Shipping Address</h4>
                  <div className="col-lg-6">
                    <input
                      required
                      id="first_name"
                      value={contact.first_name}
                      onChange={handleChange}
                      className="checkout-input2"
                      type="text"
                      placeholder="First name"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      required
                      id="last_name"
                      value={contact.last_name}
                      onChange={handleChange}
                      className="checkout-input2"
                      type="text"
                      placeholder="Last name"
                    />
                  </div>
                </div>
            {/* <p style={{color:"red"}}>{error.address}</p> */}
                <input
                  id="address"
                  required
                  value={contact.address}
                  onChange={handleChange}
                  className="checkout-input2"
                  type="text"
                  placeholder="Address"
                />
                <input
                  id="apartment_address"
                  value={contact.apartment_address}
                  onChange={handleChange}
                  className="checkout-input2"
                  type="text"
                  placeholder="Appaetnentment,suit,e.t.c (optional)"
                />
                <input
                  required
                  id="city"
                  value={contact.city}
                  onChange={handleChange}
                  className="checkout-input2"
                  type="text"
                  placeholder="City"
                />

                <div className="row">
                  <div className="col-lg-6">
                    <input
                      required
                      id="country"
                      value={contact.country}
                      onChange={handleChange}
                      className="checkout-input2"
                      type="text"
                      placeholder="Bangladesh"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      required
                      id="postal_code"
                      value={contact.postal_code}
                      onChange={handleChange}
                      className="checkout-input2"
                      type="text"
                      placeholder="Postal Code"
                    />
                  </div>
                </div>
                {contactUser ? (
                  <Button
                    btnFunc={contactUpdate}
                    btnClass="proceed-btn"
                    btnText="Update Contact"
                  />
                ) : (
                  <Button
                    btnFunc={handleContact}
                    btnClass="proceed-btn"
                    btnText="Save Contact"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-4 checked-out-prod">
            {items.map((item, i) => {
              return (
                <CheckoutProduct
                  key={i}
                  image={item.product_image1}
                  name={item.product_name}
                  price={item.price}
                  qty={item.quantity}
                />
              );
            })}

            {contactUser ? (
              <CartTotals pageprop={true} />
            ) : (
              <div onClick={()=>notify("kindly fill contact form and save", "warn")}>
                <CartTotals grayed={"proceed-btn-gray"}/>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShippingInfo;
