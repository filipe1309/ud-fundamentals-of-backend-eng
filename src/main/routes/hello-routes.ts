import { Router } from 'express'

export default (router: Router): void => {
  router.get('/', (req, res) => {
    // TODO list all routes
    res.send('API Running')
  })
  router.get('/hello', (req, res) => res.send('Hello World'))
  router.get('/node-sync-async', (req, res) => res.send('Hello World'))
}
