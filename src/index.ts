import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { PrismaClient } from '@prisma/client';

dotenv.config()

const app = express();

const prisma = new PrismaClient()

app.use(cors());
app.use(express.json());
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("Hello")
})
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))