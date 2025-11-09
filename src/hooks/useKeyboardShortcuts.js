import { useEffect } from 'react';

export const useKeyboardShortcuts = () => {
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Ctrl/Cmd + K to focus search (future feature)
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        console.log('Search shortcut pressed!');
      }

      // Press 'H' to go home
      if (e.key === 'h' && !e.ctrlKey && !e.metaKey) {
        window.location.hash = '#home';
      }

      // Press 'P' to go to projects
      if (e.key === 'p' && !e.ctrlKey && !e.metaKey) {
        window.location.hash = '#projects';
      }

      // Press 'C' to go to contact
      if (e.key === 'c' && !e.ctrlKey && !e.metaKey) {
        window.location.hash = '#contact';
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);
};
