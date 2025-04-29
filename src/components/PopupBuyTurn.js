/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import PopupOTP from "../images/svgPopup/PopupCancel.svg";
import IconX from "../images/svgPopup/IconX.svg";
import "./styles.css";
import { callApi, mainUrl } from "../util/api/requestUtils";
import { useTranslation } from "react-i18next";
import gui from "../util/gui";

const PopupBuyTurn = ({ onClose, onSuccess }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const pricePerTurn = 10000; // Giá mỗi lượt

  const handlePayment = async () => {
    setDisabled(true);
    try {
      const totalAmount = quantity * pricePerTurn;

      const url = `${mainUrl}/api/payment/submit-order`;
      const params = new URLSearchParams({
        amount: totalAmount,
        orderInfo: `BUY_${quantity}_TURNS`
      });

      const res = await callApi(`${url}?${params}`, "POST");

      if (res.paymentUrl) {
        window.location.href = res.paymentUrl;
      } else {
        throw new Error("Failed to get payment URL");
      }
    } catch (error) {
      console.error("Payment error:", error);
      setDisabled(false);
      alert(t("paymentFailed"));
    }
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(value);
  };

  return (
    <>
      <div className="main-history ct-flex-col">
        <div
          style={{
            position: "relative",
            width: 330,
            height: gui.screenHeight,
            marginTop: 80,
          }}
        >
          <div
            onClick={onClose}
            style={{
              position: "absolute",
              zIndex: 10000,
              top: 10,
              right: -16,
              cursor: "pointer",
            }}
          >
            <img className="" src={IconX} alt="close" />
          </div>
          <div
            className="title-popup"
            style={{
              position: "absolute",
              left: 120,
              top: 7,
              color: "#4C2626",
              fontSize: 14,
              width: "100px",
              textAlign: "center"
            }}
          >
            {t("buyTurns")}
          </div>
          <div
            style={{
              position: "absolute",
              height: 130,
              width: "88%",
              top: 24,
              left: 8,
              padding: "24px 16px 0 16px",
              justifyContent: "center",
            }}
            className="ct-flex-col"
          >
            <div className="ct-flex-row" style={{ gap: 8 }}>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                style={{
                  width: 60,
                  height: 33,
                  border: "1px solid #B46C6C",
                  backgroundColor: "#FFF",
                  borderRadius: 8,
                  textAlign: "center",
                  fontSize: 14,
                }}
              />
            </div>

            <div style={{ fontSize: 12, marginTop: 6 }}>
              {t("pricePerTurn", { price: pricePerTurn.toLocaleString() })}
            </div>

            <div style={{ fontSize: 14, marginTop: 4, fontWeight: "bold" }}>
              {t("totalAmount")}: {(quantity * pricePerTurn).toLocaleString()} VND
            </div>

            <button
              style={{ marginTop: 8 }}
              onClick={handlePayment}
              className="button-ok"
              disabled={disabled}
            >
              {disabled ? t("processing...") : t("confirmBuy")}
            </button>
          </div>
          <img className="" src={PopupOTP} alt="popup" />
        </div>
      </div>
    </>
  );
};

export default PopupBuyTurn;