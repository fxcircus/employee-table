import { StrictMode } from 'react'
import  ReactDOM  from 'react-dom'
import './style.css'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

ReactDOM.render(
    <StrictMode>
        <div>
            <Router>
                <App/>
            </Router>
        </div>
    </StrictMode>, document.getElementById('root')
)
