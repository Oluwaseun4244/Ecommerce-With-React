import Button from "./Button";
import { useCart } from "react-use-cart";
import { PaystackConsumer } from "react-paystack";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import addCommas  from '.././Context/addComma';

function CartTotals({ pageprop, grayed }) {
  const navigate = useNavigate();
  let page = pageprop || false;

  // const addCommas = (num) =>
  //   num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, "");

  const { items, totalItems, cartTotal, emptyCart } = useCart();

  const user = JSON.parse(localStorage.getItem("user"));
  const reference = new Date().getTime().toString();
  const config = {
    reference,
    email: `${user.email}`,
    amount: `${Math.round(cartTotal + cartTotal * 0.075) * 100}`,
    publicKey: "pk_test_4fedad5180c7c3bef0d5d1b764c4ce546822c62b",
  };

  const saveOrder = () => {
    items.map((item) => {
      let payload = {
        user_id: `${user.id}`,
        product_id: `${item.id}`,
        product_qty: `${item.quantity}`,
        product_price: `${item.price}`,
        product_total: `${item.itemTotal}`,
        trans_total: `${Math.round(cartTotal + cartTotal * 0.075)}`,
        trans_ref: `${config.reference}`,
        trans_status: "pending",
      };

      fetch("http://localhost:8000/api/add_transaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log("did it work?", response);
        })
        .catch();
    });
  };

  const handleSuccess = () => {
    fetch(`http://localhost:8000/api/update_status/${reference}`)
      .then((response) => response.json())
      .then((updated) => {})
      .catch((error) => {
        console.log(error);
      });

    emptyCart();
    navigate("/completed");
  };

  const handleClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    onSuccess: (reference) => handleSuccess(reference),
    onClose: handleClose,
  };

  let total = Math.round(cartTotal + cartTotal * 0.075);

  return (
    <div className="total-checkout">
      <h4 className="mt-2 cart-total-txt">
        Subtotals{" "}
        <span style={{ float: "right" }}>
          N{addCommas(cartTotal)}
          {/* N{addCommas(removeNonNumeric(cartTotal))} */}
        </span>
      </h4>
      <hr />
      <h4 className="mt-4 cart-total-txt2">
        Total Quantity <span style={{ float: "right" }}>{totalItems}</span>
      </h4>
      <hr />
      <h4 className="mt-4 cart-total-txt2">
        Total + VAT{" "}
        <span style={{ float: "right" }}>
        N{addCommas(total)}
          {/* N{addCommas(removeNonNumeric(total))} */}
        </span>
      </h4>
      <hr />
      <input className="mt-4" type="checkbox" />
      <label
        style={{ marginLeft: "4px" }}
        htmlFor=""
        className="cart-total-txt3"
      >
        Shipping & taxes calculated at checkout
      </label>
      {!page ? (
        <Link to="/proceed">
          <Button
            btnClass={`${grayed} || proceed-btn2 mt-4`}
            btnText="Proceed To Checkout"
          />
        </Link>
      ) : (
        <PaystackConsumer {...componentProps}>
          {({ initializePayment }) => (
            <Button
              btnFunc={() => {
                fetch("http://localhost:8000/api/products")
                  .then((response) => response.json())

                  .then(function (data) {
                    saveOrder();
                    initializePayment(handleSuccess, handleClose);
                  });
              }}
              btnClass="proceed-btn2 mt-4"
              btnText="Proceed To Checkout"
            />
          )}
        </PaystackConsumer>
      )}
    </div>
  );
}

export default CartTotals;
