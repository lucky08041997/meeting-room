import React, { Component } from "react";
import "./DataBooking.css";

export default class DataBooking extends Component {
  constructor(props) {
    super(props);
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    var h = today.getHours();
    var m = today.getMinutes();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    if (h < 10) {
      h = "0" + h;
    }

    if (m < 10) {
      m = "0" + m;
    }

    var date = yyyy + "-" + mm + "-" + dd;
    var time = h + ":" + m;

    this.state = {
      currentDate: date,
      currentTime: time
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col"></div>
          <div className="col-12">
            <div className="card border-dark">
              <div className="card-body">
                <h4>Detail Pemesan</h4>
                <label className="col-form-label col-form-label-sm">
                  Nama Lengkap
                </label>
                <br />
                <input type="text" id="Nama" className="form-control" />
                <label className="col-form-label col-form-label-sm">
                  Jabatan
                </label>
                <br />
                <input type="text" id="Jabatan" className="form-control" />
                <label className="col-form-label col-form-label-sm">
                  Nomor Telepon
                </label>
                <br />
                <input
                  type="text"
                  id="Nomor Telepon"
                  className="form-control"
                />
                <br />
                <h4>Detail Booking</h4>
                <label className="col-form-label col-form-label-sm">
                  Keperluan
                </label>
                <br />
                <input type="text" id="Keperluan" className="form-control" />
                <label className="col-form-label col-form-label-sm">
                  Estimasi Peserta
                </label>
                <br />
                <input
                  type="text"
                  id="Estimasi Peserta"
                  className="form-control"
                />
                <label className="col-form-label col-form-label-sm">
                  Pilih Tanggal dan Waktu
                </label>
                <br />
                <div className="row">
                  <div className="col-6">
                    <input
                      type="date"
                      id="Tanggal"
                      className="form-control"
                      value={this.state.currentDate}
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="time"
                      id="Waktu"
                      className="form-control"
                      value={this.state.currentTime}
                    />
                  </div>
                </div>
                <br />
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}
