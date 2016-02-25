self.addEventListener('fetch', function(event) {
  console.log(event);
  event.respondWith(
    new Response('Service worker served response')
  )
});
