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