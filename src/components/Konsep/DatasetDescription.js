import React, { useState, useEffect } from 'react';
// import sampleDataset from '../../data/sampeDataset.json'
import { Container } from 'react-bootstrap';
import textData from '../../data/textData.json'
import textData2 from '../../data/datasettes2.json'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

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
                return '#FFA500'; // Oranye
            case 'Messenger':
                return '#007BFF'; // Biru
            case 'HolyBook':
                return '#228B22'; // Hijau
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
                            <span className="highlighted-text" style={{ color: "#228B22" }}>
                                Al-Qur’an
                            </span>
                        </OverlayTrigger>
                        ) ini tidak ada keraguan di dalamnya ; ( ia merupakan ) petunjuk bagi orang-orang yang bertakwa , ( yaitu ) orang-orang yang beriman pada yang gaib , menegakkan salat , dan menginfakkan sebagian rezeki yang Kami anugerahkan kepada mereka , dan mereka yang beriman pada (
                        <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={(props) => renderTooltip(props, "HolyBook")}
                        >
                            <span className="highlighted-text" style={{ color: "#228B22" }}>
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
                            <span className="highlighted-text" style={{ color: "#FFA500" }}>
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
                            <span className="highlighted-text" style={{ color: "#FFA500" }}>
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
                            <span className="highlighted-text" style={{ color: "#FFA500" }}>
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
                            <span className="highlighted-text" style={{ color: "#FFA500" }}>
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


                {/* tes3 */}
                {/* <div style={{ padding: '20px', lineHeight: '1.6' }}>
                    {textSegments.map((segment, index) => {
                        const [word, tag] = segment.split('/');
                        const tagColor = getTagColor(tag);

                        return (
                            <span key={index} style={{ color: tagColor }}>
                                {word}{' '}
                            </span>
                        );
                    })}
                </div> */}


                {/* tes2 */}
                {/* <div className="dataset-text">
                    {textData.map((item, index) => (
                        <span
                            key={index}
                            className={`text-item ${item.tag === "Allah" ? "highlight-orange" :
                                    item.tag === "Messenger" ? "highlight-blue" : ""
                                }`}
                        >
                            {item.text}{" "}
                        </span>
                    ))}
                </div> */}

                {/* tes1 */}
                {/* <ul>
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
            </div> */}
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
