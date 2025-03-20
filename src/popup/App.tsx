import './App.css'
import ExtensionWindowContainer from '../components/ExtensionWindowContainer'

function App() {
  return (
    <ExtensionWindowContainer>
      <div className="p-4">
        <h1 className="text-xl font-bold">Popup</h1>
        <p className="mt-2">This is your Chrome extension popup.</p>
      </div>
    </ExtensionWindowContainer>
  )
}

export default App
