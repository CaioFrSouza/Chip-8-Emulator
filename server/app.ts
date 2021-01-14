import express,{ Application, Request, Response } from 'express';
import { resolve } from 'path';
import { execSync  } from 'child_process';
import { readdirSync,createReadStream } from 'fs'

const app: Application = express();
const emulatePath = resolve(__dirname,'..','web');
const roomPath = resolve(__dirname,'..','rooms');

app.use('/public',express.static(resolve(emulatePath,'public')))
app.use(express.json())

app.get('/',(req: Request, res: Response) => {
    return res.sendFile(resolve(emulatePath,'index.html'));
});

app.get('/list', (req: Request, res: Response) => {
    const roms = readdirSync(roomPath);
    return res.status(200).send({rooms:roms});
})

app.get('/room/:room', (req: Request, res :Response) => {
    const room = req.params.room;
    const readStream:any = createReadStream(resolve(roomPath,room));

    readStream.on('open',() =>{
    readStream.pipe(res);
})
    readStream.on('error', function(err:string) {
        res.end(err);
    });
})

app.listen(3333, () => {
    execSync ('start http://localhost:3333/')
    console.log('O servidor foi iniciado com sucesso')
});

