// Quản lý chuyển đổi giữa các ngày (Tabs Lịch Trình)
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
    if (evt && evt.currentTarget) {
        evt.currentTarget.classList.add("active");
    }
}

// Tự động khởi tạo album 45 hình ảnh từ thư mục cục bộ image/
document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.getElementById("villa-gallery");
    if (galleryContainer) {
        let galleryHTML = "";
        for (let i = 1; i <= 45; i++) {
            galleryHTML += `
                <div class="gallery-item">
                    <img src="image/home${i}.jpg" alt="Không gian Villa - Góc ${i}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&q=80';">
                    <span>Không gian Villa - Góc ${i}</span>
                </div>
            `;
        }
        galleryContainer.innerHTML = galleryHTML;
    }
});