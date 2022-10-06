require('dotenv').config()

const {CONNECTION_STRING} = process.env;

const Sequelize = require('sequelize');

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

let muses = require(`./db.json`);
let globalID = 4;


module.exports = {
    //   getMuses: (req,res) => {
    //      console.log(res.data)
    //    res.status(200).send(muses)
    //   },

         getMuses: (req, res) => {
           sequelize.query(`SELECT a.artist_id, a.name, a.image_url, q.quote FROM artist as a JOIN quotes as q ON a.artist_id = q.artist_id LIMIT 3;`)
           .then(dbRes => res.status(200).send(dbRes[0]))
           .catch(err => console.log(err))
         },
    //   createMuse: (req,res) => {
    //     let{name, quote, imageURL} = req.body;

    //     let newMuse = {

    //         id: globalID,
    //         name, 
    //         quote,
    //         imageURL,
            
    //     }
    //     muses.push(newMuse)
    //     globalID++;
    //     res.status(200).send(muses)
    //   },

        // createMuse: (req,res) => {
        //    sequelize.query(``)
        // },
      deleteMuse: (req, res) => {
        let index = muses.findIndex(elem => elem.id === +req.params.id)
        muses.splice(index, 1)
        res.status(200).send(muses)
    },
    updateQuote: (req,res) => {
        const index = muses.findIndex(el => el.id === +req.params.id)
        let { newObj} = req.body;
        console.log(req.body)

        muses[index].quote = newObj.quote
        

        res.status(200).send(muses)

        

    }
}