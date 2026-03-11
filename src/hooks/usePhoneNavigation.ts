import { useState, useCallback } from 'react';

export type ScreenName =
  | 'home'
  | 'about'
  | 'contact'
  | { type: 'project'; id: string };

export interface NavigationState {
  current: ScreenName;
  previous: ScreenName | null;
  direction: 'forward' | 'back';
}

export function screenKey(screen: ScreenName): string {
  if (typeof screen === 'string') return screen;
  return `project-${screen.id}`;
}

export function usePhoneNavigation() {
  const [state, setState] = useState<NavigationState>({
    current: 'home',
    previous: null,
    direction: 'forward',
  });

  const navigate = useCallback((to: ScreenName) => {
    setState(prev => ({
      current: to,
      previous: prev.current,
      direction: 'forward',
    }));
  }, []);

  const goBack = useCallback(() => {
    setState(prev => {
      if (prev.previous === null) return { ...prev, current: 'home', direction: 'back' };
      return {
        current: prev.previous,
        previous: null,
        direction: 'back',
      };
    });
  }, []);

  const isHome = typeof state.current === 'string' && state.current === 'home';

  return { ...state, navigate, goBack, isHome };
}
