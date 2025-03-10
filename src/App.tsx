import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import UserProfile from './components/UserProfile'


function App() {
  const userId = "123"
  return (
    <>
      <Header />

      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <div className="content p-3">
            <Routes>
              <Route path="/" element={<UserProfile userId={userId} />} />
            </Routes>
          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}

export default App
