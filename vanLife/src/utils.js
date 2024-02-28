import { redirect } from 'react-router-dom';

export async function requireAuth(request) {
  const pathname = new URL(request.url);

  const isLoggedIn = localStorage.getItem('loggedInVanLife');
  if (!isLoggedIn) {
    const response = redirect(`/login?redirectTo=${pathname}`);

    throw response;
  }
  return null;
}
