import React, { Component } from 'react'
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap"

export default class home extends Component {
    constructor() {
        super()
        this.state = {
            length: 0,
            item: [],
            color: "black",
            available:"Available"
        }
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        fetch('http://52.221.203.43:3003/room').then(res => res.json()).then(res => this.setState({
            // http://localhost:3003/room
            length: res.length,
            item: res,
            isUpdate: false,
        }, console.log(res)))
        this.setState({ isUpdate: false})
    }

    onChange = () => {
        if (this.state.available == 'green'){
            this.setState({ color: 'green' });
        }
        else {
            this.setState({ color: 'red' });
        }
    }
    render() {
        const { item } = this.state
        const dataItem = item.map((data) => {
            return <Card key={data.id} key={data.id} style={{ width: "30%", marginLeft: "15px", marginTop: '15px', marginBottom: '15px'}}>
                    <Card.Img variant="top" src={data.roomImage} />
                    <Card.Body>
                            <Card.Title>{data.nama}</Card.Title>
                            <Card.Text className={(data.available === this.state.available ? 'Unavailable' : 'Available')}
                                style={{ color: this.state.color }}>
                                {data.available}</Card.Text>
                            <Button variant="outline-success">Terima</Button>
                    </Card.Body>
                    </Card>
        })

        return (
            <React.Fragment>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="container">
                        <h3 style ={{textAlign:'center'}}>Selamat Datang di Harapan Venue</h3>
                    </div>
                </div>
            </div>
            <div className="container">
                    <div className="row" >
                        {dataItem}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
