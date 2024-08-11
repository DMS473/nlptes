import React, { useState, useEffect } from 'react';
import sampleDataset from '../../data/sampeDataset.json'
import { Container } from 'react-bootstrap';


const DatasetDescription = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Mengambil data dari file JSON
        setData(sampleDataset);
    }, []);

    const textData = [
        { text: "Siapa", tag: "O" },
        { text: "yang", tag: "O" },
        { text: "menjadikan", tag: "O" },
        { text: "setan", tag: "O" },
        { text: "sebagai", tag: "O" },
        { text: "temannya", tag: "O" },
        { text: ",", tag: "O" },
        { text: "(", tag: "O" },
        { text: "ketahuilah", tag: "O" },
        { text: "bahwa", tag: "O" },
        { text: ")", tag: "O" },
        { text: "dia", tag: "O" },
        { text: "adalah", tag: "O" },
        { text: "seburuk-buruk", tag: "O" },
        { text: "teman", tag: "O" },
        { text: ".", tag: "O" },
        // Tambahkan data yang tersisa sesuai dengan contoh Anda
        // { text: "Allah", tag: "Allah" },
        // { text: "tidak", tag: "O" },
        // ...
    ];
    


    return (
        <div className="p-3" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
            <Container>
            <h1>Sample Dataset</h1>
            <p>Berikut ini adalah tampilan hasil pelabelan pada E-IndQNER.</p>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.sentence}</li>
                ))}
            </ul>
            <div className="dataset-text">
                {textData.map((item, index) => (
                    <span key={index} className="text-item">
                        <strong>{item.text}</strong>
                        <span className="text-muted">/{item.tag} </span>
                    </span>
                ))}
            </div>
            {/* <pre style={{ backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', overflowX: 'auto' }}>
                Datanya:
                1    Badan    PNS    -    -    Badan    PNS    ORG
                2    Pengawas    PNS    -    -    Pengawas    PNS    ORG
                3    Keuangan    PNS    -    -    Keuangan    PNS    ORG
                4    (BPK)    PNS    -    -    (BPK)    PNS    ORG
                5    melaporkan    PNS    -    -    melaporkan    PNS    O
                6    hasil    PNS    -    -    hasil    PNS    O
                7    pemeriksaan    PNS    -    -    pemeriksaan    PNS    O
                8    terhadap    PNS    -    -    terhadap    PNS    O
                9    kedua    PNS    -    -    kedua    PNS    O
                10   provinsi    PNS    -    -    provinsi    PNS    O
                11   dalam    PNS    -    -    dalam    PNS    O
                12   semester    PNS    -    -    semester    PNS    O
                13   II    PNS    -    -    II    PNS    O
                14   tahun    PNS    -    -    tahun    PNS    O
                15   2006    PNS    -    -    2006    PNS    O
            </pre> */}
            <br></br>
            <p>
                Detail dataset dapat dilihat di: 
                <a href="https://github.com/RiaGusmita/E-IndQNER/tree/main" target="_blank" style={{ color: '#1a73e8', textDecoration: 'none' }}>
                    https://github.com/RiaGusmita/E-IndQNER/tree/main
                </a>
            </p>
            </Container>
        </div>
    );
}

export default DatasetDescription;
