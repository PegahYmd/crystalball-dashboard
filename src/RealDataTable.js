import React, { Component, Fragment } from 'react';
import { render} from 'react-dom';
import ReactDatatable from '@ashvin27/react-datatable';
import Dashboard from "./Dashboard";

class Stocktable extends Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                key: "Symbol",
                text: "Symbol",
                className: "name",
                align: "left",
                sortable: true,
            },
            {
                key: "Name",
                text: "Name",
                className: "address",
                align: "left",
                sortable: true
            },
            {
                key: "Price",
                text: "Price",
                className: "postcode",
                sortable: true
            },
            {
                key: "%",
                text: "%",
                className: "rating",
                align: "left",
                sortable: true
            },
            {
                key: "Trend",
                text: "Trend",
                className: "type_of_food",
                sortable: true,
                align: "left"
            },
            // {
            //     key: "action",
            //     text: "Action",
            //     className: "action",
            //     width: 100,
            //     align: "left",
            //     sortable: false,
            //     cell: record => {
            //         return (
            //             <Fragment>
            //                 <button
            //                     className="btn btn-primary btn-sm"
            //                     onClick={() => this.editRecord(record)}
            //                     style={{marginRight: '5px'}}>
            //                     <i className="fa fa-edit"></i>
            //                 </button>
            //                 <button
            //                     className="btn btn-danger btn-sm"
            //                     onClick={() => this.deleteRecord(record)}>
            //                     <i className="fa fa-trash"></i>
            //                 </button>
            //             </Fragment>
            //         );
            //     }
            // }
        ];
        this.config = {
            page_size: 10,
            length_menu: [ 10, 20, 50 ],
            button: {
                excel: true,
                print: true,
                extra: true,
            }
        }

        this.state = {
            records: [
                {
                    "Symbol": "AAPL",
                    "Name": "Apple inc.",
                    "Price": "120.71",
                    "%": "-0.40",
                    // "rating": 5,
                    "Trend": "top"
                },
                {
                    "Symbol": "AAPL",
                    "Name": "Apple inc.",
                    "Price": "120.71",
                    "%": "-0.40",
                    // "rating": 5,
                    "Trend": "top"
                },
                {
                    "Symbol": "AAPL",
                    "Name": "Apple inc.",
                    "Price": "120.71",
                    "%": "-0.40",
                    // "rating": 5,
                    "Trend": "top"
                },
                {
                    "Symbol": "AAPL",
                    "Name": "Apple inc.",
                    "Price": "120.71",
                    "%": "-0.40",
                    // "rating": 5,
                    "Trend": "top"
                },
                {
                    "Symbol": "AAPL",
                    "Name": "Apple inc.",
                    "Price": "120.71",
                    "%": "-0.40",
                    // "rating": 5,
                    "Trend": "top"
                }

            ]
        }
        this.extraButtons =[
            {
                className:"btn btn-primary buttons-pdf",
                title:"Export TEst",
                children:[
                    <span>
                    <i className="glyphicon glyphicon-print fa fa-print" aria-hidden="true"></i>
                    </span>
                ],
                onClick:(event)=>{
                    console.log(event);
                },
            },
            {
                className:"btn btn-primary buttons-pdf",
                title:"Export TEst",
                children:[
                    <span>
                    <i className="glyphicon glyphicon-print fa fa-print" aria-hidden="true"></i>
                    </span>
                ],
                onClick:(event)=>{
                    console.log(event);
                },
                onDoubleClick:(event)=>{
                    console.log("doubleClick")
                }
            },
        ]
    }

    editRecord(record) {
        console.log("Edit Record", record);
    }

    deleteRecord(record) {
        console.log("Delete Record", record);
    }

    render() {
        return (
            <div>
                <ReactDatatable
                    config={this.config}
                    records={this.state.records}
                    columns={this.columns}
                    extraButtons={this.extraButtons}
                />
            </div>
        )
    }
}

// render(<App />, document.getElementById("app"));

export default Stocktable;