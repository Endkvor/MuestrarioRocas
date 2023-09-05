import {createRoot} from 'react-dom/client'
import {App} from './src/App.jsx'
import "./src/styles.css"
//const elementoVariable =createRoot(document.getElementById('elemento'))

const root = createRoot(document.getElementById('app'))

root.render (<App/ >)

