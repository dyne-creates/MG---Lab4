import './App.css'
import EventCard from './EventCard'

function App() {

  return (
    <>
      <Header />
      <section>
        <EventCard
          eventName='Leadership Training'
          venue='FGB Hall'
          date='January 26 2025'
          organizer='John Arcila'
          capacity='20'
          registeredStudents={['John', 'James', 'Jared']}
        />

        <EventCard
          eventName='Sportsfest'
          venue='Gymnasium'
          date='January 22 2025'
          organizer='John Santos'
          capacity='30'
          registeredStudents={['Jm', 'Jz', 'Jr']}
        />

        <EventCard
          eventName='Robotics Training'
          venue='Legacy Hall'
          date='January 29 2025'
          organizer='John Cervantes'
          capacity='15'
          registeredStudents={['Mj', 'Manny', 'Pj']}
        />
      </section>
    </>
  )
}
function Header() {
  return (
    <>
      <header>
        <h1>University Event Registration Dashboard</h1>
      </header>
    </>
  )
}
export default App



