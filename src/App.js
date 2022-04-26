import { useEffect } from 'react';
import { initEditor } from './config';

function App() {
  useEffect(() => {
    initEditor();
  }, []);

  return (
    <>
      <div id='gjs'></div>
    </>
  );
}

export default App;
