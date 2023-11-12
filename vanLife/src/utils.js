import { redirect } from 'react-router-dom';

export async function requireAuth(request) {
  console.log('request', request);
  const pathname = new URL(request.url);

  const isLoggedIn = localStorage.getItem('loggedInVanLife');
  if (!isLoggedIn) {
    const response = redirect(`/login?redirectTo=${pathname}`);
    response.body = true;
    throw response;
  }
  return null;
}
