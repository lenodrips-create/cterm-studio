import { useEffect } from 'react'
import { motion } from 'motion/react'
import { Plus } from 'lucide-react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4'
const STUDIO_URL = 'studio.html'
const ease = [0.16, 1, 0.3, 1]

const enterStudio = () => {
  window.location.href = STUDIO_URL
}

function Logo() {
  return (
    <a className="logo" href="./" aria-label="NeuralKinetics home">
      <svg className="logo-icon" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="7" width="11" height="6" rx="3" transform="rotate(-35 8.5 10)" fill="#000" />
        <rect x="10" y="11" width="11" height="6" rx="3" transform="rotate(-35 15.5 14)" fill="#000" />
      </svg>
      <span className="brand-text">NeuralKinetics</span>
    </a>
  )
}

function GridIcon() {
  return (
    <svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
      <circle cx="3" cy="3" r="1.5" fill="#fff" />
      <circle cx="9" cy="3" r="1.5" fill="#fff" />
      <circle cx="3" cy="9" r="1.5" fill="#fff" />
      <circle cx="9" cy="9" r="1.5" fill="#fff" />
    </svg>
  )
}

export default function App() {
  // Pressing Enter anywhere on the page opens the studio too.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Enter' && !e.target.closest?.('button, a')) enterStudio()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="hero">
      <motion.nav
        className="navbar"
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease }}
      >
        <div className="nav-left">
          <Logo />
          <button className="menu-btn" type="button">
            <span className="menu-circle">
              <Plus size={12} strokeWidth={3} color="#000" />
            </span>
            <span>Menu</span>
          </button>
          <div className="tags-pill">
            <span>Advanced Bionics</span>
            <span>Cognitive AI</span>
          </div>
        </div>
        <div className="nav-right">
          <div className="systems-pill">
            <button className="grid-btn" type="button" aria-label="Adaptive Systems">
              <GridIcon />
            </button>
            <span className="systems-label">Adaptive Systems</span>
          </div>
        </div>
      </motion.nav>

      <motion.div
        className="video-wrap"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease }}
      >
        <video className="bg-video" src={VIDEO_URL} autoPlay muted loop playsInline />
      </motion.div>

      <motion.footer
        className="footer"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease }}
      >
        <div className="footer-left">
          <motion.p
            className="subtitle"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease }}
          >
            <span className="dot" />
            Best digital banking card 2026
          </motion.p>
          <motion.h1
            className="heading"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease }}
          >
            One Card, Zero
            <br />
            Limits. Worldwide.
          </motion.h1>
          <motion.div
            className="buttons"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8, ease }}
          >
            <button className="btn btn-dark" type="button" onClick={enterStudio} autoFocus>
              Enter
            </button>
            <button className="btn btn-dark" type="button">See Features</button>
            <button className="btn btn-outline" type="button">How It Works</button>
          </motion.div>
        </div>
        <div className="footer-right">
          <span className="tag">Neuromorphic</span>
          <span className="tag">AGI</span>
          <span className="tag">Cybernetics</span>
        </div>
      </motion.footer>
    </div>
  )
}
