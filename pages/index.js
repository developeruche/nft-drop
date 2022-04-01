import Head from 'next/head'
import Link from 'next/link'



export default function Home() {


  return (
    <div className="homePage">
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content=""  />
          <meta name="keywords" content=""/>
          <meta name="author" content="" />
          <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
        </Head>
        <div className="homepage__container">
          <header className='home_header'>
            <nav>
              <div className="container">
                <div className="menu">
                  <ul className="social-media">
                    <li>
                      <a href="#">
                        <i className="uil uil-facebook-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="uil uil-twitter-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="uil uil-linkedin-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="uil uil-instagram"></i>
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li>
                      <Link href="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/nft/developeruche">
                        Explore
                      </Link>
                    </li>
                    <li>
                      <Link href="/nft/developeruche">
                        NFTs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="glass">
              <h1 className="h-glass">NFTs</h1>

              <div>
                <div>
                  <i className="uil uil-shield-plus"></i>
                </div>
                <div>
                  <h2>Explore the Best NFTs collection</h2>
                  <p>lorem this is a demo text gen lorem this is a demo text gen 
                  lorem this is a demo text gen lorem this is a demo text gen 
                  lorem this is a demo text gen lorem this is a demo text gen
                  </p>
                  <a href="#">
                    Explore <i className="uil uil-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <h1 className="h-regular">
              Market
            </h1>
          </header>

        </div>
    </div>
  )
}
