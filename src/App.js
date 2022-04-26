import { useEffect } from 'react';
import { initEditor } from './grapesjs';

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
