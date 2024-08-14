import React from 'react';
import { Form, FormControl, FormGroup, FormLabel, Button, Container } from 'react-bootstrap';
import fotoAsep from '../data/images/Asep Fajar Firmansyah.jpg'
import fotoEva from '../data/images/Eva Nugraha.jpeg'
import fotoKhadijah from '../data/images/Bu-Khadijah.jpg'
import fotoRia from '../data/images/Ria Hari Gusmita.jpg'
import fotoElisa from '../data/images/elisa.jpeg'
import fotoAisha from '../data/images/aisha.jpeg'
import fotoDaffa from '../data/images/Gantenk.jpg'

const Profile = () => {
    const dosen = [
        {
            name: "Asep Fajar Firmansyah, M.T.I.",
            img: fotoAsep,
            description: "Dosen di Program Studi Sistem Informasi"
        },
        {
            name: "Dr. Eva Nugraha, M.Ag.",
            img: fotoEva,
            description: "Dosen di Program Studi Ilmu Al-Qur'an dan Tafsir"
        },
        {
            name: "Kamal Fikry Musa, Lc., M.A",
            img: fotoDaffa,
            description: "Dosen di Program Studi Ilmu Al-Qur'an dan Tafsir"
        },
        {
            name: "Dr. Khodijah Hulliyah",
            img: fotoKhadijah,
            description: "Dosen di Program Studi Teknik Informatika"
        },
        {
            name: "Ria Hari Gusmita, M.Kom",
            img: fotoRia,
            description: "Dosen di Program Studi Teknik Informatika"
        },
        // Tambahkan data lainnya...
    ];

    const mahasiswa = [
        {
            name: "Aisha Dian Purinra",
            img: fotoAisha,
            description: "Mahasiswa di Program Studi Teknik Informatika"
        },
        {
            name: "Elisa Bunga Daniar",
            img: fotoElisa,
            description: "Mahasiswa di Program Studi Teknik Informatika"
        },
        {
            name: "Muhammad Daffa Muis",
            img: fotoDaffa,
            description: "Mahasiswa di Program Studi Teknik Informatika"
        },
        // Tambahkan data lainnya...
    ];

    return (
        <div className="p-3">
            <Container className="mt-3">
                <h2>Peneliti Utama</h2>
                <div className="row">
                    {dosen.map((dosen, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="mb-4">
                                <img src={dosen.img} className="img-fluid rounded-circle" alt={dosen.name}
                                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{dosen.name}</h5>
                                    <p className="card-text">{dosen.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <br></br>
                <h2>Asisten Peneliti (Mahasiswa di Program Studi Teknik Informatika)</h2>
                <div className="row">
                    {mahasiswa.map((mahasiswa, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="mb-4">
                                <img src={mahasiswa.img} className="img-fluid rounded-circle" alt={mahasiswa.name}
                                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{mahasiswa.name}</h5>
                                    {/* <p className="card-text">{mahasiswa.description}</p> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Profile;
