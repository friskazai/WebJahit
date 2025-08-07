document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("ikon-menu");
  const tulisMenu = document.getElementById("tulis-menu");
  const menuIconBar = menuIcon.querySelector("i");
  const faders = document.querySelectorAll(".fade-element");

  menuIcon.addEventListener("click", () => {
    tulisMenu.classList.toggle("active");

    if (tulisMenu.classList.contains("active")) {
      menuIconBar.classList.remove("fa-bars");
      menuIconBar.classList.add("fa-xmark");
      // Optional: disable scroll here
      document.body.style.overflow = "hidden";
    } else {
      menuIconBar.classList.remove("fa-xmark");
      menuIconBar.classList.add("fa-bars");
      // Enable scroll back
      document.body.style.overflow = "";
    }
  });

  // Form validation independent of menu toggle
  const form = document.querySelector('.formulir-kontak');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const nama = document.getElementById('nama');
      const email = document.getElementById('email');
      const pesan = document.getElementById('pesan');

      document.querySelectorAll('.pesan-error').forEach(el => el.remove());

      let valid = true;

      if (nama.value.trim() === '') {
        tampilkanError(nama, 'Isi nama kamu');
        valid = false;
      }

      if (email.value.trim() === '') {
        tampilkanError(email, 'Isi email kamu');
        valid = false;
      } else if (!email.value.includes('@') || !email.value.includes('.')) {
        tampilkanError(email, 'Masukkan email yang valid');
        valid = false;
      }

      if (pesan.value.trim() === '') {
        tampilkanError(pesan, 'Isi pesan kamu');
        valid = false;
      }

      if (valid) {
        form.submit(); // jika valid submit form secara normal atau via ajax
      }
    });
  }

  function tampilkanError(elemen, pesan) {
    const span = document.createElement('span');
    span.className = 'pesan-error';
    span.style.color = 'red';
    span.style.fontSize = '14px';
    span.textContent = pesan;
    elemen.parentNode.appendChild(span);
  }

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  function handleScroll() {
    faders.forEach(el => {
      if (isInViewport(el)) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
  handleScroll();
});
