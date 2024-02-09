import React from 'react';

function NotFound(props) {
    return (
        <div className="text-center  py-5 vh-100">
            <h2 className="fw-bolder pt-5">Page Not Found</h2>
            <p className="py-3 text-muted ">we couldn't find what are you looking for</p>
            <img src="scarecrow.png" alt="" style={{width:"30px",height:"30px"}}/>
        </div>
    );
}

export default NotFound;