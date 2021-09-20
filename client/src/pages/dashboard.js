import React, { useState, useEffect } from 'react'
import image_position from '../assets/images/posicion.png'

import HeaderBar from '../components/headerBar'

import { firebase_app } from '../data/config'
import Modal from 'react-modal';



const Dashboard = () => {
    const [options, setOptions] = useState({
        "map": 'null',
        'difficulty': 'all',
        "side": 'both'
    })

    const [videos, setVideos] = useState(null)

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    Modal.setAppElement('#root');

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = 'black';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    useEffect(() => {
        const getVideos = async () => {
            const events = await firebase_app.firestore().collection('videos')
            events.onSnapshot((querySnapshot) => {
                const tempDoc = querySnapshot.docs.map((doc) => {
                    return doc.data()
                })
                setVideos(tempDoc)
            })
        }

        getVideos()
    }, [])

    const [title, setTitle] = useState('')
    const [video, setVideo] = useState('')


    const uploadData = async () => {
        // https://www.youtube.com/watch?v=cEEbCOcmEdU
        let url = video.split("=")[1]

        try {
            await firebase_app.firestore().collection('videos').doc().set({
                title,
                "video": url
                // country: "USA
            })
            setTitle('')
            setVideo('')
            setIsOpen(false)
        } catch (error) {
            console.error(error);
        }

    }


    console.log(videos);
    return (
        <div>
            <HeaderBar />
            <button onClick={openModal}>Update video</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Upload video</h2>
                <div className="title">
                    <form className="text-center" action="" method="POST">
                        <input type="text" name="title" id="title" placeholder="Enter title" required value={title} onChange={(e) => setTitle(e.target.value)} />
                        <input className="mb-1" type="link" name="link" id="link" placeholder="Enter link" value={video} onChange={(e) => setVideo(e.target.value)} required />
                        {/* <span className="text-blue">Forgot link</span> */}

                        <div className="center mt-2">
                            <span onClick={uploadData} className="text-white btn-primary center text-center"><strong>Upload</strong></span>
                        </div>
                    </form>
                </div>

            </Modal>
            {/* <section>
                <select className="select" name="" id="" value={options.map} onChange={(e) => setOptions({ ...options, 'map': e.target.value })} >
                    <option className="option" value="null">All Maps</option>
                    <option className="option" value="fracture">Fracture</option>
                    <option className="option" value="breeze">Breeze</option>
                    <option className="option" value="icebox">Icebox</option>
                    <option className="option" value="blind">Blind</option>
                    <option className="option" value="haven">Haven</option>
                    <option className="option" value="split">Split</option>
                    <option className="option" value="ascent">Ascent</option>
                </select>

                <br />

                <select className="select" name="" id="" value={options.difficulty} onChange={(e) => setOptions({ ...options, 'difficulty': e.target.value })}>
                    <option className="option" value="all">All Dificulties</option>
                    <option className="option" value="easy">Easy</option>
                    <option className="option" value="medium">Medium</option>
                    <option className="option" value="hard">Hard</option>
                </select>

                <br />

                <select className="select" name="" id="" value={options.side} onChange={(e) => setOptions({ ...options, 'side': e.target.value })}>
                    <option className="option" value="both">Both Sides</option>
                    <option className="option" value="a">Side A</option>
                    <option className="option" value="b">Side B</option>
                </select>
            </section> */}

            <section>
                {/* <!-- Video --> */}
                <div>
                    {
                        videos && (

                            <div className="mt-3" >
                                {
                                    videos.map((item, i) => (
                                        <div key={i} style={{ marginBottom: 10 }}>
                                            {/* <iframe width="100%" src={item.video} title="YouTube video player" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

                                            <iframe width="100%" src={`https://www.youtube.com/embed/${item.video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            <div>
                                                <div className="perfil-img col-1">
                                                    {/* <img className="img-fluid" src={item.avatar} alt="perfil-img" /> */}
                                                </div>
                                                <div className="col-2">
                                                    <p><strong>{item.title}</strong></p>
                                                    <div className="labels">
                                                        {/* <span className="labels" >{item.tags[0]}</span>
                                                        <span className="labels" >{item.tags[1]}</span>
                                                        <span className="labels" >{item.tags[2]}</span> */}

                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <img src={image_position} width="30px" alt="img-position" />
                                                </div>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>

                <br /><br />

                {/* <div className="mt-3">
                    <iframe width="100%" src="https://firebasestorage.googleapis.com/v0/b/final-proyect-71f51.appspot.com/o/videos%2FNew%20Viper%20ULT%20Glitch.mp4?alt=media&token=4018d62a-a559-40e2-b276-68b689bc0a05" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>

                    <div>
                        <div className="perfil-img col-1">
                            <img className="img-fluid" src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg?itok=fl2H3Opv" alt="perfil-img" />
                        </div>
                        <div className="col-2">
                            <p><strong>B Green To B Site Tower Recon Bolt</strong></p>
                            <div className="labels">
                                <span className="labels" >medium</span>
                                <span className="labels" >Save</span>
                                <span className="labels" >Icebox</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <img src={image_position} width="30px" alt="img-position" />
                        </div>
                        <div className="clear"></div>
                    </div>
                </div> */}
            </section>
        </div>
    )
}

export default Dashboard
