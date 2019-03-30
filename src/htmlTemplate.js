export const htmlTemplate = (title, pageContent = '') =>
`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title> ${title} </title>
    <link rel='shortcut icon' type='image/x-icon' href='media/favicon.ico' />
    <link href="assets/bundle.css" rel="stylesheet">
  </head>
  <body>
    <div id="root">
      ${pageContent}
    </div>
    <script src="assets/bundle.js"> </script>
  </body>
`
