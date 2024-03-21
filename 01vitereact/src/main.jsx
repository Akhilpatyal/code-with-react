import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement = React.createElement(
  'a',
  {
    href: "https://google.com", target: '_blank'
  },
  'click me to visit',
)
// const anotherElement=(
//   <a href="https://google.com" target='_blank'>click me to visit</a>
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    anotherElement
    <App />

  </>
)
