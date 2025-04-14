import React from 'react'
import Item from '../Item/Item'
import './ItemContainer.css'
import { io } from "socket.io-client";
import { useEffect } from "react";


const ItemContainer = (props) => {
    const socket = io('http://localhost:5173');
    useEffect(() => {
        socket.on('message', (data) => {
            console.log(data); // "Hello from server!"
        });

        socket.on('connect', () => {
            console.log('Connected to server');
        });
    }, []);
    return (
        <>
            <div className='boxItems'>
                <Item
                    clientId={props.clientId}
                    clientName={props.clientName}
                    clientRUT={props.clientRUT}
                    promotionCode={props.promotionCode}
                    isRegistered={props.isRegistered}
                    isVerified={props.isVerified}
                    didDeposit={props.didDeposit}
                />
            </div>
        </>

    )
}
export default ItemContainer