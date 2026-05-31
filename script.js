// ==========================================
// THƯ VIỆN HÌNH ẢNH MÙA DALAT WELLNESS HOTEL
// Anh Khánh dán 10 link ảnh của mỗi phòng vào đây
// ==========================================
const roomCategories = [
    {
        title: "Hạng Phòng: Little Dalat Double Room",
        description: "Không gian tĩnh mịch, ấm cúng dành riêng cho sự riêng tư và tái tạo năng lượng.",
        // Đủ 10 hình cho phòng Little Dalat Double Room (Anh thay link trong dấu "" nhé)
        images: [
            "https://static03-cdn.oneinventory.com/images/2023/11/eacd0b91059f4a3dbd7b036c0636aeb4.jpg",
            "https://static03-cdn.oneinventory.com/images/2023/11/69a33213c4e842d8a19cedf6f636428f.jpg",
            "https://static03-cdn.oneinventory.com/images/2023/11/d1a3eac08eab44b39409e8d4dc60053a.jpg",
            "https://static03-cdn.oneinventory.com/images/2023/11/dd82e1bbd8224e6bb2a757ca8ebfe0eb.jpg",
            "https://static03-cdn.oneinventory.com/images/2023/11/b271a639ff7f4286929f43477cd1458d.jpg",
            "https://static03-cdn.oneinventory.com/images/2023/11/bca156b8eab44c358b4c105ade5cb544.jpg",
            "https://static03-cdn.oneinventory.com/images/2025/08/aef500bd2d104fc7970f77fd63f48348.jpg",
            "https://static03-cdn.oneinventory.com/images/2025/08/10b92d4bcf864d158e83e113d85c2a39.jpg"
        ]
    },
    {
        title: "Hạng Phòng: Mùa Signature Room",
        description: "Hạng phòng mang tính biểu tượng với thiết kế mở tầm nhìn rộng lớn hướng thiên nhiên.",
        // Đủ 10 hình cho phòng Mùa Signature Room (Anh thay link trong dấu "" nhé)
        images: [
            "https://static03-cdn.oneinventory.com/images/2023/11/1020f48040f54f4bbb9a7de5e038a4c4.jpg",
            "https://static03-cdn.oneinventory.com/images/2023/11/54745f85df674d008a26908baa68e5f5.jpg",
            "https://static03-cdn.oneinventory.com/images/2023/11/06b9f1793a94445792ba438ab662cda8.jpg",
            "https://static03-cdn.oneinventory.com/images/2023/11/16b39a6b03a24b04b34ee1c3bf525246.jpg",
            "https://static03-cdn.oneinventory.com/images/2025/04/392da46d6d8a418a9d8e2eea075320a4.jpg",
            "https://static03-cdn.oneinventory.com/images/2025/04/4b7330a17e7946929ca1ed11a68f276a.jpg"
        ]
    }
];

// ==========================================
// CÁC HÀM XỬ LÝ CHỨC NĂNG GIAO DIỆN
// ==========================================

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

// Hàm tự động phân phối và render hình ảnh theo cụm hạng phòng
document.addEventListener("DOMContentLoaded", function() {
    const hotelGallery = document.getElementById("wellness-hotel-gallery");
    if (!hotelGallery) return;

    roomCategories.forEach(category => {
        // Tạo phân vùng bọc cho từng loại phòng
        const section = document.createElement("div");
        section.className = "room-category-block";
        section.style.marginBottom = "50px";

        // Tạo tiêu đề phòng
        const title = document.createElement("h3");
        title.innerText = category.title;
        title.style.margin = "25px 0 5px 0";
        title.style.color = "#d35400";
        title.style.fontFamily = "'Comfortaa', cursive";
        title.style.fontSize = "1.4rem";

        // Tạo mô tả ngắn
        const desc = document.createElement("p");
        desc.innerText = category.description;
        desc.style.color = "#7f8c8d";
        desc.style.marginBottom = "20px";
        desc.style.fontSize = "0.95rem";

        // Tạo khung lưới Grid chứa ảnh (Kế thừa CSS từ file style.css của anh)
        const grid = document.createElement("div");
        grid.className = "gallery-grid"; 

        // Vòng lặp phân bố chính xác toàn bộ danh sách hình ảnh được cung cấp
        category.images.forEach((url, index) => {
            const card = document.createElement("div");
            card.className = "gallery-card";

            const img = document.createElement("img");
            img.src = url;
            img.alt = `${category.title} - Hình ảnh số ${index + 1}`;
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.objectFit = "cover";

            // Chống lỗi hiển thị: Nếu link ảnh chết hoặc lỗi đường truyền, tự động trả về ảnh phong cảnh phòng an toàn
            img.onerror = function() {
                this.src = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80";
            };

            // Gắn nhãn số thứ tự ảnh góc dưới card
            const span = document.createElement("span");
            span.innerText = `Góc ảnh ${index + 1}`;

            card.appendChild(img);
            card.appendChild(span);
            grid.appendChild(card);
        });

        // Đóng gói cụm dữ liệu đưa lên cây thư mục DOM
        section.appendChild(title);
        section.appendChild(desc);
        section.appendChild(grid);
        hotelGallery.appendChild(section);
    });
});
