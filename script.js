new Swiper('.card-wrapper', {

    loop: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1

        },
        768: {
            slidesPerView: 2

        },
        1024: {
            slidesPerView: 3

        }
    }
});
window.addEventListener('beforeunload', () => {
    localStorage.setItem('scrollPosition', window.scrollY);
  });

  // 2. بعد تحميل الصفحة، ارجع لنفس المكان
  window.addEventListener('load', () => {
    // اقرأ المكان المحفوظ
    const scrollPosition = localStorage.getItem('scrollPosition');
    
    // إذا كان فيه رقم محفوظ (يعني مو أول مرة تفتح الصفحة)
    if (scrollPosition) {
      // انزل لهذا المكان
      window.scrollTo(0, parseInt(scrollPosition, 10));
      // (اختياري) احذف الرقم عشان ما يأثر لو فتحت الصفحة في وقت ثاني
      localStorage.removeItem('scrollPosition'); 
    }
  });

  // 1. نحدد العناصر التي سنتعامل معها
const sidebar = document.querySelector('.home-side');
const toggleBtn = document.querySelector('.open-sidebar-btn');
const searchBtn = document.querySelector('.search-btn');

// 2. عند الضغط على زر القائمة (☰)
toggleBtn.addEventListener('click', () => {
  // قم بـ "تبديل" الكلاس (أضفه إذا لم يكن موجوداً، أو احذفه إذا كان موجوداً)
  sidebar.classList.toggle('sidebar-open');
});

// 3. عند الضغط على زر البحث
searchBtn.addEventListener('click', () => {
  // قم بـ "إضافة" الكلاس (ليفتح القائمة دائماً)
  sidebar.classList.add('sidebar-open');
  sidebar.querySelector('.search-input').focus();
});

// زر مستوى المتدرب بعد التسجيل
// let coursesCount = 12;

// let levelText = "";

// if (coursesCount < 3) {
//     levelText = "مبتدئ";
// } else if (coursesCount < 7) {
//     levelText = "متقدم";
// } else if (coursesCount < 12) {
//     levelText = "محترف";
// } else {
//     levelText = "خبير";
// }


// document.getElementById("level").textContent = levelText;
