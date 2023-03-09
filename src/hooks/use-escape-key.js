import React from 'react';

const KEY_DOWN = 'keydown';

function useEscapeKey(fn) {
    React.useEffect(() => {
        function handleEscape(event) {
          if (event.code === 'Escape') {
            fn();
          }
        }
    
        window.addEventListener(KEY_DOWN, handleEscape);
    
        return () => window.removeEventListener(KEY_DOWN, handleEscape);
      }, [fn]);
}

export default useEscapeKey;