
import './App.css'
import Card from './components/Card'

export default function App() {
  let username= {
    name: "Sanjay",
    age: 21
  }
  return (
    <>
      <p className="bg-green-300 text-black p-4 rounded-xl mb-4">
        Hello world!
      </p>

      <Card username="sajay" />
      <Card username="Shandilya" btnText="visit us" />
    </>
  )
}
