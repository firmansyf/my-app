import 'aos/dist/aos.css'
import {Routes, Route, Navigate, useLocation} from 'react-router-dom'
import {Dashboard, Auth} from '@/layouts'
import {useEffect} from 'react'
import AOS from 'aos'
import StickyNotes from './pages/project/sticky-notes'

function App() {
  const {pathname} = useLocation()

  useEffect(() => {
    AOS.init({
      debounceDelay: 200,
      delay: 150,
      once: true,
    })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path='/dashboard/*' element={<Dashboard />} />
      <Route path='/project/sticky-notes' element={<StickyNotes />} replace />
      <Route path='/auth/*' element={<Auth />} />
      <Route path='*' element={<Navigate to='/dashboard/home' replace />} />
    </Routes>
  )
}

export default App
