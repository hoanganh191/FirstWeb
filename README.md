# FirstWeb

Bài học rút ra :

- Phần tử mà to nhất chứa thông tin hoặc xác định được tỉ lệ nó năm trên trang nên để đơn vị là vh,vw,...
- Kỹ năng tô tàu tràn viền background của .hero ngay cả khi .hero có giới hạn kích thước là 1200px (Áp dụng cho cả phần tử không phải con trực tiếp của body):
  ở class chứa .hero ( là box-format hay box-around-hero)
  {
  postion : relative;
  left : 50%;
  margin-left : -50vw;
  }

# Khi ta cho header là các giá trị tính theo rem và phần chiều cao còn lại muốn hiển thị sao cho lấp đầy trang thì ta dùng

height: calc(100vh - 9.2rem); (9.2rem là số minh hoạ )

# Khi phần tử cha có display là flex-box , các thành phần con sẽ được gọi là flex-item.

Giả xử có 2 phần tử con là text và có 1 phần tử text dài, mặc định là nó sẽ chiếm hết độ dài nội dung nên nếu không chỉnh width cho cả 2 thì sẽ không đạt được tỉ lệ mong muốn do còn flex-shirnk mặc định co lại nữa

# Tip cho văn bản chỉ hiển thị đúng 1 dòng hoặc 2 dòng gì đó

//Mặc định là nội dung một dòng
.line-clamp {
display: -webkit-box;
-webkit-line-clamp: var(--line-clamp, 1);
line-clamp: var(--line-clamp, 1);
-webkit-box-orient: vertical;
overflow: hidden;
}

//Muốn 2 dòng thì cần khai báo cả class trên và class này giúp thay đổi giá trị của biến
.line-clamp-2 {
--line-clamp: 2;
}

# Tóm Lại Các Nguyên Tắc Thực Tế
Chiều cao (Height):

Nên: Dùng height: auto (mặc định) cho hầu hết các section. Dùng padding để tạo khoảng trống.
Nên: Dùng min-height nếu bạn muốn section có một chiều cao tối thiểu nhưng vẫn có thể giãn ra nếu nội dung nhiều hơn.
Chỉ dùng khi: Dùng height: 100vh (hoặc calc()) cho section Hero đầu trang.
Tránh: Dùng height với giá trị cố định (px, rem, vh) cho các section chứa nội dung động.
Chiều rộng (Width):

Nên: Section cha (.popular, .blog...) có width: 100% (hoặc 100vw như bạn làm).
Nên: Bên trong có một div.container với max-width (ví dụ: 1200px) và margin: 0 auto để giới hạn chiều rộng nội dung và căn giữa nó trên màn hình lớn. Bạn đã làm điều này rất tốt.
Responsive:

Sử dụng Flexbox (display: flex, flex-wrap: wrap, justify-content) hoặc CSS Grid để sắp xếp các phần tử bên trong section.
Sử dụng Media Queries (@media (max-width: ...px)) để thay đổi layout trên các kích thước màn hình khác nhau (ví dụ: chuyển từ 3 cột sang 2 cột, rồi 1 cột).
Bằng cách áp dụng những nguyên tắc này, trang web của bạn sẽ không chỉ "chuẩn responsive" mà còn rất chuyên nghiệp và dễ dàng để phát triển, bảo trì trong tương lai.
