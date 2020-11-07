/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default class SewaDiterima extends Component {
    constructor() {
        super()
        this.state = {
            length: 0,
            datas: []
        }
        this.fetchData = this.fetchData.bind(this);
    }

    // Fetch data ketika komponen dipanggil
    componentDidMount() {
        this.fetchData()
    }

    // Fetch data pada db.json 
    fetchData() {
        fetch('http://localhost:3003/dataPinjam').then(res => res.json()).then(res => this.setState({
            length: res.length,
            datas: res,
            isUpdate: false,
        }, console.log(res)))
        this.setState({ isUpdate: false })
    }

    render() {
        const { datas } = this.state
        const datasItem = datas.map((data) => {
            if (data.status === 1)
                return <Card key={data.id} style={{
                    width: "30%", marginLeft: "15px", marginTop: '15px', marginBottom: '15px'
                }}>
                    < Card.Header > Tgl: {data.date}</ Card.Header>
                    <Card.Img variant="top" src={data.roomImage} />
                    <Card.Body>
                        <Card.Title>{data.nama}</Card.Title>
                        <Card.Text>{data.jabatan}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Telepon: {data.telepon}</ListGroupItem>
                        <ListGroupItem>Peserta: {data.peserta}</ListGroupItem>
                    </ListGroup>
                    <Card.Footer className="bg-success text-center">
                        <small style={{ color: 'white' }} >Sudah Dikonfirmasi Admin</small>
                    </Card.Footer>
                </Card >
        })

        return (
            <React.Fragment>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <div className="container">
                            <h3 >Data Sewa Diterima</h3>
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
