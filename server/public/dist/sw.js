self.addEventListener('fetch', function(event) {
  console.log(event);
  event.respondWith(
    new Request('Service worker served response')
  )
});
