// $('.faq-list').click(function () {
  
//     // $(this).parent('li').toggleClass('the-active').find('.read faq-text').slideToggle();
//     console.log("hello");
// });

elems = document.getElementsByClassName("faq-list")[0];
elem = elems.getElementsByTagName("li");
Array.from(elem).forEach(element => {element.getElementsByTagName("h4")[0].addEventListener("click", (e)=>{e.target.parentElement.getElementsByTagName('p')[0].classList.toggle("faq-text")})})