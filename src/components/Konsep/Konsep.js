import React from 'react'
import { Form, FormControl, FormGroup, FormLabel, Button, Container } from 'react-bootstrap';
// import data from '../../data/ontologi_konsep.json'
import { Link } from 'react-router-dom'
import categories from '../../data/ontologi_konsep.json';

const Konsep = () => {
  return (
    <div className='p-3'>
      <Container className="mt-3">
        <p>Pendefinisian entitas bernama dan kelas terkait pada teks dilakukan melalui pembangunan ontologi konsep di Al-Qur'an. Ontologi yang dimaksud berasal dari ontologi yang dikembangkan pada IndQNER, lalu dikembangkan berdasarkan temuan yang diperoleh pada tahap verifikasi oleh ahli di bidang Al-Qur'an dan tafsir. Ahli yang dimaksud adalah tim dari Lajnah Pentashihan Mushaf Al-Qur'an (LPMQ), Kementerian Agama Republik Indonesia. Pada IndQNER, kelas dan entitas bernama terkait awalnya didefinisikan dengan cara menganalisis ontologi konsep Al-Qur'an yang telah dibangun oleh peneliti di <a href='https://corpus.quran.com/ontology.jsp'>Leeds University.</a></p>
        <h2>Konsep</h2>
        <p>Konsep adalah nama entitas akar dalam ontologi Al-Quran. Semua konsep dan subkategori lainnya dalam hierarki ontologi diorganisasikan di bawah konsep akar ini.</p>
        {/* </div> */}

        <br />
        <h3>Subkategori</h3>
        <p>Kategori ini memiliki 13 subkategori:</p>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={`/category/${category.nama}`}>{category.nama}</Link>
            </li>
          ))}
        </ul>
        {/* <ul>
            <li><Link to='/category/Artefak'>Artefak</Link></li>
            <li><Link to='/category/Astronomi'>Astronomi</Link></li>
            <li><Link to='/category/Peristiwa'>Peristiwa</Link></li>
            <li><Link to='/category/Dewa Palsu'>Dewa Palsu</Link></li>
            <li><Link to='/category/Kitab Suci'>Kitab Suci</Link></li>
            <li><Link to='/category/Bahasa'>Bahasa</Link></li>
            <li><Link to='/category/Makhluk Hidup'>Makhluk Hidup</Link></li>
        </ul> */}
      </Container>
    </div>
  )
}

export default Konsep