import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.route'

const app: express.Application = express()

app.use(cors());
app.use(bodyParser.json())

app.use('/user', userRoutes)
const PORT: any = process.env.PORT || 5500

app.listen(PORT, () => {
    console.warn(`App listening at http://localhost:${PORT}`)
})