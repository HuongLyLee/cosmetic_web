import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";
import UserCheckout from "./components/UserCheckout";
import { userAPI } from "../../../services/userAPI";
import { parseJSON, isVietnamesePhoneNumber, validateEmail } from "../../../utils/helpers"; 
import { USER_INFO_KEY } from "../../../utils/contants";
import { Tab, Tabs } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PersonalPage() {
  const [userInfo, setUserInfo] = useState({});
  const [historyTab, setHistoryTab] = useState(0);
  const navigate = useNavigate();
  const userData = parseJSON(localStorage.getItem(USER_INFO_KEY));

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

  const handleUpdateUserInfo = async () => {
    try {
      if (
        userInfo?.phone_number?.trim()?.length &&
        !isVietnamesePhoneNumber(userInfo?.phone_number)
      ) {
        return toast.error("Số điện thoại không đúng định dạng");
      }

      if (
        userInfo?.email?.trim()?.length &&
        !validateEmail(userInfo?.email)
      ) {
        return toast.error("Email không hợp lệ");
      }

      const userRes = await userAPI.updateUserInfo({
        ...userInfo,
        id: userData?._id,
      });

      if (userRes?.success) {
        localStorage.setItem(
          USER_INFO_KEY,
          JSON.stringify({
            ...userInfo,
            _id: userData?._id,
            type: 'user'
          })
        );

        toast.success("Cập nhật thông tin thành công");
      } else {
        toast.error("Cập nhật thông tin thất bại");
      }
    } catch (error) {
      console.log("update user data error: ", error);
    }
  };

  useEffect(() => {
    if (userData?._id) {
      getUserData();
    } else {
      navigate("/login");
    }
  }, [navigate, userData?._id]);

  return (
    <div>
      <div
        className="container-fluid page-header wow fadeIn"
        data-wow-delay="0.1s"
        style={{ backgroundColor: '#f8f9fa', padding: '20px 0' }}
      >
        <div className="container">
          <h1 className="display-3 mb-3 animated slideInDown">Trang cá nhân</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a className="text-body" href="/">
                  Trang chủ
                </a>
              </li>
              <li
                className="breadcrumb-item text-dark active"
                aria-current="page"
              >
                Trang cá nhân
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <Box
        sx={{
          padding: "30px 50px",
          marginY: "50px",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
        }}
      >
        <Grid container spacing={8}>
          <Grid item xs={12} sm={4}>
            <Stack
              direction="column"
              alignItems="center"
              spacing={2}
            >
              <Avatar sx={{ width: 100, height: 100, mb: 2 }} />
              <Stack direction="row" spacing={2} width="100%">
                <TextField
                  label="Họ"
                  variant="filled"
                  fullWidth
                  value={userInfo?.first_name}
                  onChange={(event) =>
                    setUserInfo({
                      ...userInfo,
                      first_name: event.target.value,
                    })
                  }
                />
                <TextField
                  label="Tên"
                  variant="filled"
                  fullWidth
                  value={userInfo?.last_name}
                  onChange={(event) =>
                    setUserInfo({
                      ...userInfo,
                      last_name: event.target.value,
                    })
                  }
                />
              </Stack>

              <TextField
                label="Email"
                variant="filled"
                fullWidth
                value={userInfo.email}
                onChange={(event) => {
                  setUserInfo({ ...userInfo, email: event.target.value });
                }}
              />

              <TextField
                label="Địa chỉ"
                variant="filled"
                fullWidth
                value={userInfo.address}
                onChange={(event) => {
                  setUserInfo({ ...userInfo, address: event.target.value });
                }}
              />
              <TextField
                label="Số điện thoại"
                variant="filled"
                fullWidth
                value={userInfo.phone_number}
                onChange={(event) => {
                  setUserInfo({
                    ...userInfo,
                    phone_number: event.target.value,
                  });
                }}
              />
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleUpdateUserInfo}
                >
                  Cập nhật
                </Button>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Tabs
              value={historyTab}
              onChange={(event, newValue) => setHistoryTab(newValue)}
              aria-label="user history tabs"
              sx={{ mb: 2 }}
            >
              <Tab label="Lịch sử đặt hàng" />
            </Tabs>

            {historyTab === 0 && (
              <div style={{marginTop: '20px'}}>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "24px",
                    marginBottom: "12px",
                    fontWeight: 700,
                  }}
                >
                  LỊCH SỬ ĐẶT HÀNG
                </div>
                <UserCheckout />
              </div>
            )}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
