import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    provinsi: '',
    kota: '',
    kecamatan: '',
    desa: '',
    klasifikasi_desa: '',
    kategori_pengumpulan: '',
    email: '',
    message: '',
    category: '',
    pregnantDetails: '',
    babyDetails: '',
    badutaDetails: '',
    balitaDetails: '',
    remajaPutriDetails: '',
    calonPengantinDetails: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Lakukan sesuatu dengan data form, misalnya mengirimnya ke server
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center">Form BRIN</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formProvinsi">
          <Form.Label>101. Provinsi</Form.Label>
          <Form.Control
            type="text"
            name="provinsi"
            value={formData.provinsi}
            onChange={handleChange}
            placeholder="Enter your Provinsi"
          />
        </Form.Group>
        <Form.Group controlId="formKota" className='mt-3'>
          <Form.Label>102. Kabupaten/Kota</Form.Label>
          <Form.Control
            type="text"
            name="kota"
            value={formData.kota}
            onChange={handleChange}
            placeholder="Enter your Kabupaten/kota"
          />
        </Form.Group>
        <Form.Group controlId="formKecamatan" className='mt-3'>
          <Form.Label>103. Kecamatan</Form.Label>
          <Form.Control
            type="text"
            name="kecamatan"
            value={formData.kecamatan}
            onChange={handleChange}
            placeholder="Enter your Kecamatan"
          />
        </Form.Group>
        <Form.Group controlId="formDesa" className='mt-3'>
          <Form.Label>104. Desa/Kelurahan</Form.Label>
          <Form.Control
            type="text"
            name="desa"
            value={formData.desa}
            onChange={handleChange}
            placeholder="Enter your Desa/Kelurahan"
          />
        </Form.Group>

        <Form.Group controlId="formKlasifikasi_desa" className='mt-3'>
          <Form.Label>105. Klasifikasi Desa/Kelurahan</Form.Label>
          <Form.Control
            as="select"
            name="klasifikasi_desa"
            value={formData.klasifikasi_desa}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            <option value="kota">1. Kelurahan/Perkotaan</option>
            <option value="desa">2. Desa/Perdesaan</option>
          </Form.Control>
        </Form.Group>

        {formData.klasifikasi_desa === 'desa' && (
          <Form.Group controlId="formPregnantDetails">
            <Form.Label>Data Desa</Form.Label>
            <Form.Control
              type="text"
              name="pregnantDetails"
              value={formData.pregnantDetails}
              onChange={handleChange}
              placeholder="Enter details for Desa Details"
            />
          </Form.Group>
        )}

        {formData.klasifikasi_desa === 'kota' && (
          <Form.Group controlId="formPregnantDetails">
            <Form.Label>Data Kota</Form.Label>
            <Form.Control
              type="text"
              name="pregnantDetails"
              value={formData.pregnantDetails}
              onChange={handleChange}
              placeholder="Enter details for Desa Details"
            />
          </Form.Group>
        )}

        <Form.Group controlId="formKlasifikasi_pengumpulan" className='mt-3'>
          <Form.Label>106. Kategori Pengumpulan Data</Form.Label>
          <Form.Control
            as="select"
            name="klasifikasi_desa"
            value={formData.kategori_pengumpulan}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            <option value="data_dasar">1. Data dasar</option>
            <option value="Monev-1">2. Monev-1</option>
            <option value="Monev-2">3. Monev-2</option>
            <option value="Monev-3">4. Monev-3</option>
            <option value="Monev-4">5. Monev-4</option>
          </Form.Control>
        </Form.Group>

        {formData.kategori_pengumpulan === 'data_dasar' && (
          <Form.Group controlId="formPregnantDetails">
            <Form.Label>Data Kota</Form.Label>
            <Form.Control
              type="text"
              name="pregnantDetails"
              value={formData.pregnantDetails}
              onChange={handleChange}
              placeholder="Enter details for Desa Details"
            />
          </Form.Group>
        )}

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder="Enter your message"
          />
        </Form.Group>
        <Form.Group controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            <option value="ibu_hamil">Ibu Hamil</option>
            <option value="bayi">Bayi</option>
            <option value="baduta">Baduta</option>
            <option value="balita">Balita</option>
            <option value="remaja_putri">Remaja Putri</option>
            <option value="calon_pengantin">Calon Pengantin</option>
          </Form.Control>
        </Form.Group>

        {formData.category === 'ibu_hamil' && (
          <Form.Group controlId="formPregnantDetails">
            <Form.Label>Pregnant Details</Form.Label>
            <Form.Control
              type="text"
              name="pregnantDetails"
              value={formData.pregnantDetails}
              onChange={handleChange}
              placeholder="Enter details for pregnant"
            />
          </Form.Group>
        )}

        {formData.category === 'bayi' && (
          <Form.Group controlId="formBabyDetails">
            <Form.Label>Baby Details</Form.Label>
            <Form.Control
              type="text"
              name="babyDetails"
              value={formData.babyDetails}
              onChange={handleChange}
              placeholder="Enter details for baby"
            />
          </Form.Group>
        )}

        {formData.category === 'baduta' && (
          <Form.Group controlId="formBadutaDetails">
            <Form.Label>Baduta Details</Form.Label>
            <Form.Control
              type="text"
              name="badutaDetails"
              value={formData.badutaDetails}
              onChange={handleChange}
              placeholder="Enter details for baduta"
            />
          </Form.Group>
        )}

        {formData.category === 'balita' && (
          <Form.Group controlId="formBalitaDetails">
            <Form.Label>Balita Details</Form.Label>
            <Form.Control
              type="text"
              name="balitaDetails"
              value={formData.balitaDetails}
              onChange={handleChange}
              placeholder="Enter details for balita"
            />
          </Form.Group>
        )}

        {formData.category === 'remaja_putri' && (
          <Form.Group controlId="formRemajaPutriDetails">
            <Form.Label>Remaja Putri Details</Form.Label>
            <Form.Control
              type="text"
              name="remajaPutriDetails"
              value={formData.remajaPutriDetails}
              onChange={handleChange}
              placeholder="Enter details for remaja putri"
            />
          </Form.Group>
        )}

        {formData.category === 'calon_pengantin' && (
          <Form.Group controlId="formCalonPengantinDetails">
            <Form.Label>Calon Pengantin Details</Form.Label>
            <Form.Control
              type="text"
              name="calonPengantinDetails"
              value={formData.calonPengantinDetails}
              onChange={handleChange}
              placeholder="Enter details for calon pengantin"
            />
          </Form.Group>
        )}

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default FormComponent;