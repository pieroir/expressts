import express,{NextFunction, Request,Response} from 'express'

const app = express(); 

app.use(express.json());
app.use(express.urlencoded({extended:true} ))

app.get('/',(req:Request, res:Response, next:NextFunction) => {
    // res.send('hello world')

    res.json({'test':123});
} );



app.listen(3000, ()=>{
    console.log('server runned')
})