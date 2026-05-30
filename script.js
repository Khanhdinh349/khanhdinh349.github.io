// Tab Switching Management Function
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

// Render loop from home1.jpg to home45.jpg (Excluding home4.jpg)
document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.getElementById("dynamic-gallery");
    
    for (let i = 1; i <= 45; i++) {
        // Bỏ qua không xử lý và không render file ảnh số 4 (home4.jpg)
        if (i === 4) {
            continue;
        }
        
        const card = document.createElement("div");
        card.className = "gallery-card";
        
        const img = document.createElement("img");
        img.src = `Image/home${i}.jpg`;
        img.alt = `Không gian Homestay số ${i}`;
        
        // Cơ chế dự phòng (fallback) nếu lỗi đường dẫn tệp
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
