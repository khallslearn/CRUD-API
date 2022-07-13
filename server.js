const { request } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
  'kendrick':{
   'age': 35,
   'birthName': 'Kung-fu',
   'birthLocation': "Los  Angelos "
  },
  'tupac':{
   'age': 80,
   'birthName': 'Pac',
   'birthLocation': "Brooklyn"
  },
  'glover':{
   'age': 37,
   'birthName': 'Gambino',
   'birthLocation': "CaliforniaS"
  },
  'unknown':{
   'age': unknown,
   'birthName': 'unknown',
   'birthLocation': "unknown"
  }
  
}


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

  app.get('/api/:name', (req, res) => {
    const rapperName = req.params.name.toLowerCase()
    if(rappers[rapperName]){
      res.json(rappers[rapperName]).birthName
    }else{
      res.json(rappers['unknown'])
    }
  }) 

app.listen(process.env.PORT || PORT , () =>{
    console.log(`The server is running on ${PORT}`)
})