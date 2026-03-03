const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

// Thêm '.room-grid img' và '.room-video' vào danh sách quan sát
document.querySelectorAll('.timeline-item, .gallery-grid img, .food-grid img, .room-grid img, .room-video')
.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "1s ease-out";
    observer.observe(el);
});