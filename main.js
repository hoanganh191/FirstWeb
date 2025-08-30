const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector("#main-nav");
const listMainNav = document.querySelector("#main-nav ul");

navToggle.addEventListener("click", function () {
	mainNav.classList.toggle("is-open");
	// 1. Tạo thẻ <li>
	const listItem = document.createElement("li");
	listItem.classList.add("btn-login");

	// 2. Tạo thẻ <a>
	const link = document.createElement("a");
	link.href = "#!";
	link.title = "Login";
	link.textContent = "Login"; // Dùng textContent an toàn hơn innerHTML

	// 3. Gắn <a> vào trong <li>
	listItem.append(link);

	// 4. Gắn <li> vào trong <ul class="nav">
	listMainNav.append(listItem);
	// lenh .toggle hoat dong nhu mot cong tac bat/tat , neu chua
	// co class is-open thi se tu dong them vao con co roi thi se xoa class nay
});
