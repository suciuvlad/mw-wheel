import config from 'config';
import * as req from './request';

export const signIn = () =>
  req.get('/player')
    .then(data => {
      console.log(data);
    })
