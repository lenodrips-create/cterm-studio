import { useEffect } from 'react'
import { motion } from 'motion/react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4'
const STUDIO_URL = 'studio.html'
const ease = [0.16, 1, 0.3, 1]

const enterStudio = () => {
  window.location.href = STUDIO_URL
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
        <button className="btn btn-dark" type="button" onClick={enterStudio} autoFocus>
          Enter
        </button>
      </motion.footer>
    </div>
  )
}
