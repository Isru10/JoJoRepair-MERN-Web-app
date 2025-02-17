import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { store } from './app/store.js'
import { Provider } from 'react-redux'


import { disableReactDevTools } from '@fvilers/disable-react-devtools';

if (process.env.NODE_ENV === 'production') disableReactDevTools()



createRoot(document.getElementById('root')).render(
  <StrictMode>
{/* import provider and place store state managment redux  */}
  <Provider store={store}> 
    <BrowserRouter>
          <Routes> 
            {/* you forgot /* wild card */}
            <Route path='/*' element={<App />}/>
          </Routes>
     </BrowserRouter>
     </Provider>

  </StrictMode>
)
