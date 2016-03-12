import React from 'react'
import { render } from 'react-dom'

const element = () => <p>Hello, world!</p>

render(React.createElement(element),
       document.getElementById('main'));
