const api = require('../../../api')

const mapObj = (obj) => {
  return {
    cotacoes: Object.values(obj)
  }  
}

const Index = async (req, res) => {
  
  try {
    const {data} = await api.get('/all')
    const prepareData = mapObj(data)
    res.json(prepareData)
  }
  catch(error) {
    res.status(500).json({error: error.message})
  }  
  
}

module.exports = {Index}