import React from 'react';
import './specOffer.css';
import Button from '../../buttons/grab-offer/grab-btn';

const specOffer=(props)=>{
    return(
        <div className="specOffer">
        <div className="offerArrange">
            {/* <p className="offerHead">{props.data.title}</p>
            <p className="offerContent">{props.data.content}</p> */}
            <p className="offerStarting">Ramadan Iftar Buffet </p>
             <p className="offerDigit">150 QAR</p>
             <div className="offerButton">
                 <Button url="/offers" content="Visit Offers"/>
             </div>
            </div>
        </div>
    );
}

export default specOffer;