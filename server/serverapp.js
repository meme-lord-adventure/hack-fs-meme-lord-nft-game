import express from 'express';
import bodyParser from 'body-parser';

import getRoutes from './routes/posts.js'
import getRoutesConnect from './routes/posts.js'
import getRoutesExplore from './routes/posts.js'
import getRoutesMembers from './routes/posts.js'
import  postRoutesMembers  from './routes/posts.js'
import cors from 'cors'


const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));


app.listen(PORT,()=>console.log(`Server running on ${PORT}`))




app.get('/',getRoutes);
app.get('/connect',getRoutesConnect);
app.get('/explore',getRoutesExplore);
app.get('/members',getRoutesMembers);
app.post('/members',postRoutesMembers);
