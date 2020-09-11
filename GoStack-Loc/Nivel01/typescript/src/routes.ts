import {Response, Request} from 'express'
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'matheus.farsetti@agenciasitus.com',
    password:'171116',
    techs: [
      'Node.js',
      'React.js',
      'React Native',
      { title: 'javascript', experience:100 }
    ],
  });

  return response.json({ message: 'Hello GoStack' })
}