import { Fragment } from "react";
import { BrowserRouter, Route, } from "react-router-dom";
import Navigation from "../components/Navigation";
import Pengajuan from "./Pengajuan";
import SewaDiterima from "./SewaDiterima";

export default function AdminPage() {
    return (
        <Fragment>
            <Navigation />
            <BrowserRouter>
                <Route path="/pengajuan-sewa" component={Pengajuan} />
                <Route path="/sewa-diterima" component={SewaDiterima} />
            </BrowserRouter>
        </Fragment>
    );
}