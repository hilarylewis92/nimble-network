import React from 'react'
import { render } from 'react-dom'

import Application from './components/Application.jsx'
import firebase from './firebase'

require('./styles/components/all.scss')
require('./styles/config/all.scss')

render(<Application/>, document.getElementById('application'))
