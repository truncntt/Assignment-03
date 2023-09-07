    const emailInput = document.getElementById("email");
    const infoContainer = document.getElementById("info-container");
    const errorMessage = document.getElementById("error-message");

        document.getElementById("data-form").addEventListener("submit", function (e) {
            e.preventDefault(); // Ngăn chặn hành động mặc định của sự kiện click

            const enteredEmail = emailInput.value.trim();
            
            if (isValidEmail(enteredEmail)) {
                // Hiển thị thông tin và ẩn form
                document.getElementById("data-form").classList.add("hide");
                infoContainer.classList.remove("hide");
            } else {
                // Hiển thị thông báo lỗi
                errorMessage.textContent = "Email không hợp lệ! Vui lòng nhập lại.";
                errorMessage.style.color = "red";
            }
        });


        function isValidEmail(email) {
            // Sử dụng một biểu thức chính quy đơn giản để kiểm tra định dạng email
            const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(email);
        }


    // Lấy ra tất cả các nút "View More" bằng class
    const viewMoreButtons = document.querySelectorAll(".view-more-button");
    const showInfoElements = document.querySelectorAll(".show-info");

    // Biến để kiểm tra trạng thái hiện tại
    let isExpanded = false;

    // Bắt sự kiện click trên từng nút "View More"
    viewMoreButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Toggle lớp CSS "hide" trên tất cả các phần tử show-info

            showInfoElements.forEach(function (showInfo) {
                showInfo.classList.toggle("hide");
            });
            
            // Thay đổi nội dung nút dựa vào trạng thái hiện tại
            isExpanded = !isExpanded;
            if (isExpanded) {
                viewMoreButtons.forEach(function (button) {
                    button.innerHTML = '<i class="bi bi-caret-up-fill"></i><p>View Less</p>';
                });
            } else {
                viewMoreButtons.forEach(function (button) {
                    button.innerHTML = '<i class="bi bi-caret-down-fill"></i><p>View More</p>';
                });
            }
        });
    });


