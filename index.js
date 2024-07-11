/*import { blog } from 'https://raw.githubusercontent.com/evbogue/denoblog/master/blog.js'

blog({
  title: "Gwen Bell's Blog",
  avatar: './gb.jpg',
  author: 'Gwen Bell',
  description: "Writer.",
  background: "#f5f5f5",
  links: [
    { title: 'gwen@gwenbell.com', url: 'mailto:gwen@gwenbell.com'},
    { title: 'Denobook', url: 'https://denobook.com/#GBc4e5UsolZ9bABRaZkot34hWsKYwlNrdRvAETQJfOU='} 
  ]
})*/

const html = `
<!doctype html>
<html>
  <head>
    <title>Gwen Bell's website</title>
    <link rel='stylesheet' href='https://raw.githubusercontent.com/evbogue/denoblog/master/reserva.css' type='text/css'>
    <style>
      body { background: #f5f5f5; font-family: sans-serif;}
      
    </style>
  </head>
  
  <body>
    <h1>Gwen Bell</h1>
    <p>Hi! You've found Gwen Bell's website.</p><p>Contact me via email: <a
href='mailto:bellgwen42@gmail.com'>bellgwen42@gmail.com</a> or visit <a href='https://bogbook.com/#GUG82El9nFQ0ItlCMrVm5ESi6f08/iEqg1VaIKCpiNs='>my Bogbook</a>.
    </p>
    
  </body>
</html>
`

Deno.serve(r => {
  return new Response(html, {headers : {"content-type": "text/html; charset=utf-8"}})
})
