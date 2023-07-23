import '../styles/globals.css'
import { AuthProvider } from './api/auth'
import { CartProvider } from './api/cartcontext'

function MyApp({ Component, pageProps }) {
  return <AuthProvider><CartProvider><Component {...pageProps} /></CartProvider></AuthProvider>
}

export default MyApp
