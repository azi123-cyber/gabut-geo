export const regions = [
  {
    id: "sumatra",
    name: "Sumatra",
    description: "Kawasan poros barat Nusantara dengan pegunungan Bukit Barisan, kaldera vulkanik purba, dan kekayaan geopark maritim.",
    image: "https://images.unsplash.com/photo-1570165780362-eeb1be877bd3?q=80&w=1200&auto=format&fit=crop",
    color: "from-emerald-600 to-teal-800"
  },
  {
    id: "jawa",
    name: "Jawa",
    description: "Poros vulkanik aktif Ring of Fire terpadat di dunia dengan kaldera spektakuler, peradaban candi purba, dan warisan geopark UNESCO.",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1200&auto=format&fit=crop",
    color: "from-amber-600 to-orange-800"
  },
  {
    id: "bali_nusra",
    name: "Bali & Nusa Tenggara",
    description: "Zona transisi biogeografi Garis Wallacea dengan lanskap savana tropis, habitat naga komodo, dan destinasi sport tourism dunia.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
    color: "from-cyan-600 to-blue-800"
  },
  {
    id: "kalimantan",
    name: "Kalimantan",
    description: "Paru-paru dunia dengan hutan hujan tropis purba, batuan ofiolit tertua di Geopark Meratus, dan suaka orangutan terbesar.",
    image: "https://images.unsplash.com/photo-1542317316-f6ab0e5e3247?q=80&w=1200&auto=format&fit=crop",
    color: "from-green-700 to-emerald-900"
  },
  {
    id: "sulawesi",
    name: "Sulawesi",
    description: "Pulau berbentuk huruf K unik hasil tabrakan lempeng benua dan samudra, memiliki palung laut terdalam dan peradaban karst Toraja.",
    image: "https://images.unsplash.com/photo-1627914022839-444458d34b4c?q=80&w=1200&auto=format&fit=crop",
    color: "from-indigo-600 to-purple-800"
  },
  {
    id: "maluku_papua",
    name: "Maluku & Papua",
    description: "Poros maritim jalur rempah dunia, episentrum segitiga terumbu karang global Raja Ampat, dan gletser tropis abadi Lorentz.",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=1200&auto=format&fit=crop",
    color: "from-rose-600 to-red-900"
  }
];

export const destinations = [
  // --- SUMATRA ---
  {
    id: "s1",
    name: "Danau Toba & Pulau Samosir",
    regionId: "sumatra",
    province: "Sumatera Utara",
    type: "Geowisata",
    lat: 2.6101,
    lng: 98.7830,
    elevation: "905 mdpl",
    image: "https://images.unsplash.com/photo-1570165780362-eeb1be877bd3?q=80&w=1000&auto=format&fit=crop",
    locationDesc: "Terletak di dataran tinggi Bukit Barisan, Sumatera Utara, membentang di 7 kabupaten dengan luas permukaan lebih dari 1.130 km².",
    geologicalContext: "Merupakan kaldera supervolcano terbesar di dunia yang terbentuk dari erupsi dahsyat supervulkanik sekitar 74.000 tahun lalu. Letusan ini mengeluarkan 2.800 km³ material vulkanik dan memicu musim dingin vulkanik global. Diakui resmi sebagai UNESCO Global Geopark.",
    strategicPotential: "Poros Geowisata Internasional dan Destinasi Pariwisata Super Prioritas (DPSP). Berperan sebagai catchment area hidrologis raksasa Sumatera bagian utara, pembangkit energi PLTA Asahan, serta pusat pelestarian kearifan lokal budaya Batak.",
    economicImpact: "Penyumbang devisa utama daerah melalui industri perhotelan, UMKM kain ulos dan kopi arabika lintong, serta membuka lapangan kerja bagi ribuan keluarga nelayan dan pemandu lokal.",
    accessibility: "Dapat diakses langsung via Bandara Internasional Silangit (DTB) dan Jalan Tol Medan–Tebing Tinggi–Parapat, serta dermaga kapal feri Ajibata menuju Samosir.",
    bestSeason: "Mei hingga September (musim kemarau dengan cuaca cerah dan visibilitas danau maksimal).",
    isDSP: true
  },
  {
    id: "s2",
    name: "Kepulauan Mentawai",
    regionId: "sumatra",
    province: "Sumatera Barat",
    type: "Bahari",
    lat: -1.4026,
    lng: 98.9220,
    elevation: "0 - 80 mdpl",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1000&auto=format&fit=crop",
    locationDesc: "Gugusan kepulauan terluar di Samudra Hindia, berjarak sekitar 150 km di lepas pantai barat Sumatera Barat.",
    geologicalContext: "Terbentuk dari zona subduksi lempeng Indo-Australia yang menunjam ke bawah lempeng Eurasia (Sesar Mentawai / Forearc Ridge). Memiliki batuan sedimen terangkat dan paparan terumbu karang penghasil ombak laut dalam yang konsisten.",
    strategicPotential: "Spot selancar (surfing) nomor 3 terbaik di dunia. Berada di garis depan pertahanan maritim barat Indonesia dan laboratorium geologi internasional untuk riset kegempaan megathrust.",
    economicImpact: "Menggerakkan devisa wisatawan mancanegara khusus (niche market surfers), memajukan ekowisata berbasis kearifan budaya Suku Mentawai (Sikerei) dan kerajinan lokal.",
    accessibility: "Kapal cepat Mentawai Fast dari Pelabuhan Muaro Padang menuju Tuapejat (Sipora) memakan waktu sekitar 3-4 jam.",
    bestSeason: "April hingga Oktober (periode ombak Samudra Hindia paling konsisten dan kuat).",
    isDSP: false
  },
  {
    id: "s3",
    name: "Ngarai Sianok & Bukittinggi",
    regionId: "sumatra",
    province: "Sumatera Barat",
    type: "Alam",
    lat: -0.3060,
    lng: 100.3644,
    elevation: "930 mdpl",
    image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=1000&auto=format&fit=crop",
    locationDesc: "Lembah curam sepanjang 15 km dengan kedalaman 100 meter di perbatasan Kota Bukittinggi dan Kabupaten Agam.",
    geologicalContext: "Hasil dari aktivitas patahan tektonik aktif Sesar Besar Sumatera (Great Sumatran Fault / Sesar Semangko) yang membelah pulau Sumatera, memperlihatkan stratigrafi dinding batuan tufa vulkanik Maninjau.",
    strategicPotential: "Ikon geowisata edukatif bentang alam graben tektonik, koridor flora-fauna monyet ekor panjang dan siamang, serta pusat episentrum sejarah perjuangan kemerdekaan (PDRI).",
    economicImpact: "Pusat pertumbuhan industri kuliner legendaris Minangkabau (Nasi Kapau), pasar kerajinan tenun pandai sikek, dan perhotelan dataran tinggi.",
    accessibility: "Jalur darat 2 jam dari Bandara Internasional Minangkabau (Padang) melewati jalan panorama Lembah Anai.",
    bestSeason: "Juni hingga Agustus saat intensitas kabut rendah dan langit cerah.",
    isDSP: false
  },
  {
    id: "s4",
    name: "Geopark Belitung",
    regionId: "sumatra",
    province: "Bangka Belitung",
    type: "Geowisata",
    lat: -2.7410,
    lng: 107.6320,
    elevation: "0 - 150 mdpl",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1000&auto=format&fit=crop",
    locationDesc: "Kepulauan di perairan Selat Karimata dan Laut Jawa, di timur pulau Sumatera.",
    geologicalContext: "Diakui sebagai UNESCO Global Geopark. Memiliki formasi batu granit raksasa (Tor Granite) berumur Trias akhir (213 juta tahun lalu) yang terpapar akibat erosi jutaan tahun di pesisir Paparan Sunda purba.",
    strategicPotential: "Transformasi sukses dari kawasan tambang timah pasif menjadi model restorasi pariwisata bahari berkelanjutan, menjaga ekosistem pesisir dan pulau-pulau kecil.",
    economicImpact: "Mendongkrak ekonomi kerakyatan melalui perikanan tangkap ramah lingkungan, pemandu wisata perahu tradisional, serta kuliner gangan dan kopi manggar.",
    accessibility: "Penerbangan harian 45 menit dari Jakarta menuju Bandara H.A.S. Hanandjoeddin (Tanjung Pandan).",
    bestSeason: "Maret hingga Oktober saat laut tenang tanpa gelombang pasang tinggi.",
    isDSP: false
  },

  // --- JAWA ---
  {
    id: "j1",
    name: "Kompleks Candi Borobudur",
    regionId: "jawa",
    province: "Jawa Tengah",
    type: "Budaya",
    lat: -7.6079,
    lng: 110.2038,
    elevation: "265 mdpl",
    image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?q=80&w=1000&auto=format&fit=crop",
    locationDesc: "Terletak di dataran Kedu, Magelang, dikelilingi oleh Gunung Merapi, Gunung Merbabu, Sindoro, Sumbing, serta Perbukitan Menoreh.",
    geologicalContext: "Dibangun dari batu andesit vulkanik padat hasil aliran piroklastik gunung api purba di atas bukit sedimen alami bekas danau purba Borobudur. Warisan Budaya Dunia UNESCO.",
    strategicPotential: "Destinasi Pariwisata Super Prioritas (DPSP), simbol diplomasi budaya dan toleransi dunia, episentrum ziarah umat Buddha internasional (Hari Raya Waisak), dan pilar ekonomi Jawa Bagian Tengah.",
    economicImpact: "Mendorong ekosistem pariwisata Balkondes (Balai Ekonomi Desa), memicu pertumbuhan ribuan UMKM gerabah, batik, kuliner gethuk, dan homestay warga.",
    accessibility: "1,5 jam perjalanan darat dari Bandara Internasional Yogyakarta (YIA) di Kulon Progo melalui jalur arteri mulus atau KA Bandara ke Tugu.",
    bestSeason: "April hingga Oktober (waktu terbaik menikmati sunrise Nirwana Borobudur dari Punthuk Setumbu).",
    isDSP: true
  },
  {
    id: "j2",
    name: "Taman Nasional Bromo Tengger Semeru",
    regionId: "jawa",
    province: "Jawa Timur",
    type: "Geowisata",
    lat: -7.9425,
    lng: 112.9530,
    elevation: "2.329 mdpl",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1000&auto=format&fit=crop",
    locationDesc: "Mencakup 4 wilayah administrasi di Jawa Timur: Kabupaten Probolinggo, Pasuruan, Malang, dan Lumajang.",
    geologicalContext: "Kaldera Tengger purba seluas 5.290 hektar dengan bentang alam lautan pasir (segara wedi) langka di ketinggian lebih dari 2.000 mdpl. Dikelilingi kompleks kubah vulkanik aktif (Bromo, Batok, Kursi, Watangan) dengan latar Mahameru (3.676 mdpl).",
    strategicPotential: "Ikon geowisata vulkanologi dunia, cagar biosfer UNESCO, sarana edukasi mitigasi bencana vulkanik, serta pusat ritual sakral Yadnya Kasada suku Tengger.",
    economicImpact: "Perekonomian warga Tengger bertumpu pada jasa transportasi jip 4x4, sewa kuda lokal, penginapan homestay, dan pertanian sayur-mayur dataran tinggi.",
    accessibility: "Dapat ditempuh 2,5 jam dari Kota Malang atau Surabaya melalui pintu masuk Wonokitri (Pasuruan), Cemorolawang (Probolinggo), atau Tosari.",
    bestSeason: "Juni hingga Agustus saat musim dingin tropis (kemungkinan melihat fenomena 'frost'/embun upas beku).",
    isDSP: false
  },
  {
    id: "j3",
    name: "Kawah Ijen & Blue Fire",
    regionId: "jawa",
    province: "Jawa Timur",
    type: "Geowisata",
    lat: -8.0583,
    lng: 114.2420,
    elevation: "2.386 mdpl",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1000&auto=format&fit=crop",
    locationDesc: "Terletak di puncak Gunung Ijen, perbatasan Kabupaten Banyuwangi dan Kabupaten Bondowoso, Jawa Timur.",
    geologicalContext: "Danau kawah asam terkuat di dunia (pH < 0,5) dengan volume 36 juta m³. Menghasilkan fenomena sublimasi gas belerang bersuhu 600°C yang terbakar menyala biru ('Api Biru' / Blue Fire) yang hanya ada dua di dunia (Ijen dan Dallol Etiopia). UNESCO Global Geopark.",
    strategicPotential: "Laboratorium geotermal dan mineralogi global, pilar utama pariwisata segitiga emas Jawa Timur (Bromo-Ijen-Bali), dan sumber penambangan belerang tradisional.",
    economicImpact: "Memberikan pendapatan pariwisata signifikan bagi Banyuwangi, menyejahterakan para penambang lokal yang bertransformasi menjadi pramuwisata ramah dan pemandu pendakian.",
    accessibility: "Dapat diakses via Bandara Banyuwangi (BWX), dilanjutkan perjalanan 1,5 jam ke pos pendakian Paltuding.",
    bestSeason: "Juli hingga September (pukul 01.00 - 04.00 dini hari untuk menyaksikan Blue Fire optimal).",
    isDSP: false
  },

  // --- BALI & NUSA TENGGARA ---
  {
    id: "bn1",
    name: "Taman Nasional Komodo & Labuan Bajo",
    regionId: "bali_nusra",
    province: "Nusa Tenggara Timur",
    type: "Ekowisata",
    lat: -8.5833,
    lng: 119.4167,
    elevation: "0 - 735 mdpl",
    image: "https://images.unsplash.com/photo-1518386377317-a0684f04d7d9?q=80&w=1000&auto=format&fit=crop",
    locationDesc: "Terletak di Selat Sape antara Pulau Sumbawa dan Flores, berpusat di Pulau Komodo, Rinca, dan Padar.",
    geologicalContext: "Zona pertemuan lempeng sabuk busur vulkanik Sunda-Banda dengan bentang savana gersang dan pantai berpasir merah muda (Pink Beach) akibat serpihan foraminifera merah. Habitat alami satu-satunya kadal purba Varanus komodoensis. Situs Warisan Dunia UNESCO.",
    strategicPotential: "Destinasi Pariwisata Super Prioritas (DPSP) bertaraf internasional, suaka biosfer konservasi fauna purba, gerbang bahari Indonesia timur, dan venue event KTT internasional.",
    economicImpact: "Mendorong ledakan investasi perhotelan bintang lima, persewaan kapal pinisi Live on Board (LOB), jasa diving, serta pasar seni kerajinan tenun Manggarai.",
    accessibility: "Penerbangan langsung dari Jakarta/Bali ke Bandara Internasional Komodo (LBJ), kemudian menyewa kapal cepat atau kapal pinisi di Marina Labuan Bajo.",
    bestSeason: "April hingga Juni (bentang alam savana hijau) atau Juli hingga Oktober (musim kawin komodo dan laut jernih).",
    isDSP: true
  },
  {
    id: "bn2",
    name: "Kawasan Ekonomi Khusus Mandalika",
    regionId: "bali_nusra",
    province: "Nusa Tenggara Barat",
    type: "Bahari",
    lat: -8.8953,
    lng: 116.2917,
    elevation: "0 - 50 mdpl",
    image: "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=1000&auto=format&fit=crop",
    locationDesc: "Pesisir selatan Pulau Lombok menghadap Samudra Hindia, membentang sepanjang 16 km garis pantai berpasir merica putih.",
    geologicalContext: "Lanskap perbukitan karst pantai selatan dengan teluk berpasir kuarsa unik dan terumbu karang penghalang yang meredam gelombang Samudra Hindia.",
    strategicPotential: "Destinasi Pariwisata Super Prioritas (DPSP), pusat Sport Tourism global (Sirkuit Internasional Pertamina Mandalika - MotoGP & WSBK), serta etalase budaya tradisi Bau Nyale suku Sasak.",
    economicImpact: "Menyerap ribuan tenaga kerja lokal di sektor perhotelan, logistik balap internasional, desa wisata Sade dan Ende, serta produksi UMKM mutiara lombok.",
    accessibility: "Hanya 25 menit berkendara melalui jalan bypass bebas hambatan dari Bandara Internasional Lombok (LOP).",
    bestSeason: "Mei sampai September untuk cuaca pantai tropis cerah optimal.",
    isDSP: true
  },
  {
    id: "bn3",
    name: "Danau Tiga Warna Kelimutu",
    regionId: "bali_nusra",
    province: "Nusa Tenggara Timur",
    type: "Geowisata",
    lat: -8.7667,
    lng: 121.8167,
    elevation: "1.639 mdpl",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop",
    locationDesc: "Puncak Gunung Kelimutu di Desa Pemo, Kecamatan Kelimutu, Kabupaten Ende, Pulau Flores tengah.",
    geologicalContext: "Memiliki 3 danau kawah vulkanik yang terus berubah warna secara berkala (Tiwu Ata Mbupu, Tiwu Nuwa Muri Koo Fai, Tiwu Ata Polo) akibat reaksi oksidasi-reduksi kimia belerang, besi, dan asam gas vulkanik bawah danau.",
    strategicPotential: "Fenomena geologi terlangka di dunia, laboratorium geokimia magmatik alami, serta tempat sakral kepercayaan arwah leluhur masyarakat adat Lio.",
    economicImpact: "Penyokong utama pariwisata Flores bagian tengah, pemberdayaan desa wisata adat Moni, dan pemasaran kain tenun ikat Ende-Lio.",
    accessibility: "2 jam perjalanan darat dari Bandara H. Hasan Aroeboesman (Ende) atau 3 jam dari Maumere menuju Desa Moni di kaki gunung.",
    bestSeason: "Juli hingga September saat udara kering dan matahari terbit menyinari kawah tanpa kabut tebal.",
    isDSP: false
  },

  // --- KALIMANTAN ---
  {
    id: "k1",
    name: "Taman Nasional Tanjung Puting",
    regionId: "kalimantan",
    province: "Kalimantan Tengah",
    type: "Ekowisata",
    lat: -2.9739,
    lng: 111.9634,
    elevation: "0 - 100 mdpl",
    image: "https://images.unsplash.com/photo-1542317316-f6ab0e5e3247?q=80&w=1000&auto=format&fit=crop",
    locationDesc: "Semenanjung barat daya Kalimantan Tengah, di tepi Laut Jawa, dilalui aliran Sungai Sekonyer.",
    geologicalContext: "Bentang alam dataran aluvial rawa gambut tropis (peat swamp forest) dan hutan mangrove terluas di Kalimantan, berfungsi sebagai cadangan penyerap karbon dunia raksasa.",
    strategicPotential: "Pusat konservasi dan rehabilitasi Orangutan Kalimantan (Pongo pygmaeus) terbesar di muka bumi (Camp Leakey), cagar biosfer UNESCO, dan benteng pertahanan ekosistem hutan hujan tropis.",
    economicImpact: "Membuka lapangan kerja berkelanjutan bagi pemilik kapal kelotok tradisional, pemandu alam (ecoguide), juru masak kapal, dan pembuat suvenir ramah lingkungan.",
    accessibility: "Penerbangan menuju Bandara Iskandar Pangkalan Bun (PKN), dilanjutkan 30 menit ke pelabuhan Kumai untuk menyusuri Sungai Sekonyer dengan kapal kelotok.",
    bestSeason: "Juni hingga September (musim kemarau memudahkan observasi satwa liar dan feeding time).",
    isDSP: false
  },
  {
    id: "k2",
    name: "Kepulauan Derawan & Kakaban",
    regionId: "kalimantan",
    province: "Kalimantan Timur",
    type: "Bahari",
    lat: 2.2858,
    lng: 118.2430,
    elevation: "0 - 10 mdpl",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop",
    locationDesc: "Gugusan pulau di perairan Laut Sulawesi, Kabupaten Berau, Kalimantan Timur.",
    geologicalContext: "Atol karang terangkat (uplifted atoll). Pulau Kakaban memiliki danau air asin terisolasi di tengah pulau sejak 2 juta tahun lalu, menghasilkan evolusi endemik 4 spesies ubur-ubur tanpa sengat (stingless jellyfish). Kawasan penyu hijau terbesar di Asia Tenggara.",
    strategicPotential: "Gerbang poros maritim timur Kalimantan, bagian dari Segitiga Terumbu Karang Dunia (Coral Triangle), dan cagar bahari perlindungan pari manta serta hiu paus Talisayan.",
    economicImpact: "Mengembangkan industri resort bahari, sewa perahu motor nelayan lokal, edukasi kelautan, dan mendorong diversifikasi ekonomi Berau pasca-tambang batubara.",
    accessibility: "Penerbangan ke Bandara Kalimarau Berau (BEJ), perjalanan darat 2 jam ke Tanjung Batu, lalu speedboat 30 menit ke Pulau Derawan.",
    bestSeason: "April hingga Oktober (ombak tenang, visibilitas bawah laut mencapai 25 meter).",
    isDSP: false
  },

  // --- SULAWESI ---
  {
    id: "sl1",
    name: "Taman Nasional Laut Bunaken",
    regionId: "sulawesi",
    province: "Sulawesi Utara",
    type: "Bahari",
    lat: 1.6231,
    lng: 124.7594,
    elevation: "0 - 200 mdpl (palang bawah laut hingga 1.000m)",
    image: "https://images.unsplash.com/photo-1544551763-77ef2d0cf96c?q=80&w=1000&auto=format&fit=crop",
    locationDesc: "Terletak di Teluk Manado, mencakup Pulau Bunaken, Manado Tua, Siladen, Mantehage, dan Nain.",
    geologicalContext: "Formasi pulau vulkanik purba (Manado Tua) dan terumbu karang terangkat. Memiliki dinding karang terjal (vertical drop-off / underwater wall) sedalam 25-50 meter dengan palung laut dalam yang kaya nutrisi upwelling.",
    strategicPotential: "Pusat keanekaragaman hayati laut dunia dengan 390 spesies karang dan 70% spesies ikan Pasifik Barat. Menjadi penjaga pintu gerbang perairan utara Indonesia ke Pasifik.",
    economicImpact: "Tulang punggung pariwisata internasional Sulawesi Utara, menghidupi asosiasi selam (dive operators), homestay, perahu katamaran kaca, dan kuliner Manado.",
    accessibility: "45 menit penyeberangan perahu motor dari Pelabuhan Marina Manado (dekat dari Bandara Sam Ratulangi MDC).",
    bestSeason: "Mei hingga Oktober (visibilitas air laut sangat jernih dan arus stabil).",
    isDSP: false
  },
  {
    id: "sl2",
    name: "Tana Toraja",
    regionId: "sulawesi",
    province: "Sulawesi Selatan",
    type: "Budaya",
    lat: -2.9818,
    lng: 119.8973,
    elevation: "700 - 1.400 mdpl",
    image: "https://images.unsplash.com/photo-1627914022839-444458d34b4c?q=80&w=1000&auto=format&fit=crop",
    locationDesc: "Dataran tinggi pegunungan tengah Sulawesi Selatan, berjarak 300 km di utara Kota Makassar.",
    geologicalContext: "Morfologi bentang alam perbukitan karst kapur gamping dan lembah granit. Tebing-tebing batu kapur alam dimanfaatkan secara selaras untuk liang kubur batu (Lemo & Londa).",
    strategicPotential: "Pusat peradaban megalitikum hidup tertua di dunia, arsitektur vernakular rumah adat Tongkonan berbentuk perahu, dan ritual kematian Rambu Solo' yang sarat nilai geografi manusia.",
    economicImpact: "Eksportir kopi arabika specialty Toraja kelas dunia ke Jepang dan Eropa, penghasil kerajinan ukiran kayu, dan magnet turis pecinta antropologi.",
    accessibility: "Bisa ditempuh lewat Bandara Toraja di Buntu Kunik (TTR) atau perjalanan darat 8 jam dari Bandara Sultan Hasanuddin Makassar.",
    bestSeason: "Juli hingga September (puncak upacara adat Rambu Solo' dan musim panen padi di terasering).",
    isDSP: false
  },
  {
    id: "sl3",
    name: "Taman Nasional Kepulauan Wakatobi",
    regionId: "sulawesi",
    province: "Sulawesi Tenggara",
    type: "Bahari",
    lat: -5.3186,
    lng: 123.5855,
    elevation: "0 - 100 mdpl",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=1000&auto=format&fit=crop",
    locationDesc: "Gugusan 4 pulau utama di Laut Flores: Wangi-Wangi, Kaledupa, Tomia, dan Binongko (Wakatobi).",
    geologicalContext: "Cagar Biosfer Dunia UNESCO. Memiliki barisan terumbu karang penghalang (barrier reef) terpanjang kedua di dunia setelah Great Barrier Reef Australia dengan 750 dari 850 spesies koral dunia.",
    strategicPotential: "Jantung segitiga terumbu karang dunia, cagar biosfer laut, dan permukiman maritim tradisional Suku Bajo (manusia perahu penjelajah laut nusantara).",
    economicImpact: "Pemberdayaan masyarakat adat Bajo, ekowisata pemantauan lumba-lumba, riset konservasi internasional, dan perikanan tangkap lestari.",
    accessibility: "Penerbangan ke Bandara Matahora di Wangi-Wangi (WNI) via Kendari/Makassar, dilanjutkan kapal antar-pulau.",
    bestSeason: "April hingga Juni, atau Oktober hingga Desember saat angin laut tenang.",
    isDSP: false
  },
  {
    id: "sl4",
    name: "Kawasan Likupang",
    regionId: "sulawesi",
    province: "Sulawesi Utara",
    type: "Bahari",
    lat: 1.6833,
    lng: 125.0500,
    elevation: "0 - 50 mdpl",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
    locationDesc: "Ujung paling utara semenanjung Pulau Sulawesi, menghadap langsung ke Laut Maluku dan Samudra Pasifik.",
    geologicalContext: "Garis pantai dengan perpaduan bukit savana hijau (Bukit Larata) dan pantai pasir putih bersih (Pantai Paal & Pulisan) dengan biota terumbu karang alami dan padang lamun habitat duyung (Dugong).",
    strategicPotential: "Destinasi Pariwisata Super Prioritas (DPSP), Kawasan Ekonomi Khusus (KEK) Pariwisata, dan hub penghubung geostrategis Indonesia bagian timur ke kawasan Asia Timur.",
    economicImpact: "Mendorong pembangunan infrastruktur pelabuhan kapal pesiar internasional, penyerapan tenaga kerja perhotelan, dan pengembangan produk UMKM perikanan tuna.",
    accessibility: "Hanya 1,5 jam perjalanan darat via jalan tol dan arteri dari Kota Manado dan Bandara Internasional Sam Ratulangi.",
    bestSeason: "Mei sampai Oktober saat laut tenang dan langit cerah.",
    isDSP: true
  },

  // --- MALUKU & PAPUA ---
  {
    id: "mp1",
    name: "Kepulauan Raja Ampat",
    regionId: "maluku_papua",
    province: "Papua Barat Daya",
    type: "Bahari",
    lat: -0.2333,
    lng: 130.5167,
    elevation: "0 - 350 mdpl",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop",
    locationDesc: "Gugusan lebih dari 1.500 pulau karang karst kecil di ujung barat kepala burung Papua, berpusat di Waigeo, Misool, Salawati, dan Batanta.",
    geologicalContext: "Diakui sebagai UNESCO Global Geopark. Morfologi karst tropis tertua yang terangkat dari dasar laut, membentuk formasi pulau-pulau jamur dan laguna toska. Titik pusat Segitiga Karang Dunia dengan 540 jenis karang keras dan 1.500 spesies ikan karang.",
    strategicPotential: "Ibu kota keanekaragaman hayati laut dunia (The Crown Jewel of Marine Biodiversity), ikon diplomasi konservasi maritim Indonesia, dan habitat burung cendrawasih merah.",
    economicImpact: "Penerimaan retribusi konservasi lingkungan (Environmental Maintenance Fee) yang langsung mendanai patroli laut masyarakat adat dan program kesejahteraan suku Maya.",
    accessibility: "Penerbangan ke Bandara Domine Eduard Osok Sorong (SOQ), lalu menyeberang dengan kapal feri 2 jam ke Waisai (Waigeo).",
    bestSeason: "Oktober hingga April (angin tenang dan kejernihan air laut terbaik untuk penyelaman).",
    isDSP: false
  },
  {
    id: "mp2",
    name: "Kepulauan Banda Neira",
    regionId: "maluku_papua",
    province: "Maluku",
    type: "Budaya",
    lat: -4.5167,
    lng: 129.9000,
    elevation: "0 - 640 mdpl",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop",
    locationDesc: "Kepulauan kecil terpencil di tengah Laut Banda terdalam di Indonesia, Provinsi Maluku.",
    geologicalContext: "Pulau gunung api aktif Gunung Api Banda (640 mdpl) yang menjulang dari cekungan palung laut Banda. Tanah vulkanik andosol yang sangat subur menjadi habitat alami pohon pala (Myristica fragrans) dan terumbu karang lava flow pasca-letusan 1988.",
    strategicPotential: "Titik geostrategis terpenting dalam sejarah maritim dunia sebagai satu-satunya produsen pala purba yang memicu era penjelajahan samudra bangsa Eropa (Jalur Rempah Dunia / Spice Route). Memiliki benteng peninggalan VOC Fort Belgica.",
    economicImpact: "Menghidupkan ekonomi agrowisata perkebunan pala, pariwisata sejarah, penyelaman bersama hiu martil (hammerhead sharks), dan pelestarian cagar budaya.",
    accessibility: "Dapat diakses dengan kapal Pelni dari Pelabuhan Ambon atau penerbangan perintis terjadwal ke Bandara Banda.",
    bestSeason: "September hingga November dan Maret hingga Mei (perairan Laut Banda tenang tanpa gelombang besar).",
    isDSP: false
  },
  {
    id: "mp3",
    name: "Taman Nasional Lorentz & Pegunungan Jayawijaya",
    regionId: "maluku_papua",
    province: "Papua Tengah & Pegunungan",
    type: "Alam",
    lat: -4.7500,
    lng: 137.8333,
    elevation: "0 - 4.884 mdpl",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop",
    locationDesc: "Membentang seluas 2,4 juta hektar dari pesisir Laut Arafura hingga puncak salju tertinggi di Indonesia, Puncak Jaya (Carstensz Pyramid).",
    geologicalContext: "Situs Warisan Dunia UNESCO terluas di Asia Tenggara. Hasil tumbukan dahsyat lempeng tektonik Pasifik dan Indo-Australia yang mengangkat dasar laut menjadi pegunungan salju tropis abadi dengan fosil kerang di ketinggian 4.000 mdpl.",
    strategicPotential: "Satu-satunya kawasan di kawasan ekuator Asia-Pasifik yang memiliki gradasi ekosistem terlengkap: dari laut mangrove tropis hingga gletser salju es abadi. Laboratorium iklim dan evolusi bumi terlengkap.",
    economicImpact: "Pusat ekowisata petualangan mountaineering kelas dunia Seven Summits, penelitian glasiologi global, dan pemberdayaan suku-suku pedalaman (Amungme, Dani, Asmat).",
    accessibility: "Titik tolak pendakian umumnya melalui penerbangan perintis dari Timika atau Wamena.",
    bestSeason: "Maret hingga Mei dan September hingga November.",
    isDSP: false
  }
];

export const dsps = [
  { 
    id: "dsp1", 
    name: "Danau Toba", 
    province: "Sumatera Utara", 
    tag: "Kaldera Vulkanik UNESCO",
    focus: "Geotourisme & Budaya Batak",
    coord: "2.61° LU, 98.78° BT",
    image: "https://images.unsplash.com/photo-1570165780362-eeb1be877bd3?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: "dsp2", 
    name: "Candi Borobudur", 
    province: "Jawa Tengah", 
    tag: "Mahakarya Peradaban Dunia",
    focus: "Heritage Tourism & Budaya",
    coord: "7.60° LS, 110.20° BT",
    image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: "dsp3", 
    name: "Mandalika", 
    province: "Nusa Tenggara Barat", 
    tag: "Sport Tourism & Pantai",
    focus: "Motorsport & Budaya Sasak",
    coord: "8.89° LS, 116.29° BT",
    image: "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: "dsp4", 
    name: "Labuan Bajo", 
    province: "Nusa Tenggara Timur", 
    tag: "Gerbang Komodo & Bahari",
    focus: "Ecotourism & Coral Reefs",
    coord: "8.58° LS, 119.41° BT",
    image: "https://images.unsplash.com/photo-1518386377317-a0684f04d7d9?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: "dsp5", 
    name: "Likupang", 
    province: "Sulawesi Utara", 
    tag: "Surga Bahari Pasifik",
    focus: "Marine KEK & Konservasi",
    coord: "1.68° LU, 125.05° BT",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop"
  }
];

export const geographyFactors = [
  {
    title: "Posisi Silang Strategis Dunia",
    desc: "Indonesia berada di antara 2 benua (Asia & Australia) dan 2 samudra (Hindia & Pasifik), menjadikannya jalur lalu lintas maritim dan udara terpadat dunia.",
    icon: "Globe"
  },
  {
    title: "Cincin Api Pasifik (Ring of Fire)",
    desc: "Aktivitas vulkanik menghasilkan kaldera purba spektakuler, tanah subur, sumber air panas mineral, dan bentang alam geowisata pegunungan menakjubkan.",
    icon: "Flame"
  },
  {
    title: "Segitiga Terumbu Karang (Coral Triangle)",
    desc: "Pusat keanekaragaman hayati laut dunia dengan 76% spesies karang bumi berada di perairan Indonesia (Raja Ampat, Bunaken, Wakatobi).",
    icon: "Waves"
  },
  {
    title: "Biogeografi Garis Wallace & Weber",
    desc: "Pemisahan zona fauna tipe Asiatis, Peralihan, dan Australis menciptakan satwa endemik unik seperti Orangutan, Komodo, Anoa, dan Cendrawasih.",
    icon: "TreePine"
  }
];
