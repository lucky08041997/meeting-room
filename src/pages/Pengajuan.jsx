/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default class Pengajuan extends Component {
    constructor() {
        super()
        this.state = {
            length: 0,
            datas: []
        }
        this.acceptRequest = this.acceptRequest.bind(this);
        this.declineRequest = this.declineRequest.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    // Fetch data ketika komponen dipanggil
    componentDidMount() {
        this.fetchData()
    }

    // Fetch data ketika state isUpdate berubah
    componentDidUpdate() {
        if (this.isUpdate === !this.isUpdate) {
            this.fetchData()
        }
    }

    // Fetch data pada db.json 
    fetchData() {
        fetch('http://localhost:3001/dataPinjam').then(res => res.json()).then(res => this.setState({
            length: res.length,
            datas: res,
            isUpdate: false,
        }, console.log(res)))
        this.setState({ isUpdate: false })
    }

    // Terima Pengajuan Sewa
    // Mengubah status = 0 (data sewa baru)
    // Menjadi status = 1 (data sewa baru diterima)
    acceptRequest(data) {
        data['status'] = 1

        fetch("http://localhost:3001/dataPinjam/" + data.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(this.setState({ isUpdate: true }))
    }

    // Tolak Pengajuan Sewa
    // Mengubah status = 0 (data sewa baru)
    // Menjadi status = 2 (data sewa baru ditolak)
    declineRequest(data) {
        data['status'] = 2
        fetch("http://localhost:3001/dataPinjam/" + data.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(this.setState({ isUpdate: true }))
    }

    render() {
        const { datas } = this.state
        const datasItem = datas.map((data) => {
            if (data.status === 0)
                return <Card key={data.id} style={{ width: "30%", marginLeft: "15px", marginTop: '15px', marginBottom: '15px' }}>
                    <Card.Header>Tgl: {data.date}</Card.Header>
                    <Card.Img variant="top" src={data.roomImage} />
                    <Card.Body>
                        <Card.Title>{data.nama}</Card.Title>
                        <Card.Text>{data.jabatan}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Telepon: {data.telepon}</ListGroupItem>
                        <ListGroupItem>Peserta: {data.peserta} Orang</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Button onClick={() => this.acceptRequest(data)} variant="outline-success">Terima</Button>
                        <Button style={{ marginLeft: '20px' }} onClick={() => this.declineRequest(data)} variant="outline-danger">Tolak</Button>
                    </Card.Body>
                </Card >
        })

        return (
            <React.Fragment>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <div className="container">
                            <h3 >Data Pengajuan</h3>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row" >
                        {datasItem}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}