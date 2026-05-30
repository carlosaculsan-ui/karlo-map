import { useState } from 'react'
import IntroScreen from './components/IntroScreen'
import MapView from './components/MapView'

export default function App() {
  const [screen, setScreen] = useState('intro')
  const [fading, setFading] = useState(false)
  const [selectedYear, setSelectedYear] = useState(1896)

  const handleBegin = () => {
    setFading(true)
    setTimeout(() => {
      setScreen('map')
      setFading(false)
    }, 650)
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-black">
      <div
        className="h-screen w-screen transition-opacity duration-[650ms]"
        style={{ opacity: fading ? 0 : 1 }}
      >
        {screen === 'intro' ? (
          <IntroScreen onBegin={handleBegin} />
        ) : (
          <MapView selectedYear={selectedYear} onYearChange={setSelectedYear} />
        )}
      </div>
    </div>
  )
}
