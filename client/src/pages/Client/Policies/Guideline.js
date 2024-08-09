import React from 'react';

// Define inline styles as a JavaScript object
const styles = {
    container: {
        maxWidth: '1200px',
        margin: '120px auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
    },
    title: {
        fontSize: '24px',
        color: '#dc3545',
        marginBottom: '20px',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: '20px',
        color: '#dc3545',
        marginTop: '20px',
        marginBottom: '10px',
        fontWeight: 'bold',
    },
    paragraph: {
        lineHeight: '1.6',
        fontSize: '18px',
        marginBottom: '15px',
    },
    list: {
        marginLeft: '20px',
        marginBottom: '15px',
    },
    listItem: {
        marginBottom: '10px',
    },
    highlighted: {
        color: '#dc3545',
    },
    bold: {
        fontWeight: 'bold',
    },
};


function PurchaseGuide() {
    return (
        <div style={styles.container}>
            <h4 style={styles.title}>Hướng Dẫn Mua Hàng Online</h4>
            <p style={styles.paragraph}>
                Bạn có thể đặt hàng online trên Website beautybox.com.vn thông qua các bước đặt hàng cơ bản như sau:
            </p>
            <div style={styles.subtitle}>1. Tìm kiếm sản phẩm</div>
            <ul style={styles.list}>
                <li style={styles.listItem}>Gõ tên sản phẩm vào thanh tìm kiếm</li>
                <li style={styles.listItem}>Tìm sản phẩm theo danh mục sản phẩm hoặc thương hiệu</li>
                <li style={styles.listItem}>Tìm sản phẩm đang có chương trình khuyến mãi</li>
            </ul>
            <div style={styles.subtitle}>2. Thêm vào giỏ hàng</div>
            <p style={styles.paragraph}>
                Sau khi chọn được sản phẩm yêu thích và cần mua. Bạn lựa chọn màu sắc, dung tích và số lượng cần. Sau đó chọn “Thêm vào giỏ” hoặc “Mua ngay”.
            </p>
            <p style={styles.paragraph}>
                Sau khi thêm vào giỏ hàng sẽ xuất hiện bảng thông báo về sản phẩm vừa thêm vào. Bạn có thể tắt để tiếp tục mua sắm, hoặc bấm "Thanh toán" để hoàn tất đơn hàng.
            </p>
            <div style={styles.subtitle}>3. Tra cứu tồn kho tại cửa hàng</div>
            <p style={styles.paragraph}>
                Bạn có thể click vào "Xem cửa hàng còn hàng" để kiểm tra cửa hàng Beauty Box nào còn hàng để ghé tham quan và mua sắm.
            </p>
            <div style={styles.subtitle}>4. Kiểm tra giỏ hàng</div>
            <p style={styles.paragraph}>
                Sau khi đã chọn được các sản phẩm yêu thích và cho vào giỏ hàng. Bạn muốn kiểm tra lại xem có những sản phẩm nào, click vào icon "GIỎ HÀNG" ngay góc phía trên bên phải để xem chi tiết.
            </p>
            <p style={styles.paragraph}>
                Thông báo về giỏ hàng sẽ xuất hiện, bạn có thể xem nhanh và chọn "Thanh toán" để hoàn tất đơn. Hoặc để xem chi tiết hơn giỏ hàng bạn click vào "Đến trang giỏ hàng để điền thông tin xuất hoá đơn".
            </p>
            <p style={styles.paragraph}>
                Tại trang chi tiết bạn có thể điều chỉnh số lượng muốn thay đổi = click "Cập nhật số lượng" để giỏ hàng cập nhật lại số lượng và giá đúng. Nếu không có điều chỉnh số lượng, bạn click "Thanh toán" để đến bước giao hàng. Trường hợp muốn xuất hóa đơn, bạn nhớ click chọn vào ô tròn "Xuất hóa đơn cho đơn hàng" để điền thông tin.
            </p>
            <div style={styles.subtitle}>5. Điền thông tin giao hàng</div>
            <div style={styles.subtitle}>Đăng nhập tài khoản</div>
            <p style={styles.paragraph}>
                Bạn chọn biểu tượng đăng nhập/đăng ký ở góc phải đầu trang để vào tài khoản. Trong trường hợp chưa đăng ký tài khoản, bạn có thể chọn dòng "Đăng ký" và bắt đầu nhập thông tin yêu cầu để đăng ký tài khoản.
            </p>
            <p style={styles.paragraph}>
                Bạn có thể hoàn tất đơn đặt hàng mà không cần đăng nhập nhưng bạn lưu ý phải điền đầy đủ và chính xác về thông tin nhận hàng, đặc biệt là địa chỉ và số điện thoại để Beauty Box xác nhận đơn hàng.
            </p>
            <p style={styles.paragraph}>
                Sau khi điền đủ và chính xác thông tin giao hàng
                Và nhấn "Tiếp tục đến phương thức thanh toán" để tới bước tiếp theo.
            </p>
        </div>
    );
}

export default PurchaseGuide;
