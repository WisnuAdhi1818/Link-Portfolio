const languageSwitcher = document.getElementById('languageSwitcher');
const elements = {
  content1: {
    en: 'Portfolio Website',
    id: 'Website Portofolio',
  },
  content2: {
    en: 'Hello, my name is Wisnu Adhi Wicaksono, I am currently studying to become a Front-End Developer',
    id: 'Halo nama saya Wisnu Adhi Wicaksono, saya saat ini sedang tahap belajar menjadi seorang Front-End Developer',
  },
  downloadBtn: {
    en: 'Download Documents',
    id: 'Download Dokumen',
  },
  judul1: {
    en: 'About Me',
    id: 'Tentang Saya',
  },
  content3: {
    en: 'Read more about my profile here!',
    id: 'Baca lebih lanjut mengenai tentang profil saya disini!',
  },
  content4: {
    en: 'Example of a Cosmetics Website',
    id: 'Contoh Website Kosmetik',
  },
  content5: {
    en: 'Example of a Cooking Blog Website',
    id: 'Contoh Website Blog Masakan',
  },
  content6: {
    en: 'Example of a Pet Shop Website',
    id: 'Contoh Website Toko Hewan',
  },
  content7: {
    en: 'See More on Github',
    id: 'Lihat Lainnya di Github',
  },
  judul2: {
    en: 'My Skills',
    id: 'Keahlianku',
  },
  content8: {
    en: 'My name is Wisnu Adhi Wicaksono. I was born on October 18 2000 and live in Pacitan. Apart from that, I graduated from SMK Negeri 1 Pacitan with the animation profession in 2019. I really am likes things about Art and Technology, such as drawing, playing music, editing, playing games and coding. Even though I dont have work experience in the field that I like, I still continue to learn and develop my ability to become better in the future.',
    id: 'Nama Saya Wisnu Adhi Wicaksono. Saya kelahiran pada tanggal 18 Oktober tahun 2000 dan asal tempat tinggal di Pacitan. Selain itu saya merupakan lulusan dari SMK Negeri 1 Pacitan kejuruan animasi pada tahun 2019. Saya sangatmenyukai hal tentang Seni dan Teknologi, seperti menggambar, bermain musik, editing, bermain game dan ngoding. Meskipun saya belum memiliki pengalaman kerja dibidang yang saya sukai tetapi saya masih tetap belajar mengasah kemampuan saya agar menjadi lebih baik nantinya.',
  },
  content9: {
    en: 'Personal data',
    id: 'Data Diri',
  },
  content10: {
    en: 'Name : Wisnu Adhi Wicaksono',
    id: 'Nama : Wisnu Adhi Wicaksono',
  },
  content11: {
    en: 'Place/Date of Birth : Pacitan, 18 October 2000',
    id: 'Tempat/Tgl Lahir : Pacitan, 18 Oktober 2000',
  },
  content12: {
    en: 'Address : RT.03/RW.09, Dsn.Bulu, Ds.Ngadirejan, Kec.Pringkuku, Kab.Pacitan',
    id: 'Alamat : RT.03/RW.09, Dsn.Bulu, Ds.Ngadirejan, Kec.Pringkuku, Kab.Pacitan',
  },
  content13: {
    en: 'Education : SMK',
    id: 'Pendidikan : SMK',
  },
  content14: {
    en: 'Gender : Male',
    id: 'Jenis Kelamin : Laki - Laki',
  },
  content15: {
    en: 'Number : 082314339208',
    id: 'No. HP : 082314339208',
  },
  content16: {
    en: 'Email : wisnuadhi1818@gmail.com',
    id: 'Email : wisnuadhi1818@gmail.com',
  },

  content17: {
    en: 'Education',
    id: 'Pendidikan<',
  },
  content18: {
    en: 'Experience',
    id: 'Pengalaman',
  },
  content19: {
    en: 'Hobby',
    id: 'Hobi',
  },
  content20: {
    en: 'Draw',
    id: 'Menggambar',
  },
  content21: {
    en: 'Playing Music',
    id: 'Bermain Musik',
  },
  content22: {
    en: 'Coding',
    id: 'Ngoding',
  },
};
languageSwitcher.addEventListener('change', (event) => {
  const selectedLanguage = event.target.value;
  for (const id in elements) {
    document.getElementById(id).textContent = elements[id][selectedLanguage];
  }
});

// get modal
let modal = document.getElementById('modal');
// get btn open modal
let btn = document.getElementById('aboutPage');
// get closing btn modal
let close = document.getElementsByClassName('close')[0];

// click open modal
btn.onclick = function () {
  modal.style.display = 'block';
  document.querySelector('.modal-content').style.animation = 'slideIn 0.5s forwards';
};
// click close modal
close.onclick = function () {
  document.querySelector('.modal-content').style.animation = 'slideOut 0.5s forwards';
  setTimeout(() => {
    modal.style.display = 'none';
  }, 500); // match the duration of the slideOut animation
};

// btn download
document.getElementById('downloadBtn').addEventListener('click', function () {
  const link = document.createElement('a');
  link.href = 'Dokumen_Lamaran.pdf'; // Ganti dengan path file yang ingin kamu unduh
  link.download = 'Dokumen_Lamaran.pdf'; // Ganti dengan nama file yang ingin diunduh
  link.click();
});
document.getElementById('download').addEventListener('click', function () {
  const link = document.createElement('a');
  link.href = 'CV.pdf'; // Ganti dengan path file yang ingin kamu unduh
  link.download = 'CV.pdf'; // Ganti dengan nama file yang ingin diunduh
  link.click();
});
