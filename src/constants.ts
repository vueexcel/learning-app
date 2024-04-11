/**
 * Default Server URL
 */
export const SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'http://localhost:8000'
  : 'http://localhost:8000';
