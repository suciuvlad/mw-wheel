import config from 'config';

const headers = {
  'Accept': 'application/json',
  'Accept-Language': 'en',
  'Accept': 'application/vnd.softswiss.v1+json'
}

export const get = (url, body) => {
  return fetch(`${config.API.baseURL}${url}`, {
    credentials: 'include',
    headers: headers,
    body: body
  })
}
