var images = document.getElementsByTagName("img");
for (var i = 0, l = images.length; i < l; i++) {
  images[i].src =
  "https://fakeimg.pl/" + images[i].width + "x" + images[i].height + "/" + "000000" + "/" + "?retina=1&text=BRUH&font=noto";


}
