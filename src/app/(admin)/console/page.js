'use client'

import { useState } from 'react'

export default function ConsolePage() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Add user input to output
    setOutput(prev => [...prev, { type: 'input', content: input }])
    
    try {
      // Here you would typically make an API call to process the input
      // For now just echo back the input
      const response = input
      setOutput(prev => [...prev, { type: 'output', content: response }])
    } catch (error) {
      setOutput(prev => [...prev, { type: 'error', content: error.message }])
    }
    
    setInput('')
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Console</h1>
        
        {/* Output Display */}
        <div className="bg-black rounded p-4 mb-4 h-[500px] overflow-y-auto">
          {output.map((item, index) => (
            <div key={index} className={`mb-2 ${
              item.type === 'error' ? 'text-red-500' : 
              item.type === 'input' ? 'text-blue-400' : 'text-green-400'
            }`}>
              {item.type === 'input' ? '> ' : ''}
              {item.content}
            </div>
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-gray-800 rounded px-4 py-2"
            placeholder="Enter command..."
          />
          <button 
            type="submit"
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
