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
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#dc3545',
    },
    subtitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginTop: '20px',
        marginBottom: '10px',
        color: '#dc3545',
    },
    paragraph: {
        marginBottom: '20px',
        fontSize: '18px',
    },
    list: {
        listStyleType: 'disc',
        marginLeft: '20px',
        fontSize: '18px',
    },
    listItem: {
        marginBottom: '10px',
    },
    bold: {
        fontWeight: 'bold',
    },
};

function TermsOfUse() {
  return (
    <div style={styles.container}>
      <div style={styles.title}>Điều Kiện Sử Dụng</div>
      
      <div style={styles.subtitle}>1. Giới thiệu</div>
      <p style={styles.paragraph}>
          Công ty thương mại dịch vụ tổng hợp Hoàn Vũ là nhà phân phối độc quyền các thương hiệu mỹ phẩm được kinh doanh trong Beauty Box tại Việt Nam. Toàn bộ nội dung của trang web được bảo vệ bởi luật bản quyền của Việt Nam và các công ước quốc tế. Bản quyền đã được bảo lưu.
      </p>
      
      <div style={styles.subtitle}>2. Chính sách khuyến mãi giá</div>
      <ul style={styles.list}>
          <li style={styles.listItem}>Thông tin, chính sách giá trên trang website luôn giống ở các cửa hàng bán hàng trực tiếp.</li>
          <li style={styles.listItem}>Tuy nhiên trong một số chương trình khuyến mãi, một số mặt hàng giá SỐC có thể online chỉ có số lượng nhất định, chúng tôi sẽ công bố số lượng này lên trang web, nếu đã bán hết số lượng quy định này, bạn vui lòng đến các cửa hàng để mua hàng.</li>
          <li style={styles.listItem}>Nếu có sai sót chênh lệch nào đó giữa giá online và giá tại các cửa hàng bán hàng trực tiếp của Beauty Box, thì giá khuyến mãi sẽ được áp dụng cho kênh bán hàng nào mà bạn quyết định chọn mua.</li>
          <li style={styles.listItem}>Một số chương trình dành riêng cho online, khi đó giá khuyến mãi online có thể khác so với giá khuyến mãi tại các cửa hàng bán hàng trực tiếp,… các giá này chỉ dành riêng cho online mà không áp dụng cho bán hàng trực tiếp tại các cửa hàng.</li>
      </ul>
      
      <div style={styles.subtitle}>3. Chính sách khuyến mãi quà tặng</div>
      <p style={styles.paragraph}>
          Các chính sách quà tặng khi mua online sẽ được hưởng tùy theo các chương trình quà tặng của Beauty Box.
      </p>
    </div>
  );
}

export default TermsOfUse;
