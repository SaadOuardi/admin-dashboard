let companyContainer = document.getElementById('div__company');
let notificationBar = document.querySelectorAll('.div__notif-icon');
let navbarName = document.querySelectorAll('span');
let hideNavbar = document.getElementById('hide-navbar');
let ShowNavbar = document.getElementById('show-navbar');


hideNavbar.addEventListener('click',()=>{
    companyContainer.style.display = 'none';
    hideNavbar.style.display = 'none';

    navbarName.forEach( navbarname => {
        navbarname.style.display = 'none';
    });
    notificationBar.forEach( notificationbar => {
        notificationbar.style.display = 'none';
    });

    ShowNavbar.style.display = 'block';
    
});

ShowNavbar.addEventListener('click',()=>{
    companyContainer.style.display = 'flex';
    hideNavbar.style.display = 'block';

    navbarName.forEach( navbarname => {
        navbarname.style.display = 'flex';
    });
    notificationBar.forEach( notificationbar => {
        notificationbar.style.display = 'flex';
    });

    ShowNavbar.style.display = 'none';
    
});


// let Navbar = document.getElementById('main__sidebar');
// let showNavbar = document.getElementById('show-navbar');
// let hideNavbar = document.getElementById('hide-navbar');

// Navbar.style.display = 'none';

// showNavbar.addEventListener('click',()=>{
//     Navbar.style.display = 'block';
//     showNavbar.style.display = 'none';
// });
// hideNavbar.addEventListener('click',()=>{
//     showNavbar.style.display = 'block';
//     Navbar.style.display = 'none';
// });

















// ----------------- SIDEBAR NOTIFICATION ----------------- //

// GET ALL ELEMENTS WITH CLASS : 'notification-number'
let notification = document.querySelectorAll('.notification-number');
// notification.forEach( function(element){
//     if(element.value>0){
//         console.log(`You have ${element.value} notifications`);
//     }else{
//         console.log(`No notifications`);
//     } 
// });


// SET UP NOTIFICATION NUMBER
const notification_number = 15;

// LET ALL ELEMENTS TO HAVE THE NOTIFICATION NUMBER
notification.forEach( function(element){
    element.textContent = notification_number;
});
