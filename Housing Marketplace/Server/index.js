import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRoute } from './routes/residencyRoute';
import { residencyRoute } from './routes/userRoute';
dotenv.config();

const app= express();
const PORT= process.env.PORT || 8000;

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.listen(PORT,()=>{
    console.log(`server runs at port ${PORT}`)
})

app.use('/api/user', userRoute)
app.use("/api/residency", residencyRoute)