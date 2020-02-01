import React, { useState, useEffect } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
 
const STYLE1 = {
    test: {
        width:"100%",
        height:"76vh",
    }
}
 
const Calender = () => {
 
 
    return (
        <Jumbotron>
            <div>
                <iframe src="https://calendar.google.com/calendar/embed?height=700&amp;wkst=1&amp;bgcolor=%23039BE5&amp;ctz=America%2FNew_York&amp;src=amFja2MyODQ5QGdtYWlsLmNvbQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%2322AA99&amp;color=%23336699&amp;showPrint=0&amp;showDate=1&amp;showNav=1&amp;showCalendars=0&amp;showTabs=0&amp;showTitle=0" style={STYLE1.test}></iframe>
                
            </div>
        </Jumbotron>
    )
}
 
export default Calender;