import { useEffect } from 'react';

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = events => {
      if (!ref.current || ref.current.contains(events.target)) {
        return;
      }
      handler(events);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};

export default useOnClickOutside;
