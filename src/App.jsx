import { useState } from 'react'
import IntroScreen from './components/IntroScreen'
import MapView from './components/MapView'
import QuizPage from './components/QuizPage'

export default function App() {
  const [screen, setScreen] = useState('intro')
  const [fading, setFading] = useState(false)
  const [selectedYear, setSelectedYear] = useState(900)

  const navigate = (to) => {
    setFading(true)
    setTimeout(() => {
      setScreen(to)
      setFading(false)
    }, 400)
  }

  const handleBegin = () => navigate('map')

  return (
    <div className="h-screen w-screen overflow-hidden bg-black">
      <div
        className="relative h-screen w-screen transition-opacity duration-[400ms]"
        style={{ opacity: fading ? 0 : 1 }}
      >
        {screen === 'intro' && <IntroScreen onBegin={handleBegin} />}

        {/* MapView stays mounted from first visit onward to avoid re-initialising the map */}
        {screen !== 'intro' && (
          <div
            className="absolute inset-0"
            style={{
              visibility: screen === 'map' ? 'visible' : 'hidden',
              pointerEvents: screen === 'map' ? 'auto' : 'none',
            }}
          >
            <MapView
              selectedYear={selectedYear}
              onYearChange={setSelectedYear}
              onOpenQuiz={() => navigate('quiz')}
            />
          </div>
        )}

        {screen === 'quiz' && <QuizPage onBack={() => navigate('map')} />}
      </div>
    </div>
  )
}
