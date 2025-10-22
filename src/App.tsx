import { Outlet, Link } from 'react-router-dom'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header>
        <nav aria-label="Primary">
          <Link to="/">Home</Link>{' | '}
          <Link to="/post/hello">Sample Post</Link>
        </nav>
      </header>
      <main id="main">
        <Outlet />
      </main>
      <footer>© {new Date().getFullYear()}</footer>
    </>
  )
}

