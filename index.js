import express from 'express'

const app = express()

app.use('/api/resgister', (req,res) => {
  res.send('Sample register endpoint')
})

app.listen(3000, () => {
  console.log('Server running on port 3000.')
})

