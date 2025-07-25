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
