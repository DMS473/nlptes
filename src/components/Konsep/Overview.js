import React from 'react'
import { Form, FormControl, FormGroup, FormLabel, Button, Container } from 'react-bootstrap';


const Overview = () => {
  return (
    <div className='p-3'>
      <Container className="mt-3">
        <h2>E-IndQNER</h2>
        <p className='text-justify'>E-IndQNER merupakan penelitian yang dilakukan untuk memperluas cakupan informasi pada IndQNER. IndQNER berisi informasi entitas bernama dan label kelas untuk masing-masing entitas tersebut. IndQNER baru mencakup delapan surat pada terjemahan Al-Qur’an berbahasa Indonesia. Melalui E-IndQNER, cakupan informasi tentang entitas bernama dan labelnya diperluas menjadi 114 surat pada terjemahan Al-Qur’an berbahasa Indonesia. Pembangunan E-IndQNER memanfaatkan model bahasa berukuran besar (large language models) serta melibatkan ahli yakni, tim Lajnah Pentashihan Mushaf Al-Qur’an (LPMQ), Kementerian Agama Republik Indonesia. Pendefinisian entitas bernama dilakukan berdasarkan ontologi konsep di terjemahan Al-Qur’an berbahasa Indonesia. Ontologi ini dibangun dengan memanfaatkan ontologi yang telah lebih dahulu didefinisikan dari Al-Qur’an (berbahasa Arab) oleh peneliti dari Leeds University (<a href="https://corpus.quran.com/" target="_blank">https://corpus.quran.com/</a>). Pembangunan ontologi konsep pada IndQNER dilakukan berdasarkan bentuk kemunculan entitas bernama pada terjemahan Al-Qur’an berbahasa Indonesia. Tahapan detail dapat dilihat pada artikel terkait (<a href="https://link.springer.com/chapter/10.1007/978-3-031-35320-8_12" target="_blank">https://link.springer.com/chapter/10.1007/978-3-031-35320-8_12</a>). Pada E-IndQNER, ontologi yang sama digunakan pada tahap awal. Ontologi ini diperluas pada tahap di mana ahli terlibat pada proses verifikasi entitas bernama dan kelasnya.
        </p>
        {/* </div> */}
      </Container>
    </div>
  )
}

export default Overview