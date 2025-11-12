import './App.css'
import { router } from '@shui/router';
import { RouterProvider } from 'react-router-dom';

function App() {

  return (
    <section className="app">
      <RouterProvider router={ router } />
    </section>
  )
}

export default App
