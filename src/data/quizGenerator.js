import events from './events'
import eras from './eras'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function getEraForEvent(event) {
  return eras.find(e => event.year >= e.startYear && event.year <= e.endYear) ?? null
}

const ALL_YEARS     = [...new Set(events.map(e => e.year))].sort((a, b) => a - b)
const ALL_CATS      = [...new Set(events.map(e => e.category))]
const ALL_LOCATIONS = [...new Set(events.filter(e => e.location).map(e => e.location))]

// ── Question makers ──────────────────────────────────────────────────────────

function makeYearOfEvent(event) {
  const wrongs = shuffle(ALL_YEARS.filter(y => y !== event.year)).slice(0, 3)
  const raw    = shuffle([event.year, ...wrongs])
  return {
    question:     `In what year did "${event.title}" take place?`,
    options:      raw.map(String),
    correctIndex: raw.indexOf(event.year),
    explanation:  `"${event.title}" occurred in ${event.year}.`,
  }
}

function makeEraName(era) {
  const wrongs = shuffle(eras.filter(e => e.name !== era.name)).slice(0, 3).map(e => e.name)
  const raw    = shuffle([era.name, ...wrongs])
  return {
    question:     `Which era spanned the years ${era.startYear} to ${era.endYear}?`,
    options:      raw,
    correctIndex: raw.indexOf(era.name),
    explanation:  `The period ${era.startYear}–${era.endYear} is the "${era.name}".`,
  }
}

function makeCategory(event) {
  const wrongs = shuffle(ALL_CATS.filter(c => c !== event.category)).slice(0, 3)
  const raw    = shuffle([event.category, ...wrongs])
  return {
    question:     `What category best describes "${event.title}"?`,
    options:      raw.map(capitalize),
    correctIndex: raw.indexOf(event.category),
    explanation:  `"${event.title}" is categorized as ${event.category}.`,
  }
}

function makeEventInYear(event) {
  const wrongs = shuffle(events.filter(e => e.year !== event.year)).slice(0, 3).map(e => e.title)
  const raw    = shuffle([event.title, ...wrongs])
  return {
    question:     `Which of these events occurred in the year ${event.year}?`,
    options:      raw,
    correctIndex: raw.indexOf(event.title),
    explanation:  `In ${event.year}, "${event.title}" took place.`,
  }
}

function makeEraOfEvent(event) {
  const era = getEraForEvent(event)
  if (!era) return null
  const wrongs = shuffle(eras.filter(e => e.name !== era.name)).slice(0, 3).map(e => e.name)
  const raw    = shuffle([era.name, ...wrongs])
  return {
    question:     `During which era did "${event.title}" occur?`,
    options:      raw,
    correctIndex: raw.indexOf(era.name),
    explanation:  `"${event.title}" (${event.year}) falls within the ${era.name} (${era.startYear}–${era.endYear}).`,
  }
}

function makeLocation(event) {
  if (!event.location) return null
  const wrongs = shuffle(ALL_LOCATIONS.filter(l => l !== event.location)).slice(0, 3)
  const raw    = shuffle([event.location, ...wrongs])
  return {
    question:     `Where did "${event.title}" take place?`,
    options:      raw,
    correctIndex: raw.indexOf(event.location),
    explanation:  `"${event.title}" occurred in ${event.location}.`,
  }
}

function makeChronology() {
  const pool   = shuffle(events).slice(0, 4)
  const first  = [...pool].sort((a, b) => a.year - b.year)[0]
  const raw    = pool.map(e => e.title)
  return {
    question:     `Which of these events happened FIRST chronologically?`,
    options:      raw,
    correctIndex: raw.indexOf(first.title),
    explanation:  `"${first.title}" happened first, in ${first.year}.`,
  }
}

function makeOddOneOut(era) {
  const inside  = events.filter(e => e.year >= era.startYear && e.year <= era.endYear)
  const outside = events.filter(e => e.year < era.startYear  || e.year > era.endYear)
  if (inside.length < 3 || outside.length < 1) return null
  const oddOne  = shuffle(outside)[0]
  const correct = shuffle(inside).slice(0, 3).map(e => e.title)
  const raw     = shuffle([oddOne.title, ...correct])
  return {
    question:     `Which of these events does NOT belong to the "${era.name}" era?`,
    options:      raw,
    correctIndex: raw.indexOf(oddOne.title),
    explanation:  `"${oddOne.title}" (${oddOne.year}) is outside the ${era.name} (${era.startYear}–${era.endYear}).`,
  }
}

// ── Difficulty config ────────────────────────────────────────────────────────

const TYPES = {
  easy:   ['year-of-event', 'era-name', 'category'],
  medium: ['event-in-year', 'era-of-event', 'location', 'year-of-event'],
  hard:   ['chronology', 'odd-one-out', 'era-of-event', 'event-in-year'],
}

export function generateQuiz(difficulty, count = 15) {
  const types         = TYPES[difficulty]
  const shuffledEvts  = shuffle(events)
  const shuffledEras  = shuffle(eras)
  const questions     = []
  let   ei = 0, ri = 0

  const next = () => {
    for (let attempt = 0; attempt < 30; attempt++) {
      const type = types[Math.floor(Math.random() * types.length)]
      let q = null

      if (type === 'year-of-event')  { q = makeYearOfEvent(shuffledEvts[ei % shuffledEvts.length]);  ei++ }
      else if (type === 'era-name')  { q = makeEraName(shuffledEras[ri % shuffledEras.length]);       ri++ }
      else if (type === 'category')  { q = makeCategory(shuffledEvts[ei % shuffledEvts.length]);      ei++ }
      else if (type === 'event-in-year') { q = makeEventInYear(shuffledEvts[ei % shuffledEvts.length]); ei++ }
      else if (type === 'era-of-event')  { q = makeEraOfEvent(shuffledEvts[ei % shuffledEvts.length]);  ei++ }
      else if (type === 'location')  { const e = shuffledEvts.filter(x => x.location)[ei % shuffledEvts.filter(x=>x.location).length]; q = makeLocation(e); ei++ }
      else if (type === 'chronology')    { q = makeChronology() }
      else if (type === 'odd-one-out')   { q = makeOddOneOut(shuffledEras[ri % shuffledEras.length]); ri++ }

      if (q) return { ...q, id: questions.length + 1, difficulty }
    }
    return null
  }

  while (questions.length < count) {
    const q = next()
    if (q) questions.push(q)
  }

  return questions
}
