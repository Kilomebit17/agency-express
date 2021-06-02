import express from 'express'
import path from 'path'

const __dirname = path.resolve() //фиксится ошибка
const app = express()
const PORT = process.env.PORT ?? 3000 // порт для динамiки
app.use(express.static(path.resolve(__dirname, 'static')))

app.listen(PORT)


