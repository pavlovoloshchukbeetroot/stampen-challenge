import { BrowserRouter, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import { StrictMode } from "react"
import { render } from "react-dom"
import reportWebVitals from "./reportWebVitals"
import * as Layer from "layers"

import "reset.css"
import "styles/globals.scss"

const queryClient = new QueryClient()

render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layer.Root />}>
            <Route index element={<Layer.MovieList />} />
            <Route path="movies/:movieName" element={<Layer.MovieDetails />} />
            <Route path="characters" element={<Layer.CharacterList />} />
            {/* <Route path="characters/:characterName" element={<Layer.CharacterDetails />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
