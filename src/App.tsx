import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { request, gql } from 'graphql-request'

const CompanyQuery = gql`
    query getCompany {
        company {
            ceo
            cto
        }
    }
`

export interface FoundQueryResponse {
  company: {
    founded: number;
    founder: string;
  }
}

const FoundingQuery = gql`
    query getFounding {
        company {
            founded
            founder
        }
    }
`


function App() {
  const [companyResponse, setCompanyResponse] = useState({})
  const [foundingResponse, setFoundingResponse] = useState({})

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo"/>
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo"/>
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          request('https://api.spacex.land/graphql/', CompanyQuery).then((data) => setCompanyResponse(data))
        }}>
          Request Company
        </button>
        <p>
          Company response: <code>{JSON.stringify(companyResponse, null, 2)}</code>
        </p>
      </div>
      <div className="card">
        <button onClick={() => {
          request('https://api.spacex.land/graphql/', FoundingQuery).then((data) => setFoundingResponse(data))
        }}>
          Request Founding
        </button>
        <p>
          Founding response: <code>{JSON.stringify(foundingResponse, null, 2)}</code>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
