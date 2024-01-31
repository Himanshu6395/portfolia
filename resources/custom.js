//Google Sheet connect code
var scriptURL = "https://script.google.com/macros/s/AKfycby96gYDGvYRrekiAFGV-_QS8-XpK1bbW8NMxgPYwqDtQzoSgVHBohCxfy4CEc8hy9Y/exec";
var form = document.forms['google-sheet'];
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
  .catch(error => alert("Something went wrong!"))
});

//scroll to top
$("#top-button").click(
    function(){
        window.scrollTo(0,0);
    }
);

AOS.init();