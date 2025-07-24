import React, { useState } from 'react';
import HelloWorld from './components/HelloWorld';

function App() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/hello`);
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setApiData({ error: 'Failed to connect to backend' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>Welcome to {process.env.REACT_APP_APP_NAME || 'My Fullstack App'}</h1>
        <p>A simple fullstack application for CI/CD learning</p>
      </header>
      
      <HelloWorld />
      
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <h2>Backend Connection Test</h2>
        <button 
          onClick={fetchData}
          disabled={loading}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Loading...' : 'Test Backend Connection'}
        </button>
        
        {apiData && (
          <div style={{ 
            marginTop: '20px', 
            padding: '15px', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '4px',
            textAlign: 'left'
          }}>
            <h3>Backend Response:</h3>
            <pre>{JSON.stringify(apiData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;