import React from "react";
import "./index.css"

export default function Footer() {
  return (
    <div>
      {/* Footer Start */}
      <div
        className="container-fluid footer mt-5 pt-5 wow fadeIn"
        style={{ backgroundColor: "#EEEEEE", color: "black" }}
        data-wow-delay="0.1s"
      >
        <div className="footer">
          <div className="col">
            <h1 className="fw-bold">Cosmetic</h1>
            <p>
              Cosmetic - thương hiệu đi đầu trong ngành phân phối mỹ phẩm chính hãng, phục vụ cho nhu cầu mua sắm & làm đẹp của hàng triệu khách hàng tại Việt Nam.
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-square rounded-circle me-1" href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square rounded-circle me-1" href="#">
                <i className="fab fa-youtube" />
              </a>
              <a className="btn btn-square rounded-circle me-0" href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>

          <div className="col">
            <h4>Địa chỉ</h4>
            <p> <i className="fa fa-map-marker-alt me-3" /> 23 Lê Văn Lương, Thanh Xuân </p>
            <p> <i className="fa fa-phone-alt me-3" /> +0582 311 225 </p>
            <p> <i className="fa fa-envelope me-3" />mintcosmetics@gmail.com </p>
          </div>

          <div className="col">
            <h4>Đường dẫn</h4>
            <a className="btn btn-link" href="/about">Về chúng tôi</a>
            <a className="btn btn-link" href="/contact">Trang góp ý</a>
            <a className="btn btn-link" href="/blog">Tạp chí làm đẹp</a>
            <a className="btn btn-link" href="/product">Sản phẩm</a>
          </div>

          <div className="col">
            <h4>Chính sách</h4>
            <a className="btn btn-link" href="/policy">Quy định chung</a>
            <a className="btn btn-link" href="/guideline">Hướng dẫn mua hàng </a>
            <a className="btn btn-link" href="/privacy">Chính sách bảo mật </a>
            <a className="btn btn-link" href="/terms">Điều khoản sử dụng</a>
          </div>
        </div>
        fterms
      </div>
      {/* Footer End */}

      {/* Back to Top */}
      <a
        href="#"
        className="btn btn-lg btn-lg-square rounded-circle back-to-top"
        style={{ backgroundColor: "#ed6f67" }}
      >
        <i className="bi bi-arrow-up" />
      </a>
    </div>
  );
}
