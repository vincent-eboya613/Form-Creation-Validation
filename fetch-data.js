document.addEventListener('DOMContentLoaded', function() {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');

        try {
            // Fetching the data from the API
            const response = await fetch(apiUrl);

            // If the response is not ok it  throws an error
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Converting the response to JSON
            const users = await response.json();

            // Clear the "Loading user data..." message
            dataContainer.innerHTML = '';

            // Creating  a <ul> element to hold the user data
            const userList = document.createElement('ul');

            // Looping through the users and create <li> for each user
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Appending  the user list to the data container
            dataContainer.appendChild(userList);

        } catch (error) {
            // In case of an error here you clear the content and show an error message
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('There was an error fetching the data:', error);
        }
    }

    // Fetching the user data 
    fetchUserData();
});
