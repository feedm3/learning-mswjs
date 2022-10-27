import { useState } from 'react'
import './App.css'

import { request, gql } from 'graphql-request'

const API_URL = 'https://api.spacex.land/graphql/';

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
      <h1>MSW + GraphQL + Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          request(API_URL, CompanyQuery).then((data) => setCompanyResponse(data))
        }}>
          Request Company
        </button>
        <p>
          Company response:
        </p>
        <code>{JSON.stringify(companyResponse, null, 2)}</code>
      </div>
      <div className="card">
        <button onClick={() => {
          request(API_URL, FoundingQuery).then((data) => setFoundingResponse(data))
        }}>
          Request Founding
        </button>
        <p>
          Founding response:
        </p>
        <code>{JSON.stringify(foundingResponse, null, 2)}</code>
      </div>
    </div>
  )
}

export default App
