import { ToastContainer } from 'react-toastify'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect } from 'react';
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login";
import About from './pages/About/About';
import Work from './pages/Work/Work';
import Skills from './pages/Skills/Skills';
import Testimonials from './pages/Testimonials/Testimonials';
import Experiences from './pages/Experiences/Experiences';
import Form from './pages/Form/Form';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector,useDispatch } from 'react-redux'
import { logoutRender } from './features/auth/authSlice'
import Edit from './pages/Edit/Edit';


function App() {
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message, isLoggedIn } = useSelector(
    (state) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (!localStorage.getItem("user")) {
      dispatch(logoutRender())
    }
  }, [user])

  return (
    <>
      <div>
        <BrowserRouter>
          {isLoggedIn ? (

            <>
              <header>
                <Header />
              </header>
              <main>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/testimonials" element={<Testimonials />} />
                  <Route path="/experiences" element={<Experiences />} />
                  <Route path="/form" element={<Form />} />
                  <Route path="/edit/:path/:id" element={<Edit />} />
                </Routes>
              </main>
            </>
          ) :
            (<Login />)
          }
        </BrowserRouter>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
