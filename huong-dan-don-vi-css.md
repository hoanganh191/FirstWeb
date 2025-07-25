# Hướng dẫn sử dụng đơn vị trong CSS một cách chuẩn mực

#### Tại sao việc chọn đúng đơn vị lại quan trọng?

- **Linh hoạt (Responsiveness):** Giúp giao diện tự động co giãn và hiển thị tốt trên mọi kích thước màn hình, từ điện thoại đến máy tính lớn.
- **Dễ tiếp cận (Accessibility):** Cho phép người dùng có thể tự điều chỉnh kích thước chữ trên trình duyệt mà không làm "vỡ" layout của bạn.
- **Dễ bảo trì (Maintainability):** Giúp bạn dễ dàng thay đổi kích thước hoặc khoảng cách của toàn bộ trang web chỉ bằng cách sửa một vài dòng code.

### Phân loại và cách dùng

Có hai loại đơn vị chính trong CSS: **Tuyệt đối** và **Tương đối**.

#### 1. Đơn vị tuyệt đối (Absolute Units)

Đây là các đơn vị có kích thước cố định, không thay đổi.

- **`px` (Pixel):** Là đơn vị phổ biến nhất trong nhóm này. 1px tương ứng với một điểm ảnh trên màn hình.

  - **Khi nào nên dùng?** Khi bạn muốn một kích thước **chính xác và không bao giờ thay đổi**, bất kể người dùng hay thiết bị.
    - `border-width: 2px;`
    - `box-shadow: 0 0 10px 2px rgba(0,0,0,0.1);`
    - Đôi khi dùng cho kích thước của logo hoặc icon nếu bạn muốn chúng luôn cố định.
  - **Lưu ý:** Hạn chế dùng `px` cho `font-size` và các khoảng cách (`margin`, `padding`) vì nó làm giảm tính linh hoạt và khả năng tiếp cận.

#### 2. Đơn vị tương đối (Relative Units) - "Tiêu chuẩn vàng" cho web hiện đại

Đây là các đơn vị có kích thước được tính toán dựa trên một giá trị khác. Bạn nên **ưu tiên sử dụng** nhóm này.

- **`rem` (root em):** Đây là đơn vị **quan trọng và được khuyên dùng nhiều nhất**. Kích thước của `rem` được tính dựa trên `font-size` của phần tử gốc (thẻ `<html>`).

  - **Khi nào nên dùng?** Cho **hầu hết mọi thứ**:
    - `font-size`
    - `margin`, `padding`
    - `width`, `height` của các thành phần
    - `media queries` (điểm ngắt responsive)
  - **Lợi ích lớn nhất:** Khi người dùng thay đổi kích thước chữ mặc định trên trình duyệt (vì lý do thị lực chẳng hạn), toàn bộ layout của bạn (chữ, khoảng cách, kích thước) sẽ co giãn một cách hài hòa theo, đảm bảo trải nghiệm người dùng tốt nhất.

- **`em`:** Tương đối với `font-size` của **phần tử cha trực tiếp**.

  - **Khi nào nên dùng?** Trong những trường hợp bạn muốn một kích thước phụ thuộc vào kích thước chữ của chính container đó.
    - Ví dụ: `padding` của một button. Nếu button có `font-size: 20px;`, thì `padding: 1em;` sẽ tương đương `20px`. Nếu bạn đổi `font-size` của button thành `30px`, `padding` sẽ tự động thành `30px`. Điều này giúp button luôn cân đối.
  - **Lưu ý:** `em` có thể khó quản lý nếu các phần tử lồng vào nhau nhiều cấp, vì kích thước của nó sẽ bị nhân lên. Vì vậy, hãy dùng nó một cách có chủ đích.

- **`%` (Phần trăm):** Tương đối với kích thước của **container cha**.

  - **Khi nào nên dùng?** Chủ yếu cho việc tạo **layout linh hoạt (fluid layout)**.
    - Ví dụ: Tạo hai cột bằng nhau: `width: 50%;`
  - **Lưu ý:** `padding` và `margin` theo chiều dọc (top/bottom) khi dùng `%` cũng được tính dựa trên **chiều rộng (width)** của cha, có thể gây ra các hành vi không mong muốn.

- **`vh` và `vw` (Viewport Height/Width):** Tương đối với chiều cao và chiều rộng của **cửa sổ trình duyệt (viewport)**. `1vh` = 1% chiều cao viewport, `1vw` = 1% chiều rộng viewport.

  - **Khi nào nên dùng?** Khi bạn muốn một kích thước phụ thuộc trực tiếp vào kích thước màn hình, không phải container cha.

  - **Trường hợp sử dụng thực tế:**

    1.  **Tạo các Section toàn màn hình (Full-screen Sections):** Đây là cách dùng phổ biến và mạnh mẽ nhất. Ví dụ, tạo một khối "Hero" luôn chiếm toàn bộ chiều cao của màn hình:
        ```css
        .hero-section {
        	height: 100vh; /* Luôn cao bằng 100% chiều cao của cửa sổ trình duyệt */
        }
        ```
    2.  **Chữ co giãn linh hoạt (Fluid Typography):** Làm cho kích thước chữ tự động thay đổi theo chiều rộng màn hình mà không cần dùng `media query`.
        ```css
        h1 {
        	font-size: 5vw; /* Kích thước chữ sẽ là 5% chiều rộng của viewport */
        }
        ```
    3.  **Tạo các slide hoặc card trong một slider:** Đảm bảo mỗi slide chiếm toàn bộ chiều rộng của màn hình.
        ```css
        .slide {
        	width: 100vw;
        }
        ```

  - **Lưu ý:**
    - **Vấn đề thanh cuộn ngang:** Sử dụng `width: 100vw;` có thể tạo ra thanh cuộn ngang không mong muốn, vì `100vw` không tính đến chiều rộng của thanh cuộn dọc.
    - **Vấn đề `font-size`:** Dùng `vw` cho `font-size` có thể làm chữ quá nhỏ trên điện thoại hoặc quá lớn trên màn hình rộng. Thường được kết hợp với hàm `clamp()` trong CSS để giới hạn kích thước.
    - **Vấn đề `vh` trên di động:** Chiều cao của viewport (`vh`) có thể thay đổi khi người dùng cuộn trang trên di động (do thanh địa chỉ ẩn/hiện), gây ra hiện tượng "nhảy" layout.

### Bảng tham khảo nhanh

| Thuộc tính (Property)        | Đơn vị khuyên dùng (Recommended) | Lý do (Reason)                                                                                                 |
| ---------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `font-size`                  | `rem`                            | Đảm bảo khả năng tiếp cận, co giãn theo cài đặt của người dùng.                                                |
| `margin`, `padding`          | `rem` (hoặc `em`)                | Giữ khoảng cách hài hòa với kích thước chữ. Dùng `em` nếu muốn khoảng cách phụ thuộc vào `font-size` của cha.  |
| `width`, `height` (Layout)   | `%`, `fr` (grid), `flex-grow`    | Tạo layout linh hoạt, tự động lấp đầy không gian.                                                              |
| `border-width`, `box-shadow` | `px`                             | Cần một giá trị cố định, sắc nét, không bị ảnh hưởng bởi các yếu tố khác.                                      |
| `media queries`              | `em` (hoặc `rem`)                | Giúp các điểm ngắt (breakpoints) của bạn phản hồi theo kích thước chữ của người dùng, không chỉ theo màn hình. |

### Ví dụ thực tế tốt nhất

Đây là cách thiết lập nền tảng cho một dự án CSS hiện đại:

```css
/* 1. Thiết lập font-size gốc để dễ tính toán */
/* Trình duyệt mặc định font-size là 16px.
   62.5% của 16px là 10px.
   Từ đây, 1rem = 10px, giúp việc chuyển đổi từ px sang rem rất dễ dàng. */
html {
	font-size: 62.5%;
}

/* 2. Đặt font-size mặc định cho body bằng rem */
body {
	font-size: 1.6rem; /* Tương đương 16px */
	line-height: 1.5;
}

/* 3. Sử dụng rem cho mọi thứ liên quan đến khoảng cách và kích thước */
.section {
	padding: 8rem 0; /* 80px */
}

.heading {
	font-size: 4.2rem; /* 42px */
	margin-bottom: 2.4rem; /* 24px */
}

/* 4. Sử dụng % cho layout */
.container {
	width: 90%;
	max-width: 1170px; /* Kết hợp với max-width để không bị quá rộng */
	margin: 0 auto;
}

/* 5. Sử dụng em cho các thành phần con đặc biệt */
.button {
	font-size: 1.8rem; /* 18px */
	padding: 1em 2em; /* padding sẽ là 18px và 36px, luôn cân đối với chữ */
}

/* 6. Sử dụng px cho border */
.card {
	border: 1px solid #ddd;
}
```
