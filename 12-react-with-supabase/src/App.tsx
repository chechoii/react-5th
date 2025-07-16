import { AuthProvider } from "./auth/AuthProvider"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import { routes } from "./components/router/router"
import {RouterProvider} from "./components/router/RouterProvider"

function App() {
  return (
    <div>
        <AuthProvider>
          <RouterProvider navigation={<Header />} routes={routes} />
          <Footer />
        </AuthProvider>
    </div>
  )
}
export default App