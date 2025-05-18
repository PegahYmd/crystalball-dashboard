import React from 'react';
import './css/App.css';
import * as ReactBootStrap from 'react-bootstrap';

const StockTable = () => {
    const players = [
        {position:"asdasd", name:"hgjghjg", team:"ghjghj"},
        {position:"dfdsf", name:"sdfsdf", team:"sdfsdf"},
        {position:"hgjkhjk", name:"uiouio", team:"hjkhjk"},
        {position:"asdasd", name:"asdasd", team:"asdasd"},
        ]

    const renderPlayer =(players , index)=>{
        return(
            <tr key={index}>
                <td>{players.position}</td>
                <td>{players.name}</td>
                <td>{players.team}</td>
            </tr>
        )
    }
    return(
        <div className="App">
            <ReactBootStrap.Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Team</th>
                </tr>
                </thead>
                <tbody>
                {players.map(renderPlayer)}
                </tbody>
            </ReactBootStrap.Table>
        </div>
    );
}



export default StockTable;