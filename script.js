import {task, criteria} from "./criteria-list.js";
import {render} from './renderView.js';

window.onload = function(){
    const start = document.querySelector('.start');
    start && start.addEventListener("click", function(e) {
        e.stopPropagation();
        if(e.target.parentElement.tagName == "SECTION") e.target.parentElement.style.display = "none";
    })

    const title = document.querySelector('.title');
    title.innerText = task;
    const header = document.querySelector('header');
    const offsetTop = header.offsetTop;

    window.onscroll = () => stickyHeader();

    function stickyHeader() {
        if (window.pageYOffset > offsetTop + 100) {
            header.classList.add("sticky");
          } else {
            header.classList.remove("sticky");
          }
    }

    render(criteria);
}