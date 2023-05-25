
  // Set tanggal dan waktu untuk anniversary
  var anniversaryDate = new Date("2021-05-21T00:00:00Z");

  function updateCountdown() {
    var currentDate = new Date();

    // Hitung selisih antara tanggal sekarang dan anniversary
    var timeDifference = currentDate - anniversaryDate;

    // Hitung sisa hari, jam, menit, dan detik
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Perbarui elemen HTML dengan nilai yang dihitung
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }

  // Panggil fungsi updateCountdown setiap detik
  setInterval(updateCountdown, 1000);


  

//letter
  function openLetter() {
    Swal.fire({
      title: 'for you',
      html: '<p>Happy anniversary, my love! Time keeps passing, but our love remains irreplaceable. In every moment spent with you, my heart is filled with happiness and warmth. I am grateful to have embarked on this journey with you. Thank you for your boundless love and unwavering support. I promise to continue nurturing and cherishing our relationship with all my love. With you, I feel complete. Happy anniversary, my love!</p>',
      confirmButtonText: 'Close'
    });
    const mail = document.querySelector(".mail-icon")
    mail.style.display = 'none';
  }


// Fungsi untuk mengatur scroll ke elemen "beginning" saat navbar diklik
function scrollToBeginning() {
  const beginningSection = document.getElementById("beginning");
  window.scrollTo({
    top: beginningSection.offsetTop,
    behavior: "smooth"
  });
}

// Menghubungkan fungsi scrollToBeginning() dengan elemen navbar yang diklik
const beginningNavbar = document.querySelector('nav ul li:nth-child(2)');
beginningNavbar.addEventListener('click', scrollToBeginning);


function scrollToMemories() {
  const memoriesSection = document.getElementById("memories");
  window.scrollTo({
    top: memoriesSection.offsetTop,
    behavior: "smooth"
  });
}

// Menghubungkan fungsi scrollToBeginning() dengan elemen navbar yang diklik
const memoriesNavbar = document.querySelector('nav ul li:nth-child(3)');
memoriesNavbar.addEventListener('click', scrollToMemories);




