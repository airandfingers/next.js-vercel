// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from 'cors'
import { runMiddleware } from '@lib/api'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

export default async (req, res) => {
  // Run the middleware
  await runMiddleware(req, res, cors)

  // Rest of the API logic
  res.statusCode = 200
  res.json({ name: 'Aaron Yoshitake' })
}
