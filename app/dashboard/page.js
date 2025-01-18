"use client";

import { UserButton } from '@clerk/nextjs';
import { useState } from 'react';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setOutput('');
  
    try {
      const response = await fetch('https://ad34-34-86-29-251.ngrok-free.app/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain', // Set content type to plain text
        },
        body: prompt, // Send the prompt as plain text
      });
  
      if (!response.ok) {
        throw new Error('Error fetching response from the API');
      }
  
      const data = await response.text(); // Parse the plain text response
      setOutput(data || 'No output received from the model'); // Update the output
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', fontFamily: 'Arial, sans-serif' }}>
      <UserButton/>
      <h1 style={{ textAlign: 'center' }}>ML Prompt Generator</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here"
          rows="5"
          style={{ padding: '10px', fontSize: '16px' }}
          required
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Submit'}
        </button>
      </form>
      {output && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
          <h2>Output:</h2>
          <p>{output}</p>
        </div>
      )}
    </div>
  );
}
