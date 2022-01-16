import { FaTimes } from "react-icons/fa";
import { useCart } from "react-use-cart";
import notify from ".././Context/userContext";
import addCommas  from '.././Context/addComma';
// import { ToastContainer, toast, Slide, Zoom, Flip, Bounce} from "react-toastify";

// toast.configure();
// const notify = () => {
//   toast.error("Product removed from cart", {
//     position: toast.POSITION.TOP_CENTER,
//     autoClose: 2000,
//     toastId: '02',
//     transition: Zoom
//   });
// };




function CartProduct({ img, price, qty, item, name }) {
  const { removeItem, updateItemQuantity } = useCart();

  const removeAndNotify = (itemId) => {
    removeItem(itemId);
    notify("Product removed from cart", "error");
  };

  return (
    <div>
      <FaTimes
        className="remove-product-icon"
        // style={{float:"right"}}
        onClick={() => removeAndNotify(item.id)}
      />
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-3 ">
              <img
                className="cart-img"
                src={`http://localhost:8000/${img}`}
                alt=""
              />
            </div>

            <div className="col-lg-9">
              <h6>{name}</h6>
              <p>Color: Brown </p>
              <p>Size: XL</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2">
          <p className="pt-4">N{addCommas(price)}</p>
        </div>
        <div className="col-lg-2">
          <div>
            <h6 className="pt-4">
              <i
                style={{ cursor: "pointer" }}
                class="fa fa-minus"
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              ></i>
              <span>{qty}</span>
              <span>
                <i
                  style={{ cursor: "pointer" }}
                  class="fa fa-plus"
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                ></i>
              </span>
            </h6>
          </div>
        </div>
        <div className="col-lg-2">
          <p className="pt-4">N{addCommas(price * qty)}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default CartProduct;
