const languageSwitcher = document.getElementById('languageSwitcher');
const elements = {
  'hero-content1': {
    en: 'Hello, my name is Wisnu Adhi Wicaksono, I am currently studying to become a Front-End Developer',
    id: 'Halo Perkenalkan nama saya Wisnu Adhi Wicaksono, saya saat ini sedang belajar mengenai Web Developer dan menjadi Front-End Developer',
  },
  'hero-content2': {
    en: 'I like Information Technology and Art, as technology today is also part of art',
    id: 'Saya menyukai Informasi Teknologi dan Seni, selayaknya teknologi saat ini juga bagian dari seni',
  },
  'hero-content3': {
    en: 'Visit my complete portfolio on Gihub',
    id: 'Kunjungi portfolio saya lebih lengkap di gihub',
  },
  'about-content1': {
    en: 'About Me',
    id: 'Tentang Saya',
  },
  project1: {
    en: 'Example of a Cosmetics Website',
    id: 'Contoh Website Kosmetik',
  },
  project2: {
    en: 'Example of a Cooking Blog Website',
    id: 'Contoh Website Blog Masakan',
  },
  project3: {
    en: 'Example of a Pet Shop Website',
    id: 'Contoh Website Toko Hewan',
  },
  project4: {
    en: 'See More on Github',
    id: 'Lihat Lainnya di Github',
  },
  bio: {
    en: 'My name is Wisnu Adhi Wicaksono. I was born on October 18 2000 and live in Pacitan. Apart from that, I graduated from SMK Negeri 1 Pacitan with the animation profession in 2019. I really am likes things about Art and Technology, such as drawing, playing music, editing, playing games and coding. Even though I dont have work experience in the field that I like, I am still learning to hone it my ability to become better in the future. Additionally I have provided several files or files for my work requirements below.',
    id: 'Nama Saya Wisnu Adhi Wicaksono. Saya kelahiran pada tanggal 18 Oktober tahun 2000 dan asal tempat tinggal di Pacitan. Selain itu saya merupakan lulusan dari SMK Negeri 1 Pacitan kejuruan animasi pada tahun 2019. Saya sangat menyukai hal tentang Seni dan Teknologi, seperti menggambar, bermain musik, editing, bermain game dan ngoding. Meskipun saya belum memiliki pengalaman kerja dibidang yang saya sukai tetapi saya masih tetap belajar mengasah kemampuan saya agar menjadi lebih baik nantinya. Selain itu saya telah menyediakan beberapa file atau berkas untuk persyaratan kerja saya di bawah ini.',
  },
  downloadBtn: {
    en: 'Download Documents',
    id: 'Download Dokumen',
  },
};
languageSwitcher.addEventListener('change', (event) => {
  const selectedLanguage = event.target.value;
  for (const id in elements) {
    document.getElementById(id).textContent = elements[id][selectedLanguage];
  }
});

let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let slides = document.querySelectorAll('.slide,.slide1,.slide2');
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide, index) => {
    slide.style.display = 'none';
    if (index === slideIndex) {
      slide.style.display = 'block';
    }
  });
}

// Get the modal
var modal = document.getElementById('modal');

// Get the button that opens the modal
var btn = document.getElementById('aboutPage');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
  document.querySelector('.modal-content').style.animation = 'slideIn 0.5s forwards';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  document.querySelector('.modal-content').style.animation = 'slideOut 0.5s forwards';
  setTimeout(() => {
    modal.style.display = 'none';
  }, 500); // match the duration of the slideOut animation
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    document.querySelector('.modal-content').style.animation = 'slideOut 0.5s forwards';
    setTimeout(() => {
      modal.style.display = 'none';
    }, 500); // match the duration of the slideOut animation
  }
};

document.getElementById('downloadBtn').addEventListener('click', function () {
  const link = document.createElement('a');
  link.href = 'Dokumen_Lamaran_Pekerjaan.pdf'; // Ganti dengan path file yang ingin kamu unduh
  link.download = 'Dokumen_Lamaran_Pekerjaan.pdf'; // Ganti dengan nama file yang ingin diunduh
  link.click();
});
