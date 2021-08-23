import React from 'react'
import { Roll } from "react-awesome-reveal";


const Cards = () => {

    return (
        <div className="py-4  px-4">
            <h1>Pages</h1>
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <Roll className="p-4 rounded shadow">
                        <h2>Users</h2>
                    </Roll>
                </div>
                <div className="col-sm-6 col-md-4">
                    <Roll className="p-4 rounded shadow">
                        <h2>Todos</h2>
                    </Roll>
                </div>
                <div className="col-sm-6 col-md-4">
                    <Roll className="p-4 rounded shadow">
                        <h2>Albums</h2>
                    </Roll>
                </div>
            </div>
        </div>

    )
}

export default Cards