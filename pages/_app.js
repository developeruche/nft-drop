import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps, userData }) {
  return (
    <>
      <ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
          <Component {...pageProps} />
      </ThirdwebProvider>
    </>
  )
}


export default MyApp


