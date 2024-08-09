import React from 'react';
import { Form, FormControl, FormGroup, FormLabel, Button, Container } from 'react-bootstrap';


const Welcome = () => {
  return (
    // <div className="text-center my-4">
    <div className='p-3'>
      <Container className="mt-3">
        <h2>Welcome</h2>
        <p className='text-justify'>Selamat datang di website kelompok penelitian Artificial Intelligence Research on Islamic Domain (AIRIS) UIN Syarif Hidayatullah Jakarta (UIN Jakarta). Kelompok ini berisi para peneliti bidang komputasi linguistik dari program studi Teknik Informatika dan Sistem Informasi, Fakultas Sains dan Teknologi, serta peneliti dari program studi Ilmu Al-Qu’ran dan Tafsir, Fakultas Ushuluddin.<br></br> <br></br> Terbentuknya AIRIS dilatarbelakangi oleh semangat untuk mengaktualisasi visi UIN Jakarta, yakni, integrasi ilmu keislaman, keindonesiaan, dan sains. AIRIS bertujuan menjadikan UIN Jakarta sebagai pionir komunitas penelitian yang berkontribusi untuk menghasilkan berbagai inovasi dalam bidang kecerdasan buatan (Artificial Intelligence/AI) dengan perspektif Islam. Kelompok ini berkomitmen untuk mengembangkan penelitian yang tidak hanya berfokus pada kemajuan teknologi, tetapi juga pada nilai-nilai keislaman dan kearifan lokal (keindonesiaan). Untuk mencapai hal ini, AIRIS berupaya menghasilkan produk-produk penelitian yang relevan dan bermanfaat bagi masyarakat luas, serta mendukung pengembangan dan integrasi ilmu pengetahuan dengan domain keislaman. AIRIS juga berupaya memperkuat kolaborasi antar fakultas dan program studi di UIN Jakarta, serta menjalin kerjasama dengan berbagai institusi lain, baik di tingkat nasional maupun internasional. Melalui penelitian dan inovasi, kelompok ini diharapkan dapat memberikan kontribusi nyata dalam menghadapi tantangan global di era digital, sekaligus mempromosikan nilai-nilai Islam yang universal.
        </p>
        
        {/* </div> */}
      </Container>
    </div>
  );
};

export default Welcome;