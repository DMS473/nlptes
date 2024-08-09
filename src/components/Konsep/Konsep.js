import React from 'react'
import { Form, FormControl, FormGroup, FormLabel, Button, Container } from 'react-bootstrap';
// import data from '../../data/ontologi_konsep.json'
import { Link } from 'react-router-dom'

const Konsep = () => {
  return (
    <Container className="mt-3">
      <h2>Konsep</h2>
      <p>Konsep adalah nama entitas akar dalam ontologi Al-Quran. Semua konsep dan subkategori lainnya dalam hierarki ontologi diorganisasikan di bawah konsep akar ini.</p>
    {/* </div> */}

        <br/>
        <h3>Subkategori</h3>
        <p>Kategori ini memiliki 11 subkategori:</p>
        <ul>
            <li><Link to='/category/Artefak'>Artefak</Link></li>
            <li><Link to='/category/Astronomi'>Astronomi</Link></li>
            <li><Link to='/category/Peristiwa'>Peristiwa</Link></li>
            <li><Link to='/category/Dewa Palsu'>Dewa Palsu</Link></li>
            <li><Link to='/category/Kitab Suci'>Kitab Suci</Link></li>
            <li><Link to='/category/Bahasa'>Bahasa</Link></li>
            <li><Link to='/category/Makhluk Hidup'>Makhluk Hidup</Link></li>

            {/* <li><a href='#'>artifak</a></li>
            <li><a href='#'>artifak</a></li>
            <li><a href='#'>artifak</a></li>
            <li><a href='#'>artifak</a></li>
            <li><a href='#'>artifak</a></li>
            <li><a href='#'>artifak</a></li>
            <li><a href='#'>artifak</a></li> */}
        </ul>
    </Container>
  )
}

export default Konsep