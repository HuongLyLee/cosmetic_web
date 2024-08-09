import React from "react";
import AboutCosmetic from "../../../assets/imgs/about-cosmetic.jpeg";
import Chatbox from "../../../assets/imgs/chat-box.png";
import Service from "../../../assets/imgs/customer-service.png";
import Message from "../../../assets/imgs/message.png";

export default function AboutPage() {
  return (
    <div>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <h1 className="display-3 mb-3 animated slideInDown">Về chúng tôi</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a className="text-body" href="#">
                  Trang chủ
                </a>
              </li>
              <li
                className="breadcrumb-item text-dark active"
                aria-current="page"
              >
                Về chúng tôi
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}
      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                <img className="img-fluid w-80" src={AboutCosmetic} style={{ width: "85%", height: "auto" }} />
              </div>
            </div>

            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s"
              style={{ textAlign: "justify", color: "black" }}
            >
              <h1 className="display-5 mb-4"
                style={{ color: "#ed6f66" }}
              >
                COSMETIC STORE
              </h1>

              <p className='mb-4'>
                <p> <strong><em>Tại sao mint cosmetics lại chỉ muốn là một cửa hàng nhỏ chứ không phải một drugstores?</em></strong></p>
                “Save The Best For You” – Slogan cũng như định hướng hoạt động của mint. Chúng mình làm việc với mục tiêu và định hướng
                là mang đến những sản phẩm tốt nhất đến tay mỗi người. Nên có thể tại Mint bạn không thể tìm thấy đa dạng sản phẩm như
                ở một drugstores, bởi vì những gì “tốt nhất”, Mint đã “chọn lọc” sẵn cho các bạn rồi.
              </p>
              <p className="mb-4">
                <p><strong><em> Làm thế nào để thực hiện điều đó? </em></strong></p>
                Sản phẩm của mint không nhất thiết phải là sản phẩm có công dụng tốt nhất mà phải phù hợp 3 tiêu chí của bọn mình: Chất lượng,
                Giá thành và Phù hợp.
                Để làm được điều này mỗi một mặt hàng được đặt trên kệ của mint đều đã qua chọn lọc cẩn thận về:
                Nguồn gốc, chất lượng: Việc xem qua hầu hết những review khen hay chê, đặc biệt là việc testing sản phẩm trước khi đăng bán cũng
                như việc chọn nguồn hàng
                chất lượng có vẻ đơn giản nhưng lại tốn nhiều thời gian và cũng là công việc “khó khăn” nhất đối với chúng mình.
                Chi phí, Giá thành: Sản phẩm tốt không hẳn phải đắt nhất, mà đối với mint đó là sản phẩm đạt chất lượng tốt nhất so với khoảng
                giá hiện tại. Việc check giá cả tất cả những sản phẩm cùng loại để chọn ra cái gì phù hợp cái gì không cũng là điều làm chúng
                mình đau đầu trước khi rinh em ý về trên kệ hàng.
              </p>
            </div>
          </div>

          <div className="row g-5 align-items-center"
            style={{ textAlign: "justify", color: "black", paddingTop: "20px" }}
          >
            <p>
              Thấu hiểu được tầm quan trọng trong việc mang đến những sản phẩm
              chăm sóc da có hiệu quả thật sự cho làn da, Cosmetics đã không
              ngừng nỗ lực để trở thành địa chỉ mua sắm mỹ phẩm chính hãng cho
              hàng triệu khách hàng trên khắp cả nước. Mua hàng tại Cosmetics
              bạn sẽ có những lợi ích sau:
            </p>
            <ul style={{ marginTop: "0" }}>
              <p>
                <i className="fa fa-check text-primary me-3" />
                Yên tâm mua mỹ phẩm chính hãng từ các thương hiệu lớn trên thế
                giới
              </p>
              <p>
                <i className="fa fa-check text-primary me-3" />
                Giá rẻ nhất thị trường - Ở đâu rẻ hơn COSMETIC hoàn tiền chênh
                lệch
              </p>
              <p>
                <i className="fa fa-check text-primary me-3" />
                Bắt kịp xu hướng làm đẹp và phong cách sống
              </p>
              <p>
                <i className="fa fa-check text-primary me-3" />
                Dịch vụ chăm sóc khách hàng tận tâm
              </p>
              <p>
                <i className="fa fa-check text-primary me-3" />
                Không gian mua sắm thoải mái, sang trọng
              </p>
            </ul>
            <p style={{ marginTop: "5px" }}>
              Vẻ ngoài rạng rỡ xinh đẹp từ làn da đến vóc dáng sẽ giúp chúng ta tự tin hơn rất nhiều.
              Vậy nên đừng ngần ngại đến Mint và chia sẻ với Mint những mong muốn của bạn về những sản
              phẩm làm đẹp an toàn, hiệu quả.
            </p>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Feature Start */}
      <div className="container-fluid my-5 py-6"
        style={{ backgroundColor: "#f7d1b2" }}
      >
        <div className="container">
          <div
            className="section-header text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <h1 className="display-5 mb-3">Dịch vụ của chúng tôi</h1>
            <p>Luôn đem đến cho bạn sự trải nghiệm dịch vụ tốt nhất</p>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="bg-white text-center h-100 p-4 p-xl-5">
                <img
                  className="img-fluid mb-4"
                  src="https://nuty.vn/data/sites/1/skins/default/img/footer-icon.png"
                  alt=""
                />
                <h4 className="mb-3">GIAO HÀNG TOÀN QUỐC</h4>
                <p className="mb-4">
                  Hỗ trợ phí ship rẻ nhất cho các quận, tỉnh thành trên cả nước.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="bg-white text-center h-100 p-4 p-xl-5">
                <img
                  className="img-fluid mb-4"
                  src="https://nuty.vn/Data/Sites/1/media/icon/shipping-fast.png"
                  alt=""
                />
                <h4 className="mb-3">GIAO HÀNG NHANH</h4>
                <p className="mb-4">
                  Giao hàng nhanh chóng trong nội thành HCM và Hà Nội.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="bg-white text-center h-100 p-4 p-xl-5">
                <img
                  className="img-fluid mb-4"
                  src="https://nuty.vn/Data/Sites/1/media/icon/globe-americas.png"
                  alt=""
                />
                <h4 className="mb-3">THƯƠNG HIỆU UY TÍN</h4>
                <p className="mb-4">
                  Đảm bảo tất cả sản phẩm được bán ra là 100% chính hãng
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}

      {/* Start */}
      <div className="container-fluid my-4 py-4"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <div
            className="section-header text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <h1 className="display-5 mb-3">Trung tâm hỗ trợ</h1>
            <p>Quý khách có thể liên hệ với chúng tôi qua các hình thức sau</p>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="bg-white text-center h-100 p-4 p-xl-5">
                <img className="mb-3" src={Service} style={{ width: "17%", height: "auto" }} />
                <h4 className="mb-3">Gọi chúng tôi</h4>
                <p className="mb-4">
                  0582 311 225
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="bg-white text-center h-100 p-4 p-xl-5">
                <img className="mb-3" src={Chatbox} style={{ width: "17%", height: "auto" }} />
                <h4 className="mb-3">Gửi email cho chúng tôi</h4>
                <p className="mb-4">
                  mintcosmetic@gmail.com
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="bg-white text-center h-100 p-4 p-xl-5">
                <img className="mb-3" src={Message} style={{ width: "17%", height: "auto" }} />
                <h4 className="mb-3">Để lại lời nhắn </h4>
                <p className="mb-4">
                  Chat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End */}

    </div>
  );
}
