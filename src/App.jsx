import { useState } from 'react'
import IntroScreen from './components/IntroScreen'
import MapView from './components/MapView'
import QuizPage from './components/QuizPage'

export default function App() {
  const [screen, setScreen] = useState('intro')
  const [fading, setFading] = useState(false)
  const [selectedYear, setSelectedYear] = useState(1896)

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
        className="h-screen w-screen transition-opacity duration-[400ms]"
        style={{ opacity: fading ? 0 : 1 }}
      >
        {screen === 'intro' && <IntroScreen onBegin={handleBegin} />}
        {screen === 'map'   && (
          <MapView
            selectedYear={selectedYear}
            onYearChange={setSelectedYear}
            onOpenQuiz={() => navigate('quiz')}
          />
        )}
        {screen === 'quiz'  && <QuizPage onBack={() => navigate('map')} />}
      </div>
    </div>
  )
}
