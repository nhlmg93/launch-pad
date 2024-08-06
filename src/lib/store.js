import { writable } from 'svelte/store';

/** 
@function
@param {string} key 
@param {Object | string | number | boolean} initialValue 
@returns Writable
*/
function createLocalStorageStore(key, initialValue) {
  // Check if localStorage is available
  const isBrowser = typeof window !== 'undefined' && window.localStorage;

  // Get stored value from localStorage or use initial value
  const storedValue = isBrowser ? localStorage.getItem(key) : null;
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // Create a writable store
  const store = writable(initial);

  // Subscribe to changes and update localStorage
  if (isBrowser) {
    store.subscribe(value => {
      localStorage.setItem(key, JSON.stringify(value));
    });
  }

  return store;
}

/**
 * @type {import('svelte/store').Writable<{theme:stirng, fontSize: number}>}
 */
export const userPreferences = createLocalStorageStore('userPreferences', {
  theme: 'light',
  fontSize: 16
})
