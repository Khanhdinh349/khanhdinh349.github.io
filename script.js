// Hàm quản lý chuyển đổi giữa các ngày (Tabs)
function openDay(evt, dayName) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    
    document.getElementById(dayName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Vòng lặp tự động render danh sách hình ảnh từ home1.jpg đến home45.jpg
document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.getElementById("dynamic-gallery");
    
    // Chạy chính xác từ ảnh 1 đến ảnh 45
    for (let i = 1; i <= 45; i++) {
        // Loại trừ không hiển thị file ảnh số 4 (home4.jpg) theo yêu cầu
        if (i === 4) {
            continue;
        }
        
        const card = document.createElement("div");
        card.className = "gallery-card";
        
        const img = document.createElement("img");
        // SỬA TẠI ĐÂY: Chuyển hoàn toàn thành 'image/' viết thường để khớp với thư mục trên Git
        img.src = `image/home${i}.jpg`; 
        img.alt = `Không gian Homestay số ${i}`;
        
        // Cơ chế giữ an toàn: Nếu lỡ mất file nào trên Git, nó sẽ lấy ảnh thung lũng thay thế để không bị trống trang
        img.onerror = function() {
            this.src = `https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80`;
        };
        
        const label = document.createElement("span");
        label.innerText = `Góc nhìn ${i}`;
        
        card.appendChild(img);
        card.appendChild(label);
        galleryContainer.appendChild(card);
    }
});
