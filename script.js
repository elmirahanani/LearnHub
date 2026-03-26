const menuBtn = document.getElementById("menuBtn");
const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu");
const menuBox = document.getElementById("menuBox");
const overlay = document.getElementById("overlay");

//toggle buka tutup
menuBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("hidden")) {
    //buka menu
    mobileMenu.classList.remove("hidden");

    setTimeout(() => {
      overlay.classList.remove("opacity-0");
      menuBox.classList.remove("translate-x-full");
    }, 10);
    menuIcon.classList.replace("ri-menu-line", "ri-close-line");

  } else {
    //tutup menu
    closeMenu();
  }
});

//klik overlay = tutup
overlay.addEventListener("click", closeMenu);

//function close
function closeMenu() {
  overlay.classList.add("opacity-0");
  menuBox.classList.add("translate-x-full");

  setTimeout(() => {
    mobileMenu.classList.add("hidden");
  }, 300);

  menuIcon.classList.replace("ri-close-line", "ri-menu-line");
}

//contact
const flagsContainer = document.getElementById("flags");


const images = [
  "assets/grafik_chart.png",
  "assets/book-line.png",
  "assets/lamp-outline.png",
  "assets/graduation-cap.png",
  "assets/laptop.png",
];


function spawnFloatingFlags() {
  images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.className = "flag";


    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;


    const moveX = (Math.random() - 0.5) * 120; // kiri kanan
    const moveY = (Math.random() - 0.5) * 120; // atas bawah


    img.style.left = startX + "px";
    img.style.top = startY + "px";
    img.style.setProperty("--x", moveX + "px");
    img.style.setProperty("--y", moveY + "px");
    img.style.animationDuration = 8 + Math.random() * 6 + "s";

    flagsContainer.appendChild(img);
  });
}
setTimeout(spawnFloatingFlags, 1200);

//trending course
const slider = document.getElementById("course-slider");
//1. Fungsi supaya saat halaman load di mobile, dia langsung scroll ke tengah
window.addEventListener("load", () => {
  if (window.innerWidth < 768) {
    const cards = slider.querySelectorAll(".snap-center");
    const middleIndex = Math.floor(cards.length / 2);
    const targetCard = cards[middleIndex];

    //Hitung posisi scroll supaya card tengah berada di tengah layar
    const offsetLeft =
      targetCard.offsetLeft -
      slider.clientWidth / 2 +
      targetCard.clientWidth / 2;
    slider.scrollLeft = offsetLeft;
  }
});

//2. Fungsi untuk navigasi tombol < dan >
function scrollSlider(direction) {
  const scrollAmount = 300; // sesuaikan dengan lebar card + gap
  if (direction === "left") {
    slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  } else {
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
}

//testimonials
const testimonials = [
  {
    name: "Shaesta",
    role: "05 februari 2025",
    text: "I enjoy learning here because the courses are well structured & the explanations are very simple.",
    image: "./assets/user 1.png",
  },
  {
    name: "Park Jisung",
    role: "05 februari 2025",
    text: "The bag is very durable, it has been used for traveling many times and is still going strong until now..",
    image: "./assets/user 2.png",
  },
  {
    name: "Daniel",
    role: "05 februari 2025",
    text: "The clean, premium design and lifetime warranty make you feel really calm.",
    image: "./assets/user 1.png",
  },
];
let current = 0;

const container = document.getElementById("testimonialContainer");
const nextBtn = document.getElementById("nextTestimoni");

function renderCards() {
  container.innerHTML = "";

  testimonials.forEach((item, index) => {
    const position =
      (index - current + testimonials.length) % testimonials.length;

    const card = document.createElement("div");
    card.className = `
   absolute left-0 right-0 top-0
   rounded-3xl p-6 md:p-10
   transition-all duration-500 ease-out`;


    const styles = [
      {
        bg: "#1E4A47",
        color: "white",
        transform: "translate(0,0) scale(1)",
        z: "z-30 shadow-2xl",
      },
      {
        bg: "#F1FCFB",
        color: "#1E4A47",
        transform: "translate(25px,25px) scale(0.95) rotate(3deg)",
        z: "z-20 shadow-xl",
      },
      {
        bg: "#F1FCFB",
        color: "#1E4A47",
        transform: "translate(-25px,35px) scale(0.9) rotate(-6deg)",
        z: "z-10 shadow-lg",
      },
    ];
    const style = styles[position] || styles[2];

    card.style.background = style.bg;
    card.style.color = style.color;
    card.style.transform = style.transform;
    card.classList.add(...style.z.split(" "));

    card.innerHTML = `
   <div class="flex items-center gap-4 mb-5">

     <img src="${item.image}"
     class="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-white/30">
     <div>
       <h4 class="font-semibold text-base md:text-lg">${item.name}</h4>
       <span class="text-xs opacity-70">${item.role}</span>
     </div>
     </div>

   <p class="leading-relaxed text-sm md:text-base mb-6 opacity-90">
     ${item.text}
   </p>

   <div class="flex gap-1 text-yellow-400 text-sm">
     ★★★★★
   </div>
   `;

    container.appendChild(card);
  });
}
nextBtn.onclick = () => {
  current = (current + 1) % testimonials.length;
  renderCards();
};


renderCards();



