import React from 'react'
import { Form, FormControl, FormGroup, FormLabel, Button, Container } from 'react-bootstrap';


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
            <li><a href='#'>artifak</a></li>
            <li><a href='#'>artifak</a></li>
            <li><a href='#'>artifak</a></li>
            <li><a href='#'>artifak</a></li>
            <li><a href='#'>artifak</a></li>
            <li><a href='#'>artifak</a></li>
            <li><a href='#'>artifak</a></li>
            <li><a href='#'>artifak</a></li>
            <li><a href='#'>artifak</a></li>
        </ul>
    </Container>
  )
}

export default Konsep