import React from 'react'
import image_position from '../assets/images/posicion.png'

const Dashboard = () => {
    return (
        <div>
            <section>
                <select class="select" name="" id="">
                    <option class="option" value="">All Maps</option>
                    <option class="option" value="">option 3</option>
                    <option class="option" value="">option 4</option>
                    <option class="option" value="">option 5</option>
                </select>

                <br />

                <select class="select" name="" id="">
                    <option class="option" value="">All Dificulties</option>
                    <option class="option" value="">option 3</option>
                    <option class="option" value="">option 4</option>
                    <option class="option" value="">option 5</option>
                </select>

                <br />

                <select class="select" name="" id="">
                    <option class="option" value="">Both Sides</option>
                    <option class="option" value="">option 3</option>
                    <option class="option" value="">option 4</option>
                    <option class="option" value="">option 5</option>
                </select>
            </section>

            <section>
                {/* <!-- Video --> */}
                <div>
                    <iframe width="100%" src="https://firebasestorage.googleapis.com/v0/b/final-proyect-71f51.appspot.com/o/videos%2FNew%20Viper%20ULT%20Glitch.mp4?alt=media&token=4018d62a-a559-40e2-b276-68b689bc0a05" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>


                    <div>
                        <div class="perfil-img col-1">
                            <img class="img-fluid" src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg?itok=fl2H3Opv" alt="perfil-img" />
                        </div>
                        <div class="col-2">
                            <p><strong>B Green To B Site Tower Recon Bolt</strong></p>
                            <div class="labels">
                                <span class="labels" >medium</span>
                                <span class="labels" >Save</span>
                                <span class="labels" >Icebox</span>
                            </div>
                        </div>
                        <div class="col-3">
                            <img src={image_position} width="30px" alt="img-position" />
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>

                <br /><br />

                <div class="mt-3">
                    <iframe width="100%" src="https://firebasestorage.googleapis.com/v0/b/final-proyect-71f51.appspot.com/o/videos%2FNew%20Viper%20ULT%20Glitch.mp4?alt=media&token=4018d62a-a559-40e2-b276-68b689bc0a05" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>

                    <div>
                        <div class="perfil-img col-1">
                            <img class="img-fluid" src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg?itok=fl2H3Opv" alt="perfil-img" />
                        </div>
                        <div class="col-2">
                            <p><strong>B Green To B Site Tower Recon Bolt</strong></p>
                            <div class="labels">
                                <span class="labels" >medium</span>
                                <span class="labels" >Save</span>
                                <span class="labels" >Icebox</span>
                            </div>
                        </div>
                        <div class="col-3">
                            <img src={image_position} width="30px" alt="img-position" />
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard
