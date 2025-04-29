/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import PopupHistory1 from "../images/svgPopup/PopupHistory.svg";
import IconX from "../images/svgPopup/IconX.svg";
import "./styles.css";
import { callApi, mainUrl } from "../util/api/requestUtils";
import { useTranslation } from "react-i18next";
import gui from "../util/gui";
import moment from "moment";

const PopupLeaderboard = ({ onClose }) => {
  const { t } = useTranslation();
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const url = mainUrl + "/api/user/top-stars?top=10";
      const res = await callApi(url, "GET", {});
      setLeaderboardData(res || []);
    } catch (error) {
      console.log("error", error);
    }
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
            style={{
              position: "absolute",
              left: 134,
              color: "#4C2626",
            }}
          >
            {t("Leaderboard")}
          </div>

          <div
            style={{
              position: "absolute",
              height: 387,
              width: "100%",
              top: 26,
              left: 4,
              padding: "30px 16px 16px 16px",
            }}
          >
            <div
              className="ct-flex-row"
              style={{
                justifyContent: "space-between",
                width: 300,
                marginTop: 10,
                color: "#EBB859",
                fontSize: 12,
              }}
            >
              <div>{t("Rank")}</div>
              <div>{t("Username")}</div>
              <div>{t("Stars")}</div>
            </div>
            <div
              style={{
                height: 280,
                width: "90%",
                overflow: "auto",
              }}
            >
              {leaderboardData.map((user, index) => (
                <div
                  key={user.id}
                  className="ct-flex-row"
                  style={{
                    justifyContent: "space-between",
                    width: "96%",
                    fontSize: 13,
                    height: 25,
                    borderRadius: 3,
                    marginBottom: 8,
                    backgroundColor: "#B46C6C",
                    padding: "0 6px",
                  }}
                >
                  <div>#{index + 1}</div>
                  <div>{user.username}</div> {/* Hoặc username nếu có */}
                  <div>{user.totalStar}</div>
                </div>
              ))}
            </div>
          </div>
          <img className="" src={PopupHistory1} alt="leaderboard popup" />
        </div>
      </div>
    </>
  );
};

export default PopupLeaderboard;