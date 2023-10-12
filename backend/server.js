import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
const app = express();
const port = 3000

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: "",
    database: "absensi-psm-clone"
})

app.use(cors({
    origin: "http://localhost:5173",
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  }));

app.get('/all', (req, res) => {
    const sql = "SELECT * FROM singers_kicc"
    db.query(sql, (err, field) => {
        res.json(field)
    })
})

app.get('/sopran_1', (req, res) => {
    const sql = `SELECT * FROM singers_kicc WHERE suara = "sopran_1"`
    res.header("Access-Control-Allow-Origin", "*")
    db.query(sql, (err, field) => {
        if (err)throw err
        let result = [];
       for (let i = 0; i < field.length; i++){
        result[i] = field[i].nama;
       }
       res.json(result);
       return result;
    })
})

app.get('/sopran_2', (req, res) => {
    const sql = `SELECT * FROM singers_kicc WHERE suara = "sopran_2"`
    res.header("Access-Control-Allow-Origin", "*")
    db.query(sql, (err, field) => {
        if (err)throw err
        let result = [];
       for (let i = 0; i < field.length; i++){
        result[i] = field[i].nama;
       }
       res.json(result);
       return result;
    })
})

app.get('/alto_1', (req, res) => {
    const sql = `SELECT * FROM singers_kicc WHERE suara = "alto_1"`
    res.header("Access-Control-Allow-Origin", "*")
    db.query(sql, (err, field) => {
        if (err)throw err
        let result = [];
       for (let i = 0; i < field.length; i++){
        result[i] = field[i].nama;
       }
       res.json(result);
       return result;
    })
})

app.get('/alto_2', (req, res) => {
    const sql = `SELECT * FROM singers_kicc WHERE suara = "alto_2"`
    res.header("Access-Control-Allow-Origin", "*")
    db.query(sql, (err, field) => {
        if (err)throw err
        let result = [];
       for (let i = 0; i < field.length; i++){
        result[i] = field[i].nama;
       }
       res.json(result);
       return result;
    })
})

app.get('/tenor_1', (req, res) => {
    const sql = `SELECT * FROM singers_kicc WHERE suara = "tenor_1"`
    res.header("Access-Control-Allow-Origin", "*")
    db.query(sql, (err, field) => {
        if (err)throw err
        let result = [];
       for (let i = 0; i < field.length; i++){
        result[i] = field[i].nama;
       }
       res.json(result);
       return result;
    })
})

app.get('/tenor_2', (req, res) => {
    const sql = `SELECT * FROM singers_kicc WHERE suara = "tenor_2"`
    res.header("Access-Control-Allow-Origin", "*")
    db.query(sql, (err, field) => {
        if (err)throw err
        let result = [];
       for (let i = 0; i < field.length; i++){
        result[i] = field[i].nama;
       }
       res.json(result);
       return result;
    })
})

app.get('/bass_1', (req, res) => {
    const sql = `SELECT * FROM singers_kicc WHERE suara = "bass_1"`
    res.header("Access-Control-Allow-Origin", "*")
    db.query(sql, (err, field) => {
        let result = [];
        if (err)throw err
       for (let i = 0; i < field.length; i++){
        result[i] = field[i].nama;
       }
       res.json(result);
    })
})

app.get('/bass_2', (req, res) => {
    const sql = `SELECT * FROM singers_kicc WHERE suara = "bass_2"`
    res.header("Access-Control-Allow-Origin", "*")
    db.query(sql, (err, field) => {
        if (err)throw err
        let result = [];
       for (let i = 0; i < field.length; i++){
        result[i] = field[i].nama;
       }
       res.json(result);
       return result;
    })
})

app.post('/', express.json(), (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    const cek = `SELECT * FROM data_absensi`
    db.query(cek, (err, field) => {
        if (err) throw err;
        let flag = 0;
        for(let i = 0;  i < field.length; i++){
            if(field[i].nama == req.body.nama){
                flag = 1;
                break;  
            } else {
                flag = 0;
            }
        }

        if (flag == 1) {
            const response = {
                status: "failed",
                message: "Anda sudah melakukan Presensi"
            } 
            // console.log(response)
            return res.json(response)
            
        } else if (flag == 0) {

            const id = null;
            const waktu_absen = new Date();
            const waktu_absen_converted = waktu_absen.toLocaleTimeString();
            const waktu_telat = null;
            
            const values = [id, req.body.nama, waktu_absen_converted, waktu_telat]
            // console.log(waktu_absen_converted)
            const sql = "INSERT INTO data_absensi(`id`, `nama`, `waktu_absen`, `waktu_telat`) VALUES (?)"
            db.query(sql, [values], (err, field) => {
                if(err) throw err
                res.status(res.statusCode).json({
                    status: "success",
                    data: {
                        values
                    }
                })
            })
        }

    })

   
})


app.get('/', (req, res) => {
    const sql = `SELECT * FROM data_absensi`
    res.header("Access-Control-Allow-Origin", "*")
    db.query(sql, (err, field) => {
        if (err)throw err
        let result = [];
        for (let i = 0; i < field.length; i++){
            result[i] = field[i];
        }
        res.json(result);
        return result;
    })
})



app.listen(port, () => {
    console.log('listening on port ' + port)
})
