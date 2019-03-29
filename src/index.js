import 'dotenv/config'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import express from 'express'
import cors from 'cors'
import { resolve } from 'path'

import { htmlTemplate } from './htmlTemplate'
import App from './components/app'

const app = express() // Create express app
app.use('/assets', express.static(resolve(__dirname, '../assets'))) // Serving bundled + css files
app.use('/media', express.static(resolve(__dirname, '../media'))) // Serving media files
app.disable('x-powered-by') // hide powered by express
app.use(cors())

// server rendered home page
app.get('/*', (req, res) => {
  const title = 'Innos VietNam | Software Development Company'
  const pageContent = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
  )
  const response = htmlTemplate(title, pageContent)

  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response)
})

// tiny trick to stop server during local development
app.get('/exit', (req, res) => {
  if(process.env.PORT) {
    res.send('Sorry, the server denied your request!')
  } else {
    res.send('Server is shutting down!')
    process.exit(0)
  }
})

// Start server
const PORT = process.env.PORT || 7777
app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`)
})
