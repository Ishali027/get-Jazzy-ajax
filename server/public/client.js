$(document).ready(onReady);

function onReady() {
    // this function is letting us pull the information of artists 
    // and letting us manipulate it
    // we then make a function to loop through the array  
    // we then append table data into the table body and show it 
    //on the DOM
    $.ajax({
        type: 'GET',
        url: '/artist'
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            let artist = response[i];
            $('#artistTableBody').append(`
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `);
        }
    });

    // TODO Add ajax request for /songs and display on DOM
    $.ajax({
        type: 'GET', 
        url:  '/songs'
    }).then(function (response){
        for (let i = 0; i<response.length; i++){
            let song = response[i];
            $('#songTableBody').append(`
            <tr>
            <td>${song.title}</td>
            <td>${song.artist}</td>
        </tr>
            `)
        }
    })




}