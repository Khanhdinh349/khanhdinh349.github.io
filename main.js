const gallery = document.getElementById("gallery");
const tabs = document.querySelectorAll(".tab");

function generateImages(folder, prefix, count) {
  let arr = [];
  for (let i = 1; i <= count; i++) {
    arr.push(`assets/images/${folder}/${prefix} (${i}).jpg`);
  }
  return arr;
}

const images = {
  accommodation: generateImages("accommodation", "tent-exterior", 33),
  food: generateImages("food", "bbq-dinner", 32),
  landspace: generateImages("landspace", "island-view", 17)
};

function loadGallery(type) {
  gallery.innerHTML = "";
  images[type].forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.loading = "lazy";
    gallery.appendChild(img);
  });
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    loadGallery(tab.dataset.type);
  });
});

loadGallery("accommodation");
