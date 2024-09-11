import React, { useState, useEffect } from 'react';
// import sampleDataset from '../../data/sampeDataset.json'
// import { Container } from 'react-bootstrap';
import textData from '../../data/textData.json'
import textData2 from '../../data/datasettes2.json'
// import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';

// const renderTooltip = (props, label) => (
//     <Tooltip id="button-tooltip" {...props}>
//       {label}
//     </Tooltip>
//   );

const DatasetDescription = () => {
    // const [data, setData] = useState([]);
    const [textSegments, setTextSegments] = useState([]);

    const renderTooltip = (props, text) => (
        <Tooltip id="button-tooltip" {...props}>
            {text}
        </Tooltip>
    );

    useEffect(() => {
        // Memecah data teks menjadi segmen-segmen terpisah
        const segments = textData2.text.flatMap(sentence => sentence.split(' '));
        setTextSegments(segments);
    }, []);

    const getTagColor = (tag) => {
        switch (tag) {
            case 'Allah':
                return 'green'; // Oranye
            case 'Messenger':
                return '#007BFF'; // Biru
            case 'HolyBook':
                return 'red'; // Hijau
            case 'Person':
                return '#800080'; // Ungu
            case 'AstronomicalBody':
                return '#FF4500'; // Oranye-merah
            default:
            // return '#000000'; // Hitam
        }
    };


    return (
        <div className="p-3" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
            <Container>
                <h1>Sample Dataset</h1>
                <p>Berikut ini adalah tampilan hasil pelabelan pada E-IndQNER.</p>


                {/* tes4 */}
                <Row>
                    <Col md={8}>
                        <div className="dataset-content">

                            <p>
                                Alif Lām Mīm .
                            </p>
                            <p>
                                Kitab (
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={(props) => renderTooltip(props, "HolyBook")}
                                >
                                    <span className="highlighted-text" style={{ color: "red" }}>
                                        Al-Qur’an
                                    </span>
                                </OverlayTrigger>
                                ) ini tidak ada keraguan di dalamnya ; ( ia merupakan ) petunjuk bagi orang-orang yang bertakwa , ( yaitu ) orang-orang yang beriman pada yang gaib , menegakkan salat , dan menginfakkan sebagian rezeki yang Kami anugerahkan kepada mereka , dan mereka yang beriman pada (
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={(props) => renderTooltip(props, "HolyBook")}
                                >
                                    <span className="highlighted-text" style={{ color: "red" }}>
                                        Al-Qur’an
                                    </span>
                                </OverlayTrigger>
                                ) yang diturunkan kepadamu (
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={(props) => renderTooltip(props, "Messenger")}
                                >
                                    <span className="highlighted-text" style={{ color: "blue" }}>
                                        Nabi Muhammad
                                    </span>
                                </OverlayTrigger>
                                ) dan ( kitab-kitab suci ) yang telah diturunkan sebelum engkau dan mereka yakin akan adanya akhirat .
                            </p>
                            <p>
                                Merekalah yang mendapat petunjuk dari Tuhannya dan mereka itulah orang-orang yang beruntung .
                            </p>
                            <p>
                                Sesungguhnya orang-orang yang kufur itu sama saja bagi mereka , apakah engkau (
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={(props) => renderTooltip(props, "Messenger")}
                                >
                                    <span className="highlighted-text" style={{ color: "blue" }}>
                                        Nabi Muhammad
                                    </span>
                                </OverlayTrigger>
                                ) beri peringatan atau tidak engkau beri peringatan , mereka tidak akan beriman .
                            </p>
                            <p>
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={(props) => renderTooltip(props, "Allah")}
                                >
                                    <span className="highlighted-text" style={{ color: "green" }}>
                                        Allah
                                    </span>
                                </OverlayTrigger> telah mengunci hati dan pendengaran mereka .
                            </p>
                            <p>
                                Pada penglihatan mereka ada penutup , dan bagi mereka azab yang sangat berat .
                            </p>
                            <p>
                                Di antara manusia ada yang berkata , “ Kami beriman kepada <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={(props) => renderTooltip(props, "Allah")}
                                >
                                    <span className="highlighted-text" style={{ color: "green" }}>
                                        Allah
                                    </span>
                                </OverlayTrigger> dan <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={(props) => renderTooltip(props, "Event")}
                                >
                                    <span className="highlighted-text" style={{ color: "#FF4500" }}>
                                        hari
                                    </span>
                                </OverlayTrigger> <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={(props) => renderTooltip(props, "Event")}
                                >
                                    <span className="highlighted-text" style={{ color: "#FF4500" }}>
                                        Akhir
                                    </span>
                                </OverlayTrigger> , ” padahal sesungguhnya mereka itu bukanlah orang-orang mukmin .
                            </p>
                            <p>
                                Mereka menipu <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={(props) => renderTooltip(props, "Allah")}
                                >
                                    <span className="highlighted-text" style={{ color: "green" }}>
                                        Allah
                                    </span>
                                </OverlayTrigger> dan orang-orang yang beriman , padahal mereka hanyalah menipu diri sendiri tanpa mereka sadari .
                            </p>
                            <p>
                                Dalam hati mereka ada penyakit , lalu <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={(props) => renderTooltip(props, "Allah")}
                                >
                                    <span className="highlighted-text" style={{ color: "green" }}>
                                        Allah
                                    </span>
                                </OverlayTrigger> menambah penyakitnya dan mereka mendapat azab yang sangat pedih karena mereka selalu berdusta .
                            </p>
                            <p>
                                Apabila dikatakan kepada mereka , “ Janganlah berbuat kerusakan di <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={(props) => renderTooltip(props, "AstronomicalBody")}
                                >
                                    <span className="highlighted-text" style={{ color: "#800080" }}>
                                        bumi
                                    </span>
                                </OverlayTrigger> , ” mereka menjawab , “ Sesungguhnya kami hanyalah orang-orang yang melakukan perbaikan .
                            </p>

                        </div>
                    </Col>

                    {/* Legenda di Kanan */}
                    <Col md={4}>
                        <div className="legend">
                            <h5>Legenda Warna</h5>
                            <ul>
                                <li><span style={{ color: "green", fontWeight: "bold" }}>Allah</span> - Allah</li>
                                <li><span style={{ color: "red", fontWeight: "bold" }}>Al-Qur'an</span> - Kitab Suci</li>
                                <li><span style={{ color: "blue", fontWeight: "bold" }}>Nabi Muhammad</span> - Rasul</li>
                                <li><span style={{ color: "#FF4500", fontWeight: "bold" }}>Event</span> - Peristiwa</li>
                                <li><span style={{ color: "#800080", fontWeight: "bold" }}>Astronomi</span> - Bumi</li>
                                {/* Tambahkan deskripsi warna lain jika diperlukan */}
                            </ul>
                        </div>
                    </Col>
                </Row>


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
