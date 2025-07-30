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
