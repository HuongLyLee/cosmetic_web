import React from 'react';

const styles = {
    container: {
        maxWidth: '1400px',
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

function PrivacyPolicy() {
    return (
        <div style={styles.container}>
            <h4 style={styles.title}>CHÍNH SÁCH BẢO MẬT THÔNG TIN CÁ NHÂN</h4>
            <div style={styles.subtitle}>Giới Thiệu</div>
            <p style={styles.paragraph}>
                www.mintcosmetic.com.vn mong muốn đem lại một tiện ích mua hàng trực tuyến tin cậy, tiết kiệm và thấu hiểu người dùng. Chúng tôi nhận thấy khách hàng sử dụng trang giao dịch thương mại điện tử để mua sắm nhưng không phải ai cũng mong muốn chia sẻ thông tin cá nhân của mình. Chúng tôi, Công ty cổ phần TMDV tổng hợp Hoàn Vũ, tôn trọng quyền riêng tư của khách hàng và cam kết bảo mật thông tin cá nhân của khách hàng khi khách hàng tin vào chúng tôi cung cấp thông tin cá nhân của khách hàng cho chúng tôi khi mua sắm tại sàn giao dịch thương mại điện tử. Đây là nguyên tắc khi tiếp cận quyền riêng tư, thông tin cá nhân tại sàn giao dịch thương mại điện tử.</p>
            <div style={styles.subtitle}>Chính Sách Bảo Mật Thông Tin Cá Nhân này bao gồm các nội dung:</div>
            <div style={styles.subtitle}>1. Sự Chấp Thuận</div>
            <p style={styles.paragraph}>
                Bằng việc trao cho chúng tôi thông tin cá nhân của bạn, sử dụng sàn giao dịch thương mại điện tử bạn đồng ý thông tin cá nhân của bạn sẽ được thu thập, sử dụng như được nêu trong Chính Sách này. Nếu bạn không đồng ý với Chính Sách này, bạn dừng cung cấp cho chúng tôi bất cứ thông tin cá nhân nào và/hoặc sử dụng các quyền như được nêu tại Mục 7 dưới đây.
            </p>
            <p style={styles.paragraph}>
                Chúng tôi bảo lưu quyền sửa đổi, bổ sung nhằm hoàn thiện đối với Chính Sách này vào bất kỳ thời điểm nào. Chúng tôi khuyến khích bạn thường xuyên xem lại Chính Sách Bảo Mật Thông Tin Cá Nhân này để có được những cập nhật mới nhất đảm bảo bạn biết và thực hiện quyền quản lý thông tin cá nhân của bạn.
            </p>
            <div style={styles.subtitle}>2. Mục Đích Thu Thập</div>
            <p style={styles.paragraph}>
                Chúng tôi thu thập thông tin cá nhân chỉ cần thiết nhằm phục vụ cho các mục đích:
            </p>
            <ul style={styles.list}>
                <li style={styles.listItem}><strong>Đơn Hàng:</strong> để xử lý các vấn đề liên quan đến đơn đặt hàng của bạn;</li>
                <li style={styles.listItem}><strong>Duy Trì Tài Khoản:</strong> để tạo và duy trì tài khoản của bạn với chúng tôi, bao gồm cả các chương trình khách hàng thân thiết hoặc các chương trình thưởng đi kèm với tài khoản của bạn;</li>
                <li style={styles.listItem}><strong>Dịch Vụ Người Tiêu Dùng, Dịch Vụ Chăm Sóc Khách Hàng:</strong> bao gồm các phản hồi cho các yêu cầu, khiếu nại và phản hồi của bạn;</li>
                <li style={styles.listItem}><strong>Cá Nhân Hóa:</strong> Chúng tôi có thể tổ hợp dữ liệu được thu thập để có một cái nhìn hoàn chỉnh hơn về một người tiêu dùng và từ đó cho phép chúng tôi phục vụ tốt hơn với sự cá nhân hóa mạnh hơn ở các khía cạnh, bao gồm nhưng không giới hạn:
                    <ul style={styles.list}>
                        <li style={styles.listItem}>(i) để cải thiện và cá nhân hóa trải nghiệm của bạn trên sàn giao dịch thương mại điện tử</li>
                        <li style={styles.listItem}>(ii) để cải thiện các tiện ích, dịch vụ, điều chỉnh chúng phù hợp với các nhu cầu được cá thể hóa và đi đến những ý tưởng dịch vụ mới</li>
                        <li style={styles.listItem}>(iii) để phục vụ bạn với những giới thiệu, quảng cáo được điều chỉnh phù hợp với sự quan tâm của bạn.</li>
                    </ul>
                </li>
                <li style={styles.listItem}><strong>An Ninh:</strong> cho các mục đích ngăn ngừa các hoạt động phá hủy tài khoản người dùng của khách hàng hoặc các hoạt động giả mạo khách hàng</li>
                <li style={styles.listItem}><strong>Theo yêu cầu của pháp luật:</strong> tùy quy định của pháp luật vào từng thời điểm, chúng tôi có thể thu thập, lưu trữ và cung cấp theo yêu cầu của cơ quan nhà nước có thẩm quyền.</li>
            </ul>
            <div style={styles.subtitle}>3. Phạm Vi Thu Thập</div>
            <p style={styles.paragraph}>
                Chúng tôi thu thập thông tin cá nhân của bạn khi:
            </p>
            <ul style={styles.list}>
                <li style={styles.listItem}><strong>Bạn trực tiếp cung cấp cho chúng tôi:</strong> Đó là các thông tin cá nhân bạn cung cấp cho chúng tôi được thực hiện chủ yếu trên sàn giao dịch thương mại điện tử  bao gồm: họ tên, địa chỉ thư điện tử (email), số điện thoại, địa chỉ, thông tin đăng nhập tài khoản bao gồm thông tin bất kỳ cần thiết để thiết lập tài khoản ví dụ như tên đăng nhập, mật khẩu đăng nhập, ID/địa chỉ đăng nhập và câu hỏi/trả lời an ninh</li>
                <li style={styles.listItem}><strong>Bạn tương tác với chúng tôi:</strong> Chúng tôi sử dụng cookies và công nghệ theo dõi khác để thu thập một số thông tin khi bạn tương tác trên sàn giao dịch thương mại điện tử</li>
                <li style={styles.listItem}><strong>Từ những nguồn hợp pháp khác.</strong></li>
            </ul>
            <div style={styles.subtitle}>4. Thời Gian Lưu Trữ</div>
            <p style={styles.paragraph}>
                Thông tin cá nhân của khách hàng sẽ được lưu trữ cho đến khi khách hàng có yêu cầu hủy bỏ hoặc khách hàng tự đăng nhập và thực hiện hủy bỏ. Trong mọi trường hợp thông tin cá nhân của khách hàng sẽ được bảo mật trên máy chủ Mint
            </p>
            <div style={styles.subtitle}>5. Không Chia Sẻ Thông Tin Cá Nhân Khách Hàng</div>
            <p style={styles.paragraph}>
                Chúng tôi sẽ không cung cấp thông tin cá nhân của bạn cho bất kỳ bên thứ ba nào, trừ một số hoạt động cần thiết dưới đây:
            </p>
            <ul style={styles.list}>
                <li style={styles.listItem}><strong>Các đối tác là bên cung cấp dịch vụ:</strong> cho chúng tôi liên quan đến thực hiện đơn hàng và chỉ giới hạn trong phạm vi thông tin cần thiết cũng như áp dụng các quy định đảm bảo an ninh, bảo mật các thông tin cá nhân.</li>
                <li style={styles.listItem}><strong>Các chương trình có tính liên kết:</strong> đồng thực hiện, thuê ngoài cho các mục đích được nêu tại Mục 2 và luôn áp dụng các yêu cầu bảo mật thông tin cá nhân.</li>
                <li style={styles.listItem}><strong>Yêu cầu pháp lý:</strong> Chúng tôi có thể tiết lộ các thông tin cá nhân nếu điều đó do luật pháp yêu cầu và việc tiết lộ như vậy là cần thiết một cách hợp lý để tuân thủ các quy trình pháp lý.</li>
                <li style={styles.listItem}><strong>Chuyển giao kinh doanh (nếu có):</strong> trong trường hợp sáp nhập, hợp nhất toàn bộ hoặc một phần với công ty khác, người mua sẽ có quyền truy cập thông tin được chúng tôi lưu trữ, duy trì trong đó bao gồm cả thông tin cá nhân.</li>
            </ul>
            <div style={styles.subtitle}>6. An Toàn Dữ Liệu</div>
            <p style={styles.paragraph}>
                Chúng tôi luôn nỗ lực để giữ an toàn thông tin cá nhân của khách hàng, chúng tôi đã và đang thực hiện nhiều biện pháp an toàn, bao gồm:
            </p>
            <ul style={styles.list}>
                <li style={styles.listItem}><strong>Bảo đảm an toàn trong môi trường vận hành:</strong> chúng tôi lưu trữ thông tin cá nhân khách hàng trong môi trường vận hành an toàn và chỉ có nhân viên, đại diện và nhà cung cấp dịch vụ có thể truy cập trên cơ sở cần phải biết. Chúng tôi tuân theo các tiêu chuẩn ngành, pháp luật trong việc bảo mật thông tin cá nhân khách hàng.</li>
                <li style={styles.listItem}><strong>Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công:</strong> dẫn đến mất mát dữ liệu cá nhân khách hàng, chúng tôi sẽ có trách nhiệm thông báo vụ việc cho cơ quan chức năng để điều tra xử lý kịp thời và thông báo cho khách hàng được biết.</li>
                <li style={styles.listItem}><strong>Các thông tin thanh toán:</strong> được bảo mật theo tiêu chuẩn ngành.</li>
            </ul>
            <div style={styles.subtitle}>7. Quyền Của Khách Hàng Đối Với Thông Tin Cá Nhân</div>
            <p style={styles.paragraph}>
                Khách hàng có quyền cung cấp thông tin cá nhân cho chúng tôi và có thể thay đổi quyết định đó vào bất cứ lúc nào.
            </p>
            <p style={styles.paragraph}>
                Khách hàng có quyền tự kiểm tra, cập nhật, điều chỉnh thông tin cá nhân của mình bằng cách đăng nhập vào tài khoản và chỉnh sửa thông tin cá nhân hoặc yêu cầu chúng tôi thực hiện việc này.
            </p>
            <div style={styles.subtitle}>8. Thông Tin Liên Hệ</div>
            <p style={styles.paragraph}>
                Nếu bạn có câu hỏi hoặc bất kỳ thắc mắc nào về Chính Sách này hoặc thực tế việc thu thập, quản lý thông tin cá nhân của chúng tôi, xin vui lòng liên hệ với chúng tôi bằng cách:
            </p>
            <ul style={styles.list}>
                <li style={styles.listItem}><strong>Gọi điện thoại đến hotline:</strong> 0582 311 225</li>
                <li style={styles.listItem}><strong>Gửi thư điện tử đến địa chỉ email:</strong> mintcosmetic@gmail.com </li>
            </ul>
        </div>
    );
}

export default PrivacyPolicy;
