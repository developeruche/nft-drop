import 'tailwindcss/tailwind.css'
import '../styles/global.css'


function MyApp({ Component, pageProps, userData }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}


export default MyApp


