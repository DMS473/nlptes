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
            description: "Dosen di bidang Teknologi Informasi dan Komunikasi."
        },
        {
            name: "Dr. Eva Nugraha, M.Ag.",
            img: fotoEva,
            description: "Dosen di bidang Teknologi Informasi dan Komunikasi."
        },
        {
            name: "Kamal Fikry Musa, Lc., M.A",
            img: fotoDaffa,
            description: "Dosen di bidang Teknologi Informasi dan Komunikasi."
        },
        {
            name: "Dr. Khodijah Hulliyah",
            img: fotoKhadijah,
            description: "Dosen di bidang Teknologi Informasi dan Komunikasi."
        },
        {
            name: "Ria Hari Gusmita, M.Kom",
            img: fotoRia,
            description: "Dosen di bidang Teknologi Informasi dan Komunikasi."
        },
        // Tambahkan data lainnya...
    ];

    const mahasiswa = [
        {
            name: "Aisha Dian Purinra",
            img: fotoAisha,
            description: "Mahasiswa jurusan Teknik Informatika."
        },
        {
            name: "Elisa Bunga Daniar",
            img: fotoElisa,
            description: "Mahasiswa jurusan Teknik Informatika."
        },
        {
            name: "Muhammad Daffa Muis",
            img: fotoDaffa,
            description: "Mahasiswa jurusan Teknik Informatika."
        },
        // Tambahkan data lainnya...
    ];

    return (
        <div className="container">
            <h2>Dosen</h2>
            <div className="row">
                {dosen.map((dosen, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card mb-4">
                            <img src={dosen.img} className="card-img-top" alt={dosen.name} />
                            <div className="card-body">
                                <h5 className="card-title">{dosen.name}</h5>
                                <p className="card-text">{dosen.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h2>Mahasiswa</h2>
            <div className="row">
                {mahasiswa.map((mahasiswa, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card mb-4">
                            <img src={mahasiswa.img} className="card-img-top" alt={mahasiswa.name} />
                            <div className="card-body">
                                <h5 className="card-title">{mahasiswa.name}</h5>
                                <p className="card-text">{mahasiswa.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Profile;
