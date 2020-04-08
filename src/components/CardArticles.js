import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

export default class CardArticles extends Component {
    render(){
        return (
            <React.Fragment>
                
                    
                        <Card className="shadow mb-4">
                            <Card.Header>
                            <h5 class="m-0 font-weight-bold text-primary">Tips-tips Sehat untuk Melawan Corona</h5>
                            </Card.Header>
                            <Card.Body>
                                <ListGroup>
                                    <ListGroup.Item>
                                    <div className="d-flex w-100 justify-content-between">
                                        <h4>Perbanyak makan sayur dan buah</h4>
                                    </div>
                                    <img class="img-fluid pb-20" src="https://cdn1-production-images-kly.akamaized.net/ikB5ZdMuOjj3UNWRkHRt3a1WuTA=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3071554/original/064120800_1583729270-shutterstock_115375876.jpg" alt=""></img>
                                    <p>Bagi yang kurang asupan makanan, disarankan untuk menambahkan konsumsi sayur dan buah. Sayur atau buah bisa apa saja, sesuai dengan selera.<br/><br/>Buah banyak mengandung vitamin, sedangan sayur banyak mengandung serat dan menieral yang dibutuhkan tubuh kita. Menurut penelitian orang yang lebih banyak makan buah lebih tidak mudah sakit.</p>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                    <div class="d-flex w-100 justify-content-between">
                                        <h4>Istirahat yang Cukup</h4>
                                    </div>
                                    <img class="img-fluid pb-20" src="https://images.ctfassets.net/wy4h2xf1swlt/asset_10894/603c910be38b061548a2c815c083e89a/sleep-is-the-best-medicine.jpg" alt=""/>
                                    <p>Kurang tidur dapat menurunkan imunitas tubuh. Sehingga semua manusia membutuhkan kualitas dan kuantitas tidur yang cukup.<br/><br/>
                                    Orang dewasa membutuhkan tidur selama 7-8 jam. Sedangkan remaja membutuhkan 9-10 jam tidur dalam sehari.</p>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                    <div class="d-flex w-100 justify-content-between">
                                        <h4>Hindari stres dan kelola stres</h4>
                                    </div>
                                    <img class="img-fluid pb-20" src="https://image.freepik.com/free-vector/businessman-deadline-problems-cartoon_1284-23127.jpg" alt=""/>
                                    <p>Stres yang tidak terkendali bisa meningkatkan produksi hormon kortisol. Stres biasanya dialami jika kita sedang banyak pikiran atau masalah.<br/><br/>
                                    Dalam jangka panjang, peningkatan hormon kortisol dapat menurunkan fungsi kekebalan tubuh. Kondisi ini akan membuat kita mudah terserang penyakit, atau terjangkit virus.</p>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                    <div class="d-flex w-100 justify-content-between">
                                        <h4>Rutin Berolahraga</h4>
                                    </div>
                                    <img class="img-fluid pb-20" src="https://image.freepik.com/free-vector/illustration-group-people-running_23-2148192566.jpg" alt=""/>
                                    <p>Olahraga sangat berguna bagi tubuh kita. Tidak hanya sehat, dengan berolahraga, orang juga dipercaya akan merasa lebih bahagia.<br/><br/>
                                    Disarankan untuk rutin olahraga selama 30 menit setiap hari, untuk meningkatkan sistem kekebalan tubuh dalam melawan infeksi.</p>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    
               
            </React.Fragment>
            
        )
    }
    
}
