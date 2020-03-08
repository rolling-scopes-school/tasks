export function render(criteria) {
    const feedback = document.querySelector('.feedback button');
    const info = document.querySelector('.info');
    const scoreboard = document.querySelector('.score-board');
    const filteredCriteria = criteria.filter(item => !item.title);

    feedback.addEventListener('click', function(e){
        e.preventDefault();
        getFeedback(filteredCriteria);
    })

    let total = 100;
    const renderList = [];
    criteria.forEach((el,i) => {
        el.status === "main" ? renderCriterion(el,i,true) : renderCriterion(el,i);
    });
    const domList = document.createElement('form');
    renderList.forEach(el => domList.appendChild(el));

    document.querySelector('.criteria-list').appendChild(domList);

    const reset = document.querySelector('.reset');
    reset.addEventListener('click', e => {
        total = 100;
        filteredCriteria.map(item=>item.checked = false);
        document.querySelectorAll("[data-active=false]").forEach(el=>{
            el.dataset.active = "true";
            el.children[0].children[0].checked = false;
        });
        scoreboard.innerHTML = 100;
        reset.classList.add('hidden');
        info.classList.remove('visible');
    });

    domList.addEventListener('click', e => {
        const parent = e.target.parentElement.parentElement;
        const id = e.target.getAttribute("id");

        //close modal
        //info.classList.remove('visible');
        //if(criteria[0].checked) e.preventDefault();
        if(e.target.tagName === "INPUT" && parent.dataset.active == "false") {
            parent.dataset.active = "true"
            e.preventDefault();
        }else if(e.target.tagName === "INPUT" && parent.dataset.active != "inactive"){
            if(e.target.checked) {
                total+=parseInt(e.target.dataset.mod);
                filteredCriteria[id].checked = true;
                parent.dataset.active = "false";
            }else {
                total+= -1 * parseInt(e.target.dataset.mod);
                filteredCriteria[id].checked = false;
            }
            if( e.target.dataset.type === "main") {
            //    document.querySelectorAll("[data-active=true]").forEach(el=>el.dataset.active = "inactive");
            //    document.querySelectorAll("[data-active=false]").forEach(el=>el.dataset.active = "inactive");
               if(e.target.checked) parent.dataset.active = "false";
               //criteria.map(item=>item.checked = false);
               filteredCriteria[0].checked = e.target.checked;
            }


            if(total <= 0) {
                scoreboard.innerHTML = 0;
                getFeedback(filteredCriteria);
            }else{
                scoreboard.innerHTML = total;
            }

        }else if(e.target.tagName === "INPUT"){
            e.preventDefault();
        }
        if(total < 100) reset.classList.remove('hidden');
        else reset.classList.add('hidden');

    })

    function renderCriterion(el, i,flag) {

        const parentDiv = document.createElement('div');
        if(el.type === "title") {

            parentDiv.classList.add('title');
            const title = document.createElement('h3');
            title.innerText = el.title;
            parentDiv.appendChild(title);
        }else {
            parentDiv.classList.add('checkbox-container');
            parentDiv.dataset.active = "true";

            const input = document.createElement('input');
            input.dataset.type = flag ? "main" : "regular";
            input.setAttribute("type", "checkbox");
            input.setAttribute("id", el.id);
            el.i && input.setAttribute("title", el.i);
            el.i && input.classList.add("information");
            input.dataset.mod = el.mod;

            const label = document.createElement('Label');
            label.setAttribute("for", el.id);
            label.innerText = el.text;
            label.appendChild(input);
            parentDiv.appendChild(label);
        }
        renderList.push(parentDiv);
    }

    function getFeedback(filteredCriteria) {
        info.innerHTML = '';

        const close = document.createElement('p');
        close.classList.add('close');
        close.innerHTML = "&times;";
        close.addEventListener('click', ()=> info.classList.toggle('visible'));

        let list = [];

        if(filteredCriteria[0].checked) {
            list[0] = filteredCriteria[0];
        }else {
            list = filteredCriteria.filter(item => item.checked === true);
        }

        if(list.length){
            let points = total%10 > 1 && total%10 <=4 ? "балла" : "баллов";
            info.innerHTML += `<p><strong>Ваша оценка - ${total >= 0 ? total : 0} ${points}</strong></p><p>Отзыв по пунктам ТЗ:</p>`;
            list.map(item=>{
                let strNum = item.mod + '';
                let points = strNum[strNum.length - 1] > 1 && strNum[strNum.length - 1] <=4 ? "балла" : "баллов";
                info.innerHTML += `<p>${item.text}: минус ${strNum} ${points}</p>`;
            });
        }else{
            info.innerHTML = '<p>У вас нет ни одной ошибки! Ваша оценка 100. Поздравляю :)</p>';
        }

        info.appendChild(close);
        info.classList.add("visible");
    }


}