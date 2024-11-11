import { useEffect, useState } from 'react';

export function A11yAnnouncer() {
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    const handleA11yAnnouncement = (e: CustomEvent) => {
      setAnnouncement(e.detail);
      setTimeout(() => setAnnouncement(''), 1000);
    };

    window.addEventListener('a11y-announce', handleA11yAnnouncement as EventListener);
    return () => window.removeEventListener('a11y-announce', handleA11yAnnouncement as EventListener);
  }, []);

  return (
    <div 
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    >
      {announcement}
    </div>
  );
}