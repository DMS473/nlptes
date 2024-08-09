import React from 'react';
import { Form, FormControl, FormGroup, FormLabel, Button, Container } from 'react-bootstrap';
import gambar from './nlp2.png'

const Welcome = () => {
  return (
    // <div className="text-center my-4">
    <div className='p-3'>
      <Container className="mt-3">
        <h2>Welcome</h2>
        <p className='text-justify'>Selamat datang di website kelompok penelitian Artificial Intelligence Research on Islamic Domain (AIRIS) UIN Syarif Hidayatullah Jakarta (UIN Jakarta). Kelompok ini berisi para peneliti bidang komputasi linguistik dari program studi Teknik Informatika dan Sistem Informasi, Fakultas Sains dan Teknologi, serta peneliti dari program studi Ilmu Al-Qu’ran dan Tafsir, Fakultas Ushuluddin.<br></br> <br></br> Terbentuknya AIRIS dilatarbelakangi oleh semangat untuk mengaktualisasi visi UIN Jakarta, yakni, integrasi ilmu keislaman, keindonesiaan, dan sains. AIRIS bertujuan menjadikan UIN Jakarta sebagai pionir komunitas penelitian yang berkontribusi untuk menghasilkan berbagai inovasi dalam bidang kecerdasan buatan (Artificial Intelligence/AI) dengan perspektif Islam. Kelompok ini berkomitmen untuk mengembangkan penelitian yang tidak hanya berfokus pada kemajuan teknologi, tetapi juga pada nilai-nilai keislaman dan kearifan lokal (keindonesiaan). Untuk mencapai hal ini, AIRIS berupaya menghasilkan produk-produk penelitian yang relevan dan bermanfaat bagi masyarakat luas, serta mendukung pengembangan dan integrasi ilmu pengetahuan dengan domain keislaman. AIRIS juga berupaya memperkuat kolaborasi antar fakultas dan program studi di UIN Jakarta, serta menjalin kerjasama dengan berbagai institusi lain, baik di tingkat nasional maupun internasional. Melalui penelitian dan inovasi, kelompok ini diharapkan dapat memberikan kontribusi nyata dalam menghadapi tantangan global di era digital, sekaligus mempromosikan nilai-nilai Islam yang universal.
        </p>

        <p className='text-justify'>Sebagai tahap awal, AIRIS berupaya melakukan pengembangan Islamicpedia yang merupakan basis pengetahuan terstruktur yang berasal dari terjemahan Al-Qur’an berbahasa Indonesia. Islamicpedia selanjutnya akan berperan penting dalam pembangunan teknologi kecerdasan buatan yang diharapkan dapat membantu umat muslim di Indonesia meningkatkan pemahamannya tentang Islam. Berikut ini adalah tahapan penelitian pada pengembangan Islamicpedia.</p>
        
        <img src={gambar} class="img-fluid" alt="Responsive" width="50%" height="auto"></img>
        
        <p className='text-justify'>Terdapat tiga tahapan yang diperlukan untuk membangun Islamicpedia, yaitu, pengenalan entitas bernama, disambiguasi entitas bernama, dan ekstraksi relasi entitas bernama. Untuk memperoleh model yang handal dalam melakukan setiap proses tersebut, maka dataset pedoman (benchmark dataset) diperlukan. Sejak tahun 2022, AIRIS telah membangun IndQNER untuk proses pertama, dan IndQEL untuk proses kedua. Kedua dataset pedoman tersebut hanya meliputi delapan surat pada terjemahan Al-Qur’an berbahasa Indonesia. Oleh karena itu, saat ini AIRIS sedang melakukan pengembangan IndQNER sehingga dapat meliputi 114 surat pada terjemahan Al-Qur’an berbahasa Indonesia. Dataset hasil pengembangan ini selanjutnya disebut E-IndQNER (Extended IndQNER). </p>
        {/* </div> */}
      </Container>
    </div>
  );
};

export default Welcome;