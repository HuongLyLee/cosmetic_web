import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  FORMAT_NUMBER,
  STRIPE_KEY,
  USER_CART_INFO,
  USER_INFO_KEY,
} from "../../../utils/contants";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  isVietnamesePhoneNumber,
  parseJSON,
  validateEmail,
} from "../../../utils/helpers";
import CustomDialog from "../../../components/CustomDialog";
import CustomInput from "../../../components/CustomInput";
import { productAPI } from "../../../services/productAPI";
import _ from "lodash";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { userAPI } from "../../../services/userAPI";

const PAYMENT_METHOD = [
  { label: "Ship COD ", value: "COD" },
  { label: "Payment Zalo", value: "VISA" },
];

const PICKUP_METHOD = [
  { label: "Giao hàng tận nơi", value: "SHIP" },
  { label: "Lấy tại cửa hàng", value: "PICKUP" },
];

function formatDate(date) {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

const stripeKey = loadStripe(STRIPE_KEY);

const calculateTotalPrice = (lstProduct) => {
  const total = lstProduct?.reduce((previous, next) => {
    if (
      Number(next.product_sale) > 0 &&
      Number(next.product_sale) !== Number(next.product_price)
    ) {
      return previous + Number(next.quantity) * Number(next.product_sale);
    } else {
      return previous + Number(next.quantity) * Number(next.product_price);
    }
  }, 0);
  return total || 0;
};

export default function CartPage() {
  const [cartProduct, setCartProduct] = useState([]);
  const [visibleCheckoutModal, setVisibleCheckoutModal] = useState(false);
  const [paymentOption, setPaymentOption] = useState("COD");
  const [pickUpOption, setPickUpOption] = useState("SHIP");
  const [userInfo, setUserInfo] = useState({});
  const [pickUpTime, setPickUpTime] = useState(formatDate(new Date()));

  const userData = parseJSON(localStorage.getItem(USER_INFO_KEY), {});
  const navigate = useNavigate();

  const getUserData = async () => {
    try {
      const userRes = await userAPI.getUserInfo(userData?._id);

      if (userRes?.success) {
        setUserInfo(userRes?.payload);
      }
    } catch (error) {
      console.log("get user data error: ", error);
    }
  };

  useEffect(() => {
    if (!userData?._id) {
      toast.error("Bạn cần đăng nhập để thực hiện chức năng này");
      navigate("/login");
    } else {
      getUserData();
    }
  }, []);

  useEffect(() => {
    (async () => {
      const currCart = localStorage.getItem(
        USER_CART_INFO + `_${userData?._id || ""}`
      )
        ? parseJSON(
          localStorage.getItem(USER_CART_INFO + `_${userData?._id || ""}`)
        )
        : [];
      setCartProduct(currCart);
    })();
  }, []);

  const handleCheckout = async (paymentId) => {
    const totalPrice = calculateTotalPrice(cartProduct);

    const checkoutResponse = await productAPI.checkoutCart(
      cartProduct,
      paymentOption,
      totalPrice,
      userInfo,
      paymentId,
      pickUpOption,
      pickUpTime
    );

    if (checkoutResponse?.success) {
      localStorage.removeItem(USER_CART_INFO + `_${userData?._id || ""}`);
      setCartProduct([]);
      setVisibleCheckoutModal(false);
      window.dispatchEvent(new Event("storage"));
      return true;
    }
    if (checkoutResponse?.message) {
      toast.error(checkoutResponse?.message);
    }
  };

  const changeProductQuantity = async (qlt, productId, type = "add") => {
    if (type !== "remove") {
      const currQuantity = await productAPI.getProductQuantity(productId);
      if (qlt > Number(currQuantity?.payload)) {
        return toast.error("Số lượng vượt quá số lượng hiện có");
      }
    }
    const currCart = [...cartProduct];
    const findIndex = currCart?.findIndex(
      (item) => item?.product_id === productId
    );
    if (findIndex >= 0) {
      currCart[findIndex].quantity = qlt;
      setCartProduct(currCart);
      localStorage.setItem(
        USER_CART_INFO + `_${userData?._id || ""}`,
        JSON.stringify(currCart)
      );
      window.dispatchEvent(new Event("storage"));
    }
  };

  return (
    <div className="container" style={{ marginTop: "170px" }}>
      <table id="cart" className="table table-hover table-condensed">
        <thead style={{ fontSize: "20px", color: "black" }}>
          <tr>
            <th style={{ width: "40%" }}>Tên sản phẩm</th>
            <th style={{ width: "18%" }}></th>
            <th style={{ width: "10%" }}>Đơn giá</th>
            <th style={{ width: "15%" }} className="text-center">Số tiền</th>
            <th style={{ width: "5%" }} />
          </tr>
        </thead>

        <tbody>
          {cartProduct?.map((cartItem, cartIndex) => {
            return (
              <tr key={`cart-item-${cartIndex}`}>
                <td data-th="Product">
                  <div className="row">
                    <div className="col-sm-2 hidden-xs">
                      <img
                        src={cartItem?.product_image} alt="..."
                        className="img-responsive"
                        width={60} height={60} placeholder="blur"
                      />
                    </div>

                    <div className="col-sm-10">
                      <h6
                        className="nomargin"
                        style={{
                          cursor: "pointer",
                          color: "#000",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                        onClick={() => navigate(`/product/${cartItem?.product_id}`)}
                      >
                        {cartItem?.product_name}
                      </h6>
                    </div>
                  </div>
                </td>

                <td data-th="Quantity" >
                  <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", border: "1px solid #e0e0e0", width: "fit-content", }} >
                    <div
                      style={{ padding: "2px", cursor: "pointer", }}
                      onClick={() => {
                        if (cartItem?.quantity - 1 > 0) {
                          changeProductQuantity(
                            Number(cartItem?.quantity) - 1,
                            cartItem?.product_id,
                            "remove"
                          );
                        }
                      }}
                    >
                      <RemoveIcon fontSize="small" sx={{ color: "black" }} />
                    </div>

                    <div
                      style={{
                        paddingTop: "2px", paddingBottom: "2px",
                        textAlign: "center", width: "50px",
                      }}
                    >
                      {cartItem?.quantity || 0}
                    </div>

                    <div style={{ padding: "2px", cursor: "pointer", }}
                      onClick={() => {
                        changeProductQuantity(
                          Number(cartItem?.quantity) + 1,
                          cartItem?.product_id
                        );
                      }}
                    >
                      <AddIcon fontSize="small" sx={{ color: "black" }} />
                    </div>
                  </div>
                </td>

                <td data-th="Price">
                  <span style={{ color: 'black' }}>
                    {cartItem.product_sale > 0 && cartItem.product_sale !== cartItem.product_price
                      ? FORMAT_NUMBER.format(Number(cartItem.product_sale)) + " đ"
                      : ""}
                  </span>
                  <br />
                  <span class="text-decoration-line-through">
                    {FORMAT_NUMBER.format(Number(cartItem.product_price))} đ
                  </span>
                </td>

                <td data-th="Subtotal" className="text-center">
                  {FORMAT_NUMBER.format(
                    Number(cartItem?.quantity) *
                    (cartItem.product_sale > 0 &&
                      cartItem.product_sale !== cartItem.product_price
                      ? Number(cartItem?.product_sale)
                      : Number(cartItem?.product_price))
                  )}{" "}
                  đ
                </td>

                <td className="actions" data-th>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => {
                      const currCart = [...cartProduct]?.filter(
                        (item) => item?.product_id !== cartItem?.product_id
                      );
                      localStorage.setItem(
                        USER_CART_INFO + `_${userData?._id || ""}`,
                        JSON.stringify(currCart)
                      );
                      window.dispatchEvent(new Event("storage"));
                      setCartProduct(currCart);
                    }}
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            <td>
              <a href="/" className="btn btn-warning ">
                <i className="fa fa-angle-left" /> Tiếp tục mua sắm
              </a>
            </td>
            <td colSpan={2} className="hidden-xs" />

            <td className="hidden-xs ">
              <strong style={{ whiteSpace: "nowrap" }}>
                Tổng: {FORMAT_NUMBER.format(calculateTotalPrice(cartProduct))} đ
              </strong>
            </td>
          </tr>
        </tfoot>
      </table>

      <div style={{ textAlign: "right" }}>
        <a
          className="btn btn-block"
          style={{
            backgroundColor: "black",
            color: "white",
            width: "fit-content",
            padding: "10px 20px",
            display: "inline-flex",
          }}
          onClick={() => {
            if (!cartProduct?.length) {
              return toast.error("Không có sản phẩm trong giỏ hàng");
            }
            setVisibleCheckoutModal(true);
          }}
        >
          <span>THANH TOÁN</span>
          <span style={{ marginLeft: "10px" }}>
            <i className="fa fa-angle-right" />
          </span>
        </a>
      </div>

      {visibleCheckoutModal && (
        <Elements stripe={stripeKey}>
          <PaymentDialog
            visible={visibleCheckoutModal}
            onClose={() => setVisibleCheckoutModal(false)}
            handleCheckout={(paymentId) => handleCheckout(paymentId)}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            changePaymentOption={(method) => setPaymentOption(method)}
            changePickUpOption={(option) => setPickUpOption(option)}
            changePickUpTime={(time) => setPickUpTime(time)}
            cartProduct={cartProduct}
          />
        </Elements>
      )}
    </div>
  );
}

const PaymentDialog = (props) => {
  const [paymentOption, setPaymentOption] = useState("COD");
  const [pickUpOption, setPickUpOption] = useState("SHIP");
  const [pickUpTime, setPickUpTime] = useState(formatDate(new Date()));
  const {
    visible,
    onClose,
    handleCheckout,
    userInfo,
    setUserInfo,
    changePaymentOption,
    cartProduct,
    changePickUpOption,
    changePickUpTime
  } = props;
  const stripe = useStripe();
  const elements = useElements();

  return (
    <CustomDialog
      onClose={() => onClose()}
      visible={visible}
      title="Xác nhận thanh toán"
      closeTitle="Đóng"
      closeSubmitTitle="Xác nhận"
      handleSubmit={async () => {
        const { first_name, last_name, email, address, phone_number } =
          userInfo;

        const checkNull = _.compact([
          first_name,
          last_name,
          email,
          address,
          phone_number,
        ]);
        if (checkNull.length < 5) {
          toast.error("Thông tin không được để trống");
          return '';
        }

        if (!isVietnamesePhoneNumber(phone_number)) {
          toast.error("Số điện thoại sai định dạng");
          return '';
        }

        if (!validateEmail(email)) {
          toast.error("Email sai định dạng");
          return '';
        }

        if (paymentOption === "VISA") {
          if (!stripe || !elements) {
            return toast.error("Cần nhập đầy đủ thông tin thanh toán");
          }

          const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
            billing_details: {
              email: userInfo?.email,
              phone: userInfo?.phone_number,
              name: userInfo?.first_name + " " + userInfo?.last_name,
            },
          });

          if (!error) {
            const { id } = paymentMethod;
            return handleCheckout(id);
          } else {
            return toast.error("Thanh toán thất bại, vui lòng thử lại sau");
          }
        }
        return handleCheckout();
      }}
      maxWidth="700px"
      width="700px"
    >
      <h5>Thông tin người nhận hàng</h5>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ width: "48%" }}>
          <CustomInput
            label="Họ"
            id="post-title"
            variant="filled"
            style={{ marginTop: 11, textAlign: "left" }}
            value={userInfo?.first_name}
            onChange={(event) =>
              setUserInfo({
                ...userInfo,
                first_name: event.target.value,
              })
            }
          />
        </div>
        <div style={{ width: "48%" }}>
          <CustomInput
            label="Tên"
            id="post-title"
            variant="filled"
            style={{ marginTop: 11, textAlign: "left" }}
            value={userInfo?.last_name}
            onChange={(event) =>
              setUserInfo({
                ...userInfo,
                last_name: event.target.value,
              })
            }
          />
        </div>
      </div>
      
      <CustomInput
        label="Số điện thoại"
        id="post-title"
        variant="filled"
        style={{ marginTop: 11, textAlign: "left" }}
        value={userInfo?.phone_number}
        onChange={(event) =>
          setUserInfo({
            ...userInfo,
            phone_number: event.target.value,
          })
        }
      />
      <CustomInput
        label="Email"
        id="post-title"
        variant="filled"
        style={{ marginTop: 11, textAlign: "left" }}
        value={userInfo?.email}
        onChange={(event) =>
          setUserInfo({ ...userInfo, email: event.target.value })
        }
      />

      <CustomInput
        label="Địa chỉ"
        id="post-title"
        variant="filled"
        style={{ marginTop: 11, textAlign: "left" }}
        value={userInfo?.address}
        onChange={(event) =>
          setUserInfo({
            ...userInfo,
            address: event.target.value,
          })
        }
      />
      {/* <hr /> */}

      {/* <h5 style={{ textAlign: "center", marginTop: "20px" }}>
        Phương thức lấy hàng
      </h5> */}

      {/* <div style={{ marginTop: "10px" }}>
        {PICKUP_METHOD?.map((item, index) => (
          <label
            key={`pickup-item-${index}`}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              borderRadius: "8px",
              padding: "10px 20px",
              backgroundColor: pickUpOption === item?.value ? "rgb(60,185,20)" : "white",
              width: "30%",
              textAlign: "center",
              transition: "all 0.3s ease",
            }}
          >
            <input
              type="radio"
              name="pickup-option"
              value={item?.value}
              checked={pickUpOption === item?.value}
              onChange={() => {
                setPickUpOption(item?.value);
                changePickUpOption(item?.value);
              }}
            />
            <span style={{ marginLeft: "10px", color: pickUpOption === item?.value ? "white" : "black" }}>
              {item?.label}
            </span>
          </label>
        ))}
      </div> */}

      {/* {pickUpOption === "PICKUP" ? (
        <div
          style={{ marginLeft: "30px", marginRight: "30px", marginTop: "20px" }}
        >
          <label>Thời gian dự kiến đến lấy</label>
          <br />
          <input
            style={{
              width: "100%",
              marginTop: "10px",
              border: "1px solid #e2e2e1",
              padding: "10px 20px",
            }}
            type={"date"}
            value={pickUpTime}
            onChange={(event) => {
              setPickUpTime(event?.target?.value)
              changePickUpTime(event?.target?.value)
            }}
          />
        </div>
      ) : (
        <></>
      )} */}

      <hr />
      {/* <h5 style={{ textAlign: "center", marginTop: "20px" }}>
        Phương thức thanh toán
      </h5>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        {PAYMENT_METHOD?.map((item, index) => {
          return (
            <div
              key={`payment-item-${index}`}
              onClick={() => {
                setPaymentOption(item?.value);
                changePaymentOption(item?.value);
              }}
              style={{
                padding: "30px",
                border: "1px solid rgb(60,185,20)",
                background:
                  paymentOption === item?.value ? "rgb(60,185,20)" : "white",
                width: "40%",
                cursor: "pointer",
              }}
            >
              {item?.label}
            </div>
          );
        })}
      </div> */}

      <div style={{ marginTop: "20px" }}>
        <h5 style={{ marginTop: "20px" }}>
          Phương thức thanh toán
        </h5>
        <div style={{ marginTop: "20px" }}>
          {PAYMENT_METHOD?.map((item, index) => (
            <label
              key={`payment-item-${index}`}
              style={{
                display: "block", 
                padding: "15px 20px",
                border: "1px solid #000",
                background: paymentOption === item?.value ? "grey" : "white",
                width: "50%", 
                cursor: "pointer",
                borderRadius: "8px", 
                textAlign: "center", 
                marginBottom: "10px", 
                transition: "all 0.3s ease", 
                boxShadow: paymentOption === item?.value ? "0 4px 8px rgba(0,0,0,0.2)" : "none", 
              }}
            >
              <input
                type="radio"
                name="payment-option"
                value={item?.value}
                checked={paymentOption === item?.value}
                onChange={() => {
                  setPaymentOption(item?.value);
                  changePaymentOption(item?.value);
                }}
                style={{ display: "none" }}
              />
              <span style={{ color: paymentOption === item?.value ? "white" : "black" }}>
                {item?.label}
              </span>
            </label>
          ))}
        </div>
      </div>

{/* 
      {paymentOption === "VISA" ? (
        <Box
          sx={{ marginTop: "30px", marginLeft: "30px", marginRight: "30px" }}
        >
          <CardElement id="stripe-card-element" onChange={() => { }} />
        </Box>
      ) : (
        <></>
      )} */}

      <hr />
      
      <h6 style={{ color: "", textAlign: "right" }}>
        Tổng tiền thanh toán:{" "}
        {FORMAT_NUMBER.format(calculateTotalPrice(cartProduct))}đ
      </h6>
    </CustomDialog>
  );
};
