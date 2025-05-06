const translations = {

  id: {
    home: {
      paragraf1: "Halo semuanya, saya",
      paragraf2: "Adi Supiansah",
      paragraf31: "Fullstack",
      paragraf32: "Pengembang Fullstack",
      paragraf4: "Selamat datang di website pribadi saya",
    },
    about: {
      paragraf1:
        "Halo semuanya, perkenalkan nama saya Adi Supiansyah. Saya berdomisili di Provinsi Kepulauan Riau, Kabupaten Karimun, Kecamatan Meral Barat, Desa Darussalam, Lembah Permai RT02/RW02.",
      paragraf2:
        "Saya adalah seorang web developer dan memiliki pengalaman 3 tahun di bidang administrasi logistik Polres Karimun, di mana saya terbiasa menangani berbagai tugas administratif dan pengelolaan data dengan efisiensi tinggi. Selain itu, saya juga memiliki pengalaman sebagai freelance full-stack web developer dan masih aktif hingga saat ini.",
      paragraf3: `Saya telah menyelesaikan banyak proyek untuk klien dengan hasil yang memuaskan. Untuk melihat portofolio dan karya saya, silakan kunjungi 
<a href="https://github.com/adisupiansah" class='text-blue-500' target='_blank'>akun GitHub saya</a> 
atau <a href="/project" class='text-blue-500'>menu Proyek</a> di situs web ini.`,
      paragraf4: "Silakan gulir ke bawah untuk melihat lebih banyak tentang saya",
      paragraf5: "Salam dan Terima Kasih!",
    },
    experience: {
      pengalamanKerja: {
        1: {
          nama: 'Admin Logistik',
          deskripsi: 'Admin Logistik Polres Karimun',
          tahun: '14 Januari 2021 - 13 Januari 2025',
        },
        2: {
          nama: 'Fullstack Developer',
          deskripsi: 'Membangun dan mengelola aplikasi web dari front-end hingga back-end, dengan fokus pada kebutuhan klien.',
          tahun: '2022 - sekarang',
        },
        3: {
          nama: 'Anggota KPPS 2',
          deskripsi: 'Pemilihan kepala daerah 2024',
          tahun: '27 November 2024',
        }
      },
      pengalamanOrganisasi: {
        1: {
          nama: 'Himpunan Mahasiswa Teknik Informatika Universitas Karimun',
          deskripsi: 'Humas HMTIF Universitas Karimun',
          tahun: '2021 - 2022',
        },
        2: {
          nama: 'Mapala Gunung Jantan, Universitas Karimun',
          deskripsi: 'Humas MGJ Universitas Karimun',
          tahun: '2022 - 2023',
        }
      },
      pengalamanBootcamp: {
        1: {
          nama: 'Bootcamp Desain Grafis',
          deskripsi: 'Rumah BUMN Karimun mengadakan Bootcamp Desain Grafis',
          tahun: '8 Juni 2024',
        }
      }
    },
    project: {
      1: {
        nama: 'SIBALOG',
        deskripsi: 'SIBALOG merupakan sistem informasi yang dirancang untuk memantau data logistik secara efisien di bagian logistik Polres Karimun dan memudahkan dalam pencarian nomor surat.',
        commit: '5 Desember 2024',
      },
      2: {
        nama: 'DISPOSISI BAGLOG',
        deskripsi: 'Aplikasi ini merupakan versi awal sebelum hadirnya aplikasi SALOKA.',
        commit: '13 Juni 2023',
      },
      3: {
        nama: 'NOTADINAS BAGLOG',
        deskripsi: 'Aplikasi ini merupakan versi awal sebelum hadirnya aplikasi SALOKA.',
        commit: '13 Juni 2023',
      },
      4: {
        nama: 'KARTU ULANG TAHUN',
        deskripsi: 'Kartu ucapan selamat ulang tahun dibuat berdasarkan pesanan dari klien.',
        commit: '8 Januari 2025',
      },
      5: {
        nama: 'FRONTEND WEB E-COOMERCE',
        deskripsi: 'Aplikasi ini hanya mencakup Front-end saja tanpa Back-end, sesuai permintaan klien.',
        commit: '25 Maret 2024',
      },
      6: {
        nama: 'FRONTEND WEB RATING FILM',
        deskripsi: 'Aplikasi pemeringkatan film yang memanfaatkan API dari TMDB untuk menampilkan data film secara interaktif.',
        commit: '19 April 2024',
      },
      7: {
        nama: 'PORTFOLIO',
        deskripsi: 'Aplikasi portofolio berbasis web untuk menampilkan karya dan pengalaman secara profesional.',
        commit: '2 Februari 2024',
      },
      8: {
        nama: 'QURANSAYA',
        deskripsi: 'Aplikasi ini dirancang untuk memudahkan pengguna dalam membaca dan memahami Al-Quran secara digital. Dilengkapi dengan fitur-fitur seperti bacaan surah, informasi terjemahan, dan audio, aplikasi ini bertujuan untuk dibaca di mana saja dan kapan saja.',
        commit: '29 Januari 2025',
      },
      9: {
        nama: 'WALLPAPER HD',
        deskripsi: 'Aplikasi ini dikembangkan berdasarkan permintaan klien sebagai bagian dari tugas Ujian Akhir Semester (UAS) untuk membuat aplikasi berbasis web. Data yang digunakan dalam aplikasi ini diperoleh melalui metode web scraping, di mana data diambil dari platform Wallpaperflare.com.',
        commit: '2 Februari 2025',
      },
      10: {
        nama: 'SALOKA',
        deskripsi: 'SALOKA merupakan sistem administrasi yang dirancang untuk mengelola data logistik secara efisien di bagian logistik Polres Karimun.',
        commit: '5 Maret 2025',
      },
      11: {
        nama: 'PENDAFTARAN INDIHOME',
        deskripsi: 'Website pendaftaran IndiHome dibuat berdasarkan pesanan langsung dari tim sales IndiHome di Provinsi Kepulauan Riau, Kabupaten Karimun, sebagai bagian dari tugas akhir yang disusun oleh salah satu sales.',
        commit: '25 April 2025',
      },
      12: {
        nama: 'ADMIN PENDAFTARAN INDIHOME',
        deskripsi: 'Website admin pendaftaran IndiHome ini dirancang untuk mengelola data calon pelanggan yang ingin berlangganan layanan IndiHome. Website ini terintegrasi langsung dengan sistem website pendaftaran IndiHome, sehingga keduanya berfungsi sebagai satu kesatuan dalam proses pengelolaan dan pendaftaran pelanggan.',
        commit: '25 April 2025',
      },
      13: {
        nama: 'KOMENTAR PELANGGAN',
        deskripsi: 'Situs web ini merupakan penilaian dari pelanggan, kolega yang pernah bekerja dengan saya.',
        commit: '5 Mei 2025'
      }
    }
  },
};

export function translateText(key, targetLang, page) {
  const keys = page.split(".");
  let result = translations[targetLang];

  for (const k of keys) {
    result = result?.[k];
  }

  return result?.[key] || key; // Jika tidak ditemukan, kembalikan key asli
}
