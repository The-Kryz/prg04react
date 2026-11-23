const KEY = 'auth';

export const DEMO_USER = { email: 'admin@prg04.com', password: 'admin123' };

export function login(email, password) {
  if (email === DEMO_USER.email && password === DEMO_USER.password) {
    sessionStorage.setItem(KEY, 'true');
    return true;
  }
  return false;
}

export function logout() {
  sessionStorage.removeItem(KEY);
}

export function isAuthenticated() {
  return sessionStorage.getItem(KEY) === 'true';
}
