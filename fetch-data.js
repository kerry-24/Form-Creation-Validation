/* initialize the async function*/
async function fetchUserData() {

    /* Define API url*/
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    /* select the data container element*/
    const dataContainer = document.getElementById('api-data');

    try {

        /* Fetch data inside try - catch*/
        const response = await fetch(apiUrl);
        const users = await response.json();

        /* clear the loading message*/
        dataContainer.innerHTML = "";

        /*create and append user list*/
        const userList = document.createElement('ul'); 
    
        users.forEach(user => {
            const listItem = document.createElement('li'); 
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        dataContainer.appendChild(userList);

        /*error handling*/
    } catch (error) {
        dataContainer.innerHTML = "";
        dataContainer.textContent = "Failed to load user data";
    }
}

/* Invoke fetchUserData on DOMContentLoaded*/
document.addEventListener('DOMContentLoaded', fetchUserData);


