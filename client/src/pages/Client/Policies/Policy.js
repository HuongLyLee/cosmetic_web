import React from 'react';

// Define inline styles as a JavaScript object
const styles = {
    container: {
        maxWidth: '1300px',
        margin: '120px auto',
        padding: '20px',
        paddingTop: '40px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
    },
    title: {
        fontSize: '24px',
        marginBottom: '20px',
        textAlign: 'center',
        color: '#dc3545',
    },
    paragraph: {
        lineHeight: '1.8',
        fontSize: '18px',
        marginBottom: '15px',
    },
    highlighted: {
        color: '#dc3545',
    },
    firstLetter: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#dc3545',
    },
};

function GeneralPolicy() {
    return (
        <div style={styles.container}>
            <p style={styles.paragraph}>
                <h5 style={styles.highlighted}>CHÍNH SÁCH VÀ QUY ĐỊNH CHUNG</h5>

                <br/> <strong>GIỚI THIỆU CHUNG</strong>

                <br/> Chào mừng bạn đến với www.mintcosmetic.com.vn
                <br/> Chúng tôi là Công ty thương mại dịch vụ tổng hợp Hoàn Vũ, địa chỉ trụ sở chính tại 294-296 Hai Bà Trưng, P.Tân Định, Q.1, TP.HCM, hoạt động kinh doanh trong ngành mỹ phẩm và thời trang.
                <br/> Hiện nay chúng tôi có cửa hàng tại các thành phố lớn: Hồ Chí Minh, Hà Nội; nhằm tăng thêm sự tiện lợi cho quý khách hàng, chúng tôi chính thức đưa trang web bán hàng trực tuyến Mint vào hoạt động và chỉ bán hàng trực tuyến trên trang web này.
                <br/> Khi bạn truy cập vào trang web của chúng tôi có nghĩa là bạn đồng ý với các điều khoản này. Trang web có quyền thay đổi, chỉnh sửa, thêm hoặc lược bỏ bất kỳ phần nào trong quy định và điều kiện sử dụng vào bất cứ lúc nào. Các thay đổi có hiệu lực ngay khi được đăng trên trang web mà không cần thông báo trước. Và khi bạn tiếp tục sử dụng trang web, sau khi các thay đổi về quy định và điều kiện được đăng tải, có nghĩa là bạn chấp nhận với những thay đổi đó. Bạn vui lòng kiểm tra thường xuyên để cập nhật những thay đổi của chúng tôi.
                <br/> <br/> Xin vui lòng đọc kỹ trước khi quyết định mua hàng:
                <br/> <strong>1. Hướng dẫn sử dụng website</strong>
                <br/> Trang web này chỉ dùng để cung cấp thông tin sản phẩm chứ chúng tôi không phải nhà sản xuất nên những nhận xét hiển thị trên web là ý kiến cá nhân của khách hàng, không phải của chúng tôi.
                <br/> Bạn phải đăng ký tài khoản với thông tin xác thực về bản thân và phải cập nhật nếu có bất kỳ thay đổi nào. Mỗi người truy cập phải có trách nhiệm với mật khẩu, tài khoản và hoạt động của mình trên web. Hơn nữa, bạn phải thông báo cho chúng tôi biết khi tài khoản bị truy cập trái phép. Chúng tôi không chịu bất kỳ trách nhiệm nào, dù trực tiếp hay gián tiếp, đối với những thiệt hại hoặc mất mát gây ra do bạn không tuân thủ quy định.
                <br/> Trong suốt quá trình đăng ký, bạn đồng ý nhận email quảng cáo từ trang web. Sau đó, nếu không muốn tiếp tục nhận mail, bạn có thể từ chối bằng cách nhấp vào đường link ở dưới cùng trong mọi email quảng cáo.
                <br/> <strong>2. Ý kiến khách hàng</strong>
                <br/> Tất cả nội dung trang web và ý kiến phê bình của bạn đều là tài sản của chúng tôi. Nếu chúng tôi phát hiện bất kỳ thông tin giả mạo nào, chúng tôi sẽ khóa tài khoản của bạn ngay lập tức hoặc áp dụng các biện pháp khác theo quy định của pháp luật Việt Nam.
                <br/> <strong>3. Đặt hàng và xác nhận đơn hàng</strong>
                <br/> Khi bạn đặt hàng tại Mint, chúng tôi sẽ nhận được yêu cầu đặt hàng và gửi đến bạn mã số đơn hàng. Tuy nhiên, yêu cầu đặt hàng cần thông qua một bước xác nhận đơn hàng, Mint chỉ xác nhận đơn hàng nếu yêu cầu đặt hàng của bạn thỏa mãn các tiêu chí thực hiện đơn hàng tại Mint.
                <br/> Để yêu cầu đặt hàng được xác nhận nhanh chóng, bạn vui lòng cung cấp đúng và đầy đủ các thông tin liên quan đến việc giao nhận, hoặc các điều khoản và điều kiện của chương trình khuyến mãi (nếu có) mà bạn tham gia.
                <br/> <strong>4. Giá trị đơn hàng và hình thức thanh toán</strong>
                <br/> Mint cung cấp các hình thức thanh toán: tiền mặt khi nhận hàng, thẻ thanh toán quốc tế hoặc thẻ thanh toán nội địa.
                <br/> Trừ một số trường hợp có ghi chú riêng, thông thường bạn có thể lựa chọn một trong 3 hình thức thanh toán trên khi tiến hành đặt hàng. Tuy nhiên, để đảm bảo tính an toàn dành cho bạn trong quá trình thanh toán, đối với những đơn hàng có giá trị cao từ 10 (mười) triệu đồng trở lên, Mint chỉ chấp nhận hình thức thanh toán trước bằng thẻ thanh toán quốc tế hoặc thẻ thanh toán nội địa.
                <br/> <strong>5. Chương trình khuyến mãi</strong>
                <br/> Với mong muốn mang lại nhiều lợi ích cho khách hàng, Mint thường xuyên có các chương trình giảm giá đặc biệt. Tuy nhiên, để đảm bảo tính công bằng cho khách hàng là người tiêu dùng cuối cùng của Beauty Box, chúng tôi có quyền từ chối các đơn hàng không nhằm mục đích sử dụng cho cá nhân, mua hàng số lượng nhiều hoặc với mục đích mua đi bán lại khi bạn tham gia các chương trình khuyến mãi.
                <br/> Thông thường, chúng tôi không giới hạn số lượng sản phẩm tối đa dành cho mỗi khách hàng khi tham gia chương trình khuyến mãi đặc biệt tại Mint. Thể lệ của chương trình khuyến mãi sẽ được cập nhật tại trang khuyến mãi theo từng thời điểm chạy chương trình và có thể được thay đổi mà không cần thông báo trước cho khách hàng.
                <br/> Mint có quyền từ chối các đơn hàng không thỏa mãn điều khoản và điều kiện tham gia các chương trình khuyến mãi mà không cần thông báo đến khách hàng. Vì vậy, bạn vui lòng tham khảo kĩ thể lệ của từng chương trình trước khi tham gia.
                <br/> <strong>6. Mã giảm giá</strong>
                <br/> Mã giảm giá là hình thức chiết khấu mà Mint dành cho khách hàng có thể có giá trị giảm một phần hoặc toàn phần giá trị của đơn hàng và chỉ áp dụng cho hàng bán. Mỗi đơn hàng chỉ có thể áp dụng 1 mã giảm giá, bạn sẽ nhận được thông tin chi tiết về điều khoản và điều kiện sử dụng mã giảm giá kèm theo. Để đảm bảo tính công bằng cho khách hàng là người tiêu dùng cuối cùng của Mint, chúng tôi có quyền từ chối các đơn hàng không nhằm mục đích sử dụng cho cá nhân, mua hàng số lượng nhiều hoặc với mục đích mua đi bán lại. Mint có quyền từ chối các đơn hàng sử dụng mã giảm giá không thỏa mãn điều khoản và điều kiện sử dụng mã giảm gía mà không cần thông báo trước. Mã giảm giá trong trường hợp này sẽ không được cấp lại. Ngoài ra, Mint có quyền từ chối việc gia hạn mã đã hết hạn sử dụng, mã không được sử dụng hết giá trị hoặc các trường hợp đơn phương ngừng thực hiện đơn hàng phát sinh từ phía bạn.
                <br/> <strong>7. Khu vực giao hàng</strong>
                <br/> Mint giao hàng toàn quốc. Trong một số trường hợp, mà khu vực giao hàng không được cập nhật kịp thời tại thời điểm quý khách đặt hàng, Mint sẽ liên hệ đến bạn để thông báo chi tiết.
                <br/> <strong>8. Giá cả</strong>
                <br/> Giá cả sản phẩm được niêm yết là giá bán cuối cùng đã bao gồm thuế giá trị gia tăng (VAT). Giá cả của sản phẩm có thể thay đổi tùy thời điểm và chương trình khuyến mãi kèm theo. Phí vận chuyển hoặc phí thực hiện đơn hàng sẽ được áp dụng thêm nếu có, và sẽ được hiển thị rõ tại trang thanh toán khi bạn tiến hành đặt hàng.
                <br/> <strong>9. Thông tin sản phẩm </strong>
                <br/>Mint cung cấp thông tin chi tiết đối với từng sản phẩm mà chúng tôi đăng tải.
                <br/> <strong> 10. Quy định về bảo mật </strong>
                <br/>Trang web của chúng tôi coi trọng việc bảo mật thông tin và sử dụng các biện pháp tốt nhất bảo vệ thông tin và việc thanh toán của bạn. Thông tin của bạn trong quá trình thanh toán sẽ được mã hóa để đảm bảo an toàn. Sau khi bạn hoàn thành quá trình đặt hàng, bạn sẽ thoát khỏi chế độ an toàn.
                <br/>Bạn không được sử dụng bất kỳ chương trình, công cụ hay hình thức nào khác để can thiệp vào hệ thống hay làm thay đổi cấu trúc dữ liệu. Trang web cũng nghiêm cấm việc phát tán, truyền bá hay cổ vũ cho bất kỳ hoạt động nào nhằm can thiệp, phá hoại hay xâm nhập vào dữ liệu của hệ thống. Cá nhân hay tổ chức vi phạm sẽ bị tước bỏ mọi quyền lợi cũng như sẽ bị truy tố trước pháp luật nếu cần thiết.
                <br/>Mọi thông tin giao dịch sẽ được bảo mật nhưng trong trường hợp cơ quan pháp luật yêu cầu, chúng tôi sẽ buộc phải cung cấp những thông tin này cho các cơ quan pháp luật.
            </p>
        </div>
    );
}
export default GeneralPolicy;
