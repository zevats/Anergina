import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component ensures that whenever the route changes,
 * the window scroll position is immediately reset to the top of the new page,
 * preventing previous scroll states from leaking across routes.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // If navigating to an in-page hash anchor (e.g. #network, #cta), scroll to it
    if (hash) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // Instantly reset scroll position to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Secondary frame check to guarantee top alignment even if lazy chunks mount
    const rafId = requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });

    return () => cancelAnimationFrame(rafId);
  }, [pathname, hash]);

  return null;
}
