let muses = require(`./db.json`);
let globalID = 4;


module.exports = {
      getMuses: (req,res) => {
         // console.log(res.data)
       res.status(200).send(muses)
      },
      createMuse: (req,res) => {
        let{name, quote, imageURL} = req.body;

        let newMuse = {

            id: globalID,
            name, 
            quote,
            imageURL,
            
        }
        muses.push(newMuse)
        globalID++;
        res.status(200).send(muses)
      },
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