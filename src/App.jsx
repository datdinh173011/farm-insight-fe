import React from 'react'
import InterviewForm from './components/InterviewForm'

export default function App() {
  // App becomes a thin wrapper; InterviewForm handles the form UI and logic.
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <InterviewForm />
    </div>
  )
}
