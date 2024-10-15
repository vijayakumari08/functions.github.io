// Read
// Select Elements based on id
const selectBasedOnId=document.getElementById('selectID');
selectBasedOnId.textContent="Hello Techies";


//Create
const createTag=document.createElement('h3');
createTag.textContent="Welcome to Our Company";
selectBasedOnId.appendChild(createTag);

// Update 
createTag.style.color="blue";
createTag.style.fontSize="25px";
createTag.innerHTML=" Welcome to <span style='color:yellow'>Our</span> Company";
createTag.className='Our'
createTag.title='Our Company'
//delete
const elements = document.getElementsByClassName('selectClass')[0];
elements.remove();