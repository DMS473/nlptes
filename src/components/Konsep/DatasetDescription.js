import React from 'react';

const DatasetDescription = () => {
    return (
        <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
            <h1>Deskripsi Dataset E-IndQNER</h1>
            <p>Berikut ini adalah tampilan hasil pelabelan pada E-IndQNER.</p>
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
            <p>
                Beri sample dari dataset yang ada di: 
                <a href="https://github.com/RiaGusmita/E-IndQNER/blob/main/DatasetWithoutBIO-Tags.txt">
                    https://github.com/RiaGusmita/E-IndQNER/blob/main/DatasetWithoutBIO-Tags.txt
                </a>
            </p>
            <p>
                Detail dataset dapat dilihat di: 
                <a href="https://github.com/RiaGusmita/E-IndQNER/tree/main" target="_blank" style={{ color: '#1a73e8', textDecoration: 'none' }}>
                    https://github.com/RiaGusmita/E-IndQNER/tree/main
                </a>
            </p>
        </div>
    );
}

export default DatasetDescription;
