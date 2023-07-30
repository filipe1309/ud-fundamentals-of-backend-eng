import { Router } from 'express';
import fs from 'fs';

export default (router: Router): void => {
  router.get('/node-sync', (req, res) => {
    console.log("1");
    const result = fs.readFileSync(__dirname + '/test.txt');
    console.log(`file contents: ${result}`);
    console.log("2");
    res.send('Verify the console logs =)');
  })
  router.get('/node-async', (req, res) => {
    console.log("1");
    fs.readFile(__dirname + '/test.txt', (err, f) => console.log(f.toString()));
    console.log("2");
    res.send('Verify the console logs =)');
  })
}
