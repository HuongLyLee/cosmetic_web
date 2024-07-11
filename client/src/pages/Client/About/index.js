import React from "react";
import AboutCosmetic from "../../../assets/imgs/about-cosmetic.jpeg";

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
                <img className="img-fluid w-100" src={AboutCosmetic} />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="display-5 mb-4 ">COSMENTIC STORE</h1>
              <p className="mb-4">
                <p> <strong><em>Tại sao mint cosmetics lại chỉ muốn là một cửa hàng nhỏ chứ không phải một drugstores?</em></strong></p>
                “Save The Best For You” – Slogan cũng như định hướng hoạt động của mint. Chúng mình làm việc với mục tiêu và định hướng
                là mang đến những sản phẩm tốt nhất đến tay mỗi người. Nên có thể tại Mint bạn không thể tìm thấy đa dạng sản phẩm như
                ở một drugstores, bởi vì những gì “tốt nhất”, Mint đã “chọn lọc” sẵn cho các bạn rồi :).
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
              <p className="mb-4">
                <p><strong><em> Bạn sẽ tìm được gì ở mint?</em></strong></p>
                Vậy đó, mint chỉ là một cửa hàng nhỏ không phải một siêu thị mỹ phẩm nên các bạn chỉ tìm được những sản phẩm ĐÃ ĐƯỢC CHỌN LỌC
                trên kệ của chúng mình mà thôi.
                Tại mint, chúng mình luôn cố gắng để mọi người không phải nghĩ về vấn đề đó. Chỉ việc đến cửa hàng để Mint có thể tư vấn giúp
                bạn hoặc đôi khi đơn giản là bạn “chọn bừa”, bạn vẫn sẽ có được sản phẩm “tốt” dành cho riêng bạn.
                PS: Mọi reviews dù khen chê cũng giúp mint thêm thông tin trong việc chọn lọc sản phẩm đến với mọi người và cải thiện dịch vụ
                của mình hơn. Chúng mình rất cảm ơn nếu bạn bớt chút thời gian để lại Reviews về sản phẩm, dịch vụ.. hoặc bất kỳ điều gì khác
                mà bạn muốn. Cái mint cần không phải là 5* mà là cách giúp chúng mình cải thiện về sản phẩm và khiến mọi người hài lòng hơn.
              </p>
            </div>
          </div>
          <div className="row g-5 align-items-center">
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
          </div>
          <div className="row g-5 align-items-center mt-2">
            <p style={{ marginTop: "10px" }}>
              Vẻ ngoài rạng rỡ xinh đẹp từ làn da đến vóc dáng sẽ giúp chúng ta
              tự tin hơn rất nhiều. Vậy nên đừng ngần ngại đến COSMETIC và chia
              sẻ với COSMETIC những mong muốn của bạn về những sản phẩm làm đẹp
              an toàn, hiệu quả.
            </p>
          </div>
        </div>
      </div>
      {/* About End */}
    </div>
  );
}
