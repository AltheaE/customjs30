const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);

function handleCheck(e){
    console.log(e);
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));