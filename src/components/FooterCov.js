import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class FooterCov extends React.Component{
    render(){
        return(
            <footer className="sticky-footer bg-primary px-2">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase text-white font-weight-bold">Covid-19 Update</h5>
                            <p className="text-white mt-3">Sebuah Kontribusi dari kami untuk membantu meringankan beban masyarakat dalam menghadapi pandemi ini. Semoga wabah ini cepat berlalu.</p>
                        </div>
                        
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase text-white font-weight-bold">Info Terkini</h5>
                            <ul className="list-unstyled text-white py-1">
                                <li className="py-2">
                                    <a className="text-white" href="https://www.who.int/health-topics/coronavirus" target="_blank">WHO</a>
                                </li>
                                <li className="py-2">
                                    <a className="text-white" href="https://www.covid19.go.id/" target="_blank">Covid19.Go.Id</a>
                                </li>
                                <li className="py-2">
                                    <a className="text-white" href="https://www.worldometers.info/coronavirus/" target="_blank">Worldometers</a>
                                </li>
                                <li className="py-2">
                                    <a className="text-white" href="https://pikobar.jabarprov.go.id/" target="_blank">Pikobar Jabar</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase text-white font-weight-bold">Ayo Kontribusi</h5>

                            <ul className="list-unstyled">
                                <li className="py-2">
                                    <a className="text-white" href="https://donasi.dompetdhuafa.org/bersamalawancorona/" target="_blank">Dompet Dhuafa</a>
                                </li>
                                <li className="py-2">
                                    <a className="text-white" href="https://kitabisa.com/campaign/bersatusalingbantu" target="_blank">dr Tirta (Kitabisa)</a>
                                </li>
                                <li className="py-2">
                                    <a className="text-white" href="https://sharinghappiness.org/bersamabantucegahpenyebarancorona" target="_blank">Rumah Zakat</a>
                                </li>
                                <li className="py-2">
                                    <a className="text-white" href="https://indonesiadermawan.id/campaign/486/operasi-pangan-gratis-untuk-warga-terdampak-wabah-corona" target="_blank">Indonesia Dermawan</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="clearfix w-100 pb-1"/>
                <div className="text-white copyright text-center pt-3">© 2020 Copyright:
                    <a className="text-white" href="https://selalusukses.online/"> Selalu Sukses Digital Agency</a>
                </div>
            </footer>
        )
    }
}

export default FooterCov
