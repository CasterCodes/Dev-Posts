import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="header_Container">
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a className="logo">DevPosts</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
