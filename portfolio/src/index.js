import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import { Themer } from './Context/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<Themer>
    <App/>
</Themer>

</>
);


