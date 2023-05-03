import React from 'react';
import ReactDOM from 'react-dom/client';

import GloblStyles from "./component/GlobalStyles"
import App from "./App"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <GloblStyles>
            <App></App>
        </GloblStyles>

    </React.StrictMode>

);
