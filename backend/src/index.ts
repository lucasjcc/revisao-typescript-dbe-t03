import cors from 'cors'
import express, { Application, Request, Response } from 'express'

const app: Application = express()

const PORTA: number = 3003

app.use(cors())
app.use(express.json())

app.get('/usuarios', (req: Request, res: Response) => {
  return res.json({ mensagem: 'Olá, mundo!' })
})

app.post('/usuarios', (req: Request, res: Response) => {
  console.log(req.body)
  return res.json({ mensagem: 'Olá, mundo!' })
})

app.listen(PORTA, () => console.log(`API rodando na porta ${PORTA}`))
