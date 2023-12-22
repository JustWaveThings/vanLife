export async function getVans(id) {
  const url = id ? `http://localhost:3000/vans/${id}` : 'http://localhost:3000/vans';
  const res = await fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      mode: 'cors',
    },
  });
  if (!res.ok) {
    throw {
      message: 'Failed to fetch vans',
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data;
}

export async function getHostVans(id) {
  const url = id ? `http://localhost:3000/host/vans/${id}` : 'http://localhost:3000/host/vans';
  const res = await fetchData(url, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      mode: 'cors',
    },
  });
  if (!res.ok) {
    throw {
      message: 'Failed to fetch vans',
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function loginUser(creds) {
  const res = await fetch('http://localhost:3000/login', {
    method: 'post',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      mode: 'cors',
    },
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
