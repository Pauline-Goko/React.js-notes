document.getElementById('form').addEventListener('submit', async function(event){
 event.preventDefault(); //prevents data from dissapearing when inputted in the placeholder


 let firstName =  document.getElementById('firstName').value;
 let lastName =  document.getElementById('lastName').value;
 let age =  document.getElementById('age').value;


 let data = {
    firstName: firstName,
    lastName: lastName,
    age: age
 }

 console.log({data});


   let result = await fetch('https://dummyjson.com/users/add', {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) })

    .then(response => response.json())  //understand what then means
    .then(response => response)
    .catch(error  => error.message)

    let success = document.getElementById('success');
    result && result.id? success.innerHTML = 'User created successfully':
    success.innerHTML = 'user not created'

    console.log({result});
})