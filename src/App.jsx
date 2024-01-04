import {Routes, Route, Navigate, useLocation} from 'react-router-dom'
import {Dashboard, Auth} from '@/layouts'
import {useEffect} from 'react'

function App() {
  const {pathname} = useLocation()
  // const [loading, setLoading] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    // setLoading(true)
    // setTimeout(() => setLoading(false), 2000)
  }, [pathname])

  return (
    <Routes>
      <Route path='/dashboard/*' element={<Dashboard />} />
      <Route path='/auth/*' element={<Auth />} />
      <Route path='*' element={<Navigate to='/dashboard/home' replace />} />
    </Routes>
  )
}

export default App
