$('.gallery').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: {
  enabled: true,
  navigateByImgClick: true,
  preload: [1,3],
  titleSrc: 'title'
}
});

$('#search').hideseek({
  attribute: 'title',
  nodata: 'Sorry! No Result!'
});