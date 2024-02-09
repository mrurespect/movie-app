import React from 'react';

function Footer(props) {
    return (
        <div>
            <p>
                © {new Date().getFullYear()} Movie App. All rights reserved.
            </p>
        </div>
    );
}

export default Footer;