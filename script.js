console.log('this is drag');

const imgBox = document.querySelector('.imgBox');

const whiteBoxes = document.getElementsByClassName('whiteBox');

imgBox.addEventListener('dragstart', (e) => {
  console.log('dragstart triggered ');
  e.target.className += ' hold';
  setTimeout(() => {
    e.target.className = 'hide';
  }, 0);



});


imgBox.addEventListener('dragend', (e) => {
  console.log('dragend triggered');
   e.target.className = 'imgBox';
});

for (whiteBox of whiteBoxes) {
whiteBox.addEventListener('dragover', (e) => {
  e.preventDefault();
  console.log('dragover triggered')
});

whiteBox.addEventListener('dragenter', (e) => {
console.log('dragenter triggered');
e.target.className += ' dashed';
})

whiteBox.addEventListener('dragleave' , (e) => {
  console.log('leave triggered');
  e.target.className = 'whiteBox'
})

whiteBox.addEventListener('drop', (e) => {
  console.log('drop triggered');
  e.target.append(imgBox)
})
}

