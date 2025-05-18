import 'popper.js';
import 'bootstrap';
import './css/App.css';


function Dashboard() {
    return (
        <div className="App">
            <div className="page">
                <div className="dashboard-panel">
                    <section className="section section-lg text-center">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="tabs-custom tabs-vertical tabs-line" id="tabs-2">
                                        <ul className="nav nav-tabs">
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link active" href="#tabs-2-1" data-toggle="tab">
                                                    <span><i className="fa fa-home"></i> </span>
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link" href="#tabs-2-2" data-toggle="tab">
                                                    <span><i className="fa fa-table"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link" href="#tabs-2-3" data-toggle="tab">
                                                    <span><i className="fa fa-chart-bar"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link " href="#tabs-2-4" data-toggle="tab">
                                                    <span><i className="fa fa-chart-line"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link" href="#tabs-2-5" data-toggle="tab">
                                                    <span><i className="fa fa-calendar-check"></i></span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div className="tab-pane fade active show" id="tabs-2-1">
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="inner-col">
                                                                <div className="d-inline-flex">
                                                                   <p>stocks</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="inner-col">
                                                                <div className="d-inline-flex">
                                                                    <p>charts</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br></br>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="inner-col">
                                                                <div className="d-inline-flex">
                                                                    <p>visualization</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="inner-col">
                                                                <div className="d-inline-flex">
                                                                    <p>portfolio</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tabs-2-2">
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="inner-col">
                                                                <div className="d-inline-flex">
                                                                    <p>stocks</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tabs-2-3">
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="inner-col">
                                                                <div className="d-inline-flex">
                                                                    <p>stocks</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tabs-2-4">
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="inner-col">
                                                                <div className="d-inline-flex">
                                                                    <p>stocks</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tabs-2-5">
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="inner-col">
                                                                <div className="d-inline-flex"><p>stocks</p></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

