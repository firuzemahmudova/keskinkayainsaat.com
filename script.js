// Xidmətlərin Məlumat Bazası (Bütün 6 Xidmət Tam Şəkildə)
const serviceData = {
    'mantolama': {
        title: 'Dış Cephe Mantolama & İzolasyon',
        desc: 'Binalarınızda %50’ye varan ısı tasarrufu sağlayan profesyonel dış cephe izolasyon sistemleri. Yüksek kaliteli taş yünü ve EPS köpük malzemeler kullanarak binalarınızı yazın serin, kışın sıcak tutuyoruz.',
        images: [
            'images/DısCepheMantolamaİzolasyon_P1.jpeg',
            'images/DısCepheMantolamaİzolasyon_P2.jpeg'
        ]
    },
    'boya': {
        title: 'Dış Cephe Boya & Restorasyon',
        desc: 'Zamanla yıpranmış, çatlamış bina dış yüzeylerinin nem ve su yalıtımı yapıldıktan sonra, zorlu hava şartlarına dayanıklı silikonlu dış cephe boyaları ile estetik bir görünüme kavuşturulması.',
        images: [
            'images/DışCepheBoyaRestorasyon_P1.jpeg',
            'images/DışCepheBoyaRestorasyon_P2.jpeg'
        ]
    },
    'tesisat': {
        title: 'Tesisat Yenileme',
        desc: 'Su ve elektrik tesisatınızın modern standartlarda, kaliteli boru ve kablolama sistemleriyle tamamen yenilenmesi.',
        images: [
            'images/TesisatYenileme_P2.jpeg',
            'images/TesisatYenileme_2.jpeg',
            'images/TesisatYenileme_P1.jpeg'
            
        ]
    },
    'fayans': {
        title: 'Fayans & Seramik',
        desc: 'Fayans, seramik ve mermer döşeme işlerinde hassas işçilik ve kusursuz lazer hizalama uygulamaları.',
        images: [
            'images/FayansSeramik_1.jpeg',
            'images/FayansSeramik_2.jpeg'
        ]
    },
    'mutfak-banyo': {
        title: 'Mutfak & Banyo',
        desc: 'Özel tasarım mutfak dolapları, tezgahlar ve modern duşakabin çözümleri ile mekanınıza şıklık katıyoruz.',
        images: [
            'images/MutfakBanyo_1.jpeg',
            'images/MutfakBanyo_2.jpeg'
        ]
    },
    'anahtar-teslim': {
        title: 'Anahtar Teslim',
        desc: 'A\'dan Z\'ye tüm süreçleri profesyonelce yönetip mekanınızı teslime hazır hale getiriyoruz.',
        images: [
            'images/Anahtarteslim_P1.jpeg',
            'images/Anahtarteslim_P2.jpeg'
        ]
    }
};

function openServiceModal(serviceKey) {
    const data = serviceData[serviceKey];
    if(!data) return;

    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalDesc').innerText = data.desc;

    const gallery = document.getElementById('modalGallery');
    gallery.innerHTML = '';
    data.images.forEach(imgUrl => {
        const img = document.createElement('img');
        img.src = imgUrl;
        gallery.appendChild(img);
    });

    document.getElementById('serviceModal').style.display = 'flex';
}

function closeServiceModal() {
    document.getElementById('serviceModal').style.display = 'none';
}

// Modal xaricinə kliklədikdə bağlanması
window.onclick = function(event) {
    const modal = document.getElementById('serviceModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


/* Projektgalerie */

document.addEventListener("DOMContentLoaded", function () {

  const modal = document.getElementById("projektModal");
  const modalTitel = document.getElementById("projektModalTitel");
  const modalBilder = document.getElementById("projektModalBilder");
  const schliessen = document.querySelector(
    ".projekt-modal-schliessen"
  );

  if (!modal || !modalTitel || !modalBilder || !schliessen) {
    return;
  }

  const projekte = document.querySelectorAll(".portfolio-item");

  function galerieSchliessen() {
    modal.classList.remove("aktiv");
    document.body.classList.remove("projekt-modal-offen");
    modalBilder.innerHTML = "";
  }

  projekte.forEach(function (projekt) {

    projekt.style.cursor = "pointer";

    projekt.addEventListener("click", function (event) {

      // Verhindert das Öffnen externer Projektlinks
     const link = event.target.closest("a");

if (link) {
  event.stopPropagation();
  return;
}

      const titel = projekt.querySelector("h4");
      const bilder = projekt.querySelectorAll("img");

      if (!bilder.length) return;

      modalTitel.textContent = titel
        ? titel.textContent
        : "Projektgalerie";

      modalBilder.innerHTML = "";

      bilder.forEach(function (bild) {

        const grossesBild = document.createElement("img");

        grossesBild.src = bild.getAttribute("src");
        grossesBild.alt = bild.alt || "Projektbild";
        grossesBild.loading = "lazy";

        modalBilder.appendChild(grossesBild);

      });

      modal.classList.add("aktiv");
      document.body.classList.add("projekt-modal-offen");
      modal.scrollTop = 0;

    });

  });

  schliessen.addEventListener("click", galerieSchliessen);

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      galerieSchliessen();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      galerieSchliessen();
    }
  });

});


/* Hakkımızda otomatik fotoğraf geçişi */

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".about-slider .about-slide");

    if (slides.length < 2) return;

    let currentSlide = 0;

    setInterval(() => {
        slides[currentSlide].classList.remove("active");

        currentSlide = (currentSlide + 1) % slides.length;

        slides[currentSlide].classList.add("active");
    }, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const menuButton = document.querySelector(".mobile-nav-toggle");
    const navigation = document.getElementById("site-navigation");

    if (!navbar || !menuButton || !navigation) return;

    function setMenuOpen(isOpen) {
        navbar.classList.toggle("mobile-nav-open", isOpen);
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Menüyü kapat" : "Menüyü aç");
    }

    menuButton.addEventListener("click", function () {
        setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
    });

    navigation.addEventListener("click", function (event) {
        if (event.target.closest("a")) setMenuOpen(false);
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") setMenuOpen(false);
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) setMenuOpen(false);
    });
});
