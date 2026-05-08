import { useEffect, useState } from "react"
import { db } from './utils/firebase.js'

function App() {
  const [hasFirebase, setHasFirebase] = useState(false);

  useEffect(() => {
    if (db) {
      setHasFirebase(true);
    }
  }, [setHasFirebase]);

  return (
    <div>
      <h1>Hello World</h1>
      {hasFirebase ? (
        <h1>Firebase Connected</h1>
      )
        :
        <h1>Firebase not Connected</h1>
      }
    </div>
  )
}

export default App
