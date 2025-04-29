import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    EN: {
      translation: {
        Spin: "Spin",
        Star: "Star",
        "on-net call": "on-net call",
        Data: "Data",
        crossword: "crossword",
        "you have 4 turns": "you have 4 turns",
        "you have": "you have",
        turns: "turns",
        "Please enter OTP code sent to SMS":
          "Please enter OTP code sent to SMS",
        "OTP code error, request": "OTP code error, request",
        "OTP code": "OTP code",
        Confirm: "Confirm",
        "OTP code is wrong, please get OTP again":
          "OTP code is wrong, please get OTP again",
        "OTP has expired, please get OTP again":
          "OTP has expired, please get OTP again",
        "Congratulations, you have successfully registered for":
          "Congratulations, you have successfully registered for",
        "VIP MEMBER": "VIP MEMBER",
        Buy: "Buy",
        "5000 VND/5 turns/day": "5000 VND/5 turns/day",
        "Buy more turn": "Buy more turn",
        Cancel: "Cancel",
        "Do you want to cancel VIP MEMBER?":
          "Do you want to cancel VIP MEMBER?",
        "Cancel successful VIP MEMBER": "Cancel successful VIP MEMBER",
        History: "History",
        Gift: "Gift",
        "No.": "No.",
        Prize: "Prize",
        "Date/Time": "Date/Time",
        Turns: "Turns",
        "Guide & Prize": "Guide & Prize",
        Guide: "Guide",
        "Register VIP MEMBER with 200 kip/ 5 turns/day":
          "Register VIP MEMBER with 200 kip/ 5 turns/day",
        "Enter the phone number": "Enter the phone number",
        "Send OTP": "Send OTP",
        Login: "Login",
        Logout: "Logout",
        Spins: "Spins",
        "Matching correctly": "Matching correctly",
        PopupRegisterTitle: "Bạn chắc chắn muốn đăng ký VIP ?",
        buyTurns: "BUY TURNS",
        pricePerTurn: "10.000 VNĐ / play turn",
        totalAmount: "Total",
        confirmBuy: "Confirm",
        auth: {
          login: 'Login',
          register: 'Register',
          username: 'Username',
          password: 'Password',
          no_account: 'No account?',
          have_account: 'Already have an account?',
          register_here: 'Register here',
          login_here: 'Login here',
          error: 'An error occurred. Please try again!',
          loading: 'Processing...',
          "confirm_password": "Confirm password",
          "passwords_mismatch": "Passwords do not match!",
          "weak_password": "Password is too weak!",
          "rules": {
            "min_length": "At least 8 characters",
            "uppercase": "Contains uppercase characters",
            "lowercase": "Contains lowercase characters",
            "number": "Contains numbers",
            "special_char": "Contains special characters"
          }
        }
      },
    },
    VI: {
      translation: {
        Star: "Sao xếp hạng",
        "on-net call": "Phút gọi nội mạng",
        Data: "Data",
        crossword: "Ô chữ",
        Spin: "Quay",
        "you have 4 turns": "Bạn còn 4 lượt quay",
        "you have": "Bạn còn",
        turns: "lượt quay",
        "Please enter OTP code sent to SMS":
          "Vui lòng điền mã OTP được gửi về SMS",
        "OTP code error, request": "Mã OTP có vấn đề?",
        "OTP code": "Lấy lại OTP!",
        "OTP code is wrong, please get OTP again":
          "Mã OTP sai, vui lòng lấy lại mã OTP",
        "OTP has expired, please get OTP again":
          "Mã OTP hết hạn, vui lòng lấy lại mã OTP",
        "Congratulations, you have successfully registered for":
          "Chúc mừng bạn đã đăng ký thành công",
        "VIP MEMBER": "VIP MEMBER",
        Buy: "Mua",
        "5000 VND/5 turns/day": "5000 VNĐ/5 lượt/ngày",
        "Buy more turn": "MUA THÊM LƯỢT",
        Cancel: "Hủy",
        "Do you want to cancel VIP MEMBER?": "Bạn có muốn hủy VIP MEMBER?",
        "Cancel successful VIP MEMBER": "Hủy thành công VIP MEMBER",
        History: "LỊCH SỬ",
        Gift: "GIẢI THƯỞNG",
        "No.": "STT",
        Prize: "Giải thưởng",
        "Date/Time": "Ngày/ thời gian",
        Turns: "Số lượt",
        "Guide & Prize": "Hướng dẫn và giải thưởng",
        Guide: "Hướng dẫn",
        "Register VIP MEMBER with 200 kip/ 5 turns/day":
          "Đăng ký VIP MÊMBER chỉ với 200 kip/ 5 lượt/ ngày",
        "Enter the phone number": "Điền số điện thoại",
        "Send OTP": "Gửi OTP",
        Login: "Đăng nhập",
        Logout: "ĐĂNG XUẤT",
        Spins: "Đăng xuất",
        "Matching correctly": "Kết hợp chính xác",
        Confirm: "Xác nhận",
        PopupRegisterTitle: "Bạn chắc chắn muốn đăng ký VIP ?",
        buyTurns: "MUA LƯỢT",
        pricePerTurn: "10.000 VNĐ / lượt chơi",
        totalAmount: "Tổng",
        confirmBuy: "Thanh toán",
        "processing...": "Xử lý...",
        Leaderboard: "BXH SAO",
        Rank: "Vị trí",
        Username: "Người chơi",
        Stars: "Tổng số sao",
        auth: {
          login: 'Đăng nhập',
          register: 'Đăng ký',
          username: 'Tên đăng nhập',
          password: 'Mật khẩu',
          no_account: 'Chưa có tài khoản?',
          have_account: 'Đã có tài khoản?',
          register_here: 'Đăng ký tại đây.',
          login_here: 'Đăng nhập tại đây.',
          error: 'Đã xảy ra lỗi. Vui lòng thử lại!',
          loading: 'Đang xử lý...',
          "confirm_password": "Xác nhận mật khẩu",
          "passwords_mismatch": "Mật khẩu không khớp!",
          "weak_password": "Mật khẩu quá yếu!",
          "rules": {
            "min_length": "Ít nhất 8 ký tự",
            "uppercase": "Chứa ký tự in hoa",
            "lowercase": "Chứa ký tự thường",
            "number": "Chứa số",
            "special_char": "Chứa ký tự đặc biệt"
          }
        }
      },
    }
  },
  lng: "VI",
  fallbackLng: "VI",

  interpolation: {
    escapeValue: false,
  },
});
