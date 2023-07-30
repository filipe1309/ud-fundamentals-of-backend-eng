import { Router } from 'express'

export default (router: Router): void => {
  router.get('/', (req, res) => res.send('API Running'))
  router.get('/hello', (req, res) => res.send('Hello World'))
}
