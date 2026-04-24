import {  useState,useEffect } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [counters, setCounters] = useState([])

  useEffect(() => {
    axios.get(' https://xcountries-backend.labs.crio.do/all')
      .then(response => {
        setCounters(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', padding: '16px' }}>
      {counters.map(counter => (
        <div key={counter.abbr} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <img src={counter.flag} alt={`${counter.name} flag`} style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '4px', marginBottom: '8px' }} />
          <p style={{ margin: 0 }}>{counter.name}</p>
        </div>
      ))}
    </div>
  )
}

export default App
