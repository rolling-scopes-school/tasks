export function render ( criteria ) {
    let isFeedback = false;
    let toClipBoard = '';
    let isCtrl = false;
    let totalTasks = 0;
    let done = 0;

    const checkMarks = ["не выполнено", "выполнено частично", "выполнено полностью", ];
    const penaltiesMarks = ["нет", "да"];
    const feedback = document.querySelector( '.feedback button' );
    const info = document.querySelector( '.info' );
    const scoreboard = document.querySelector( '.score-board' );
    const doneBoard = document.querySelector( '.done' );
    const totalTasksBoard = document.querySelector( '.total' );

    const filteredCriteria = criteria.map( item => !item.title ? item : null );
    totalTasks = filteredCriteria.filter( el => el ).length;
    totalTasksBoard.innerText = totalTasks;

    document.addEventListener( 'keydown', ( e ) => {
        if ( e.ctrlKey ) isCtrl = true;
    } )
    document.addEventListener( 'keyup', ( e ) => {
        if ( !e.ctrlKey ) isCtrl = false;
    } )


    feedback.addEventListener( 'click', function ( e ) {
        e.preventDefault();
        getFeedback( filteredCriteria );
    } )

    let total = 0;
    const renderList = [];
    criteria.forEach( ( el, i ) => {
        el.status === "main" ? renderCriterion( el, i, true ) : renderCriterion( el, i );
    } );
    const domList = document.createElement( 'form' );
    renderList.forEach( el => domList.appendChild( el ) );

    document.querySelector( '.criteria-list' ).appendChild( domList );

    const reset = document.querySelector( '.reset' );
    reset.addEventListener( 'click', e => {
        total = 0;
        isFeedback = false;
        filteredCriteria.map( item => {
            item && delete item.status;
            item && delete item.feedback;
        });
        document.querySelectorAll( ".checkbox-container" ).forEach( el => {
            el.dataset.active = "true";
            el.querySelectorAll( 'input' ).forEach(input => input.checked = false);
            el.querySelector('.add-feedback').innerHTML = 'Добавить отзыв';
        } );
        checkDone( 'reset' );
        scoreboard.innerHTML = 0;
        reset.classList.add( 'hidden' );
        info.classList.remove( 'visible' );
    } );

    domList.addEventListener( 'click', e => {
        const parent = e.target.parentElement;
        const id = e.target.dataset.id;

        const task = filteredCriteria[id];

        if ( e.target.tagName === "INPUT" ) {
            const radio = e.target;
            const scoreId = radio.dataset.score;
            if ( isCtrl && parent.dataset.active == "true" ) {
                parent.dataset.active = "false"
                e.preventDefault();
                return;
            } else if ( isCtrl && parent.dataset.active == "false" ) {
                parent.dataset.active = "true"
                e.preventDefault();
                return;
            } else if ( !isCtrl && parent.dataset.active != "false" ) {

                // Add subtask count
                if ( task.status == undefined ) checkDone();

                // Calculate actual Total Score
                const scores = [0, +( task.max / 2 ).toFixed( 1 ), task.max];
                if(task.status >= 0) {
                    total-= task.type !== 'penalty' ? scores[task.status] : scores[task.status] * 2;
                }
                total+= task.type !== 'penalty' ? scores[scoreId] : scores[scoreId] * 2;
                task.status = scoreId;

                scoreboard.innerHTML = total < 0 ? 0 : total;

                isFeedback && getFeedback( filteredCriteria );

            }

            if ( filteredCriteria.some( el => el && el.status !== undefined ) ) reset.classList.remove( 'hidden' )
            else reset.classList.add( 'hidden' );

        }
    } )

    function renderCriterion ( el, i, flag ) {

        const parentDiv = document.createElement( 'div' );
        if ( el.type === "title" ) {

            parentDiv.classList.add( 'title' );
            const title = document.createElement( 'h3' );
            title.innerText = el.title;
            parentDiv.appendChild( title );
        } else {
            parentDiv.classList.add( 'checkbox-container' );
            parentDiv.dataset.active = "true";

            const radioGroup = createRadioGroup(el, i, flag);

            const taskMaxScore = document.createElement('div');
            taskMaxScore.classList.add('task-max-score');
            const scoreDesc = el.type == 'penalty' ? 'Штрафные баллы' : 'Балл за выполнение';
            taskMaxScore.innerHTML =   `<span>${scoreDesc}</span><p>${el.max}</p>`
            const taskDesc = document.createElement('div');
            taskDesc.classList.add('task-description');
            taskDesc.innerHTML = `<p class='task-title'>${el.text}</p>`;

            taskDesc.innerHTML += "<a class='add-feedback' href='#' onclick='addFeedback(event);'>Добавить отзыв</a>";

            parentDiv.appendChild(taskMaxScore);
            parentDiv.appendChild(taskDesc);

            //label.innerHTML = el.text + "<a href='#' onclick='addFeedback(event);' class='add-feedback'>Add feedback</a>";
            //label.appendChild( input );
            parentDiv.appendChild( radioGroup );
            // parentDiv.appendChild( label );
        }
        renderList.push( parentDiv );
    }

    function createRadioGroup(el, id, flag) {

        const parent = document.createElement('div');
        parent.classList.add('radio-group');
        const options = el.type == 'subtask' ? [...checkMarks] : [...penaltiesMarks];
        options.map((desc, i) => {
            const input = document.createElement( 'input' );
            input.dataset.type = flag ? "main" : "regular";
            input.setAttribute( "data-id", id );
            input.setAttribute( "data-score", i );
            input.setAttribute( "name", id );
            input.setAttribute( "type", 'radio' );
            const span = document.createElement('span');
            span.classList.add('checkmark')

            const label = document.createElement( 'Label' );
            //label.setAttribute( "for", id );
            label.innerHTML = desc;
            label.appendChild(input);
            label.appendChild(span);

            parent.appendChild(label);
        });
        return parent;
    }

    function getFeedback ( filteredCriteria ) {
        info.innerHTML = '<div class="copy"><a href="#" onclick="copyToClipboard(event);">Скопировать в буфер</a></div>';
        const conrgats = "<img class='congrats' src='images/congrats.png' width='150' height='150' alt='Congratulations'>";
        const ups = "<img class='sorry' src='images/sorry.png' width='150' height='150' alt='We are sorry'>";
        const header = document.createElement( 'div' );
        header.classList.add( "header" );

        const content = document.createElement( 'div' );
        content.classList.add( "content" );

        const close = document.createElement( 'p' );
        close.classList.add( 'close' );
        close.innerHTML = "&times;";
        close.addEventListener( 'click', () => {
            info.classList.toggle( 'visible' )
            isFeedback = false;
        } );
        header.appendChild( close );
        if ( totalTasks !== done ) {
            content.innerHTML += '<p>Вы проверили не все пункты задания</p>';
        } else {
            console.log(filteredCriteria)
            let resultList = filteredCriteria.filter( item => item && item.status != undefined );
            let points = total % 10 > 1 && total % 10 <= 4 ? "балла" : "баллов";
            content.innerHTML += `<p><strong>Ваша оценка - ${total >= 0 ? total : 0} ${points}</strong> \r\n</p><p>Отзыв по пунктам ТЗ:\r\n</p>`;

            const resultDescriptions = {
                0: "Не выполненные/не засчитанные пункты:",
                1: "Частично выполненные пункты:",
                2: "Выполненные пункты:",
                "penalty": "Штрафы:"
            }
            Object.keys(resultDescriptions).forEach(desc => {
                let partialResult = [];
                if ( resultList.some( el => el.type == desc && el.status != 0 || el.type != "penalty" && el.status ==  desc) ) {
                    content.innerHTML += `<p><strong>${resultDescriptions[desc]}\r\n</strong></p>`;
                    partialResult = resultList.filter( el => el.type == desc && el.status != 0 || el.type != "penalty" && el.status == desc);
                    partialResult.map( ( item, i ) => {
                        content.innerHTML += `<p>${i + 1}) ${item.text} \r\n${item.feedback ? '<p style="background:#f1f1f1; font-style: italic; font-size: 11px; padding:5px"><strong>feedback: </strong>'+ item.feedback+'</p>' : ""}\r\n`;
                    } );
                }
            })
            toClipBoard = content.innerText;
        }
        info.appendChild( header );
        info.appendChild( content );
        info.classList.add( "visible" );
        isFeedback = true;
    }

    function checkDone ( reset ) {
        if ( !reset ) {
            done++;
        } else {
            done = 0;
        }
        doneBoard.innerText = done;
    }

    window.addFeedback = (e) => {
        e.preventDefault();
        document.querySelectorAll('.add-form').forEach(el => el.remove())
        const link = e.target;
        const id = link.closest('.checkbox-container').querySelector('input').dataset.id;

        const box = document.createElement('form');
        box.classList.add('add-form');
        const textarea = document.createElement('textarea');
        textarea.setAttribute('placeholder', 'Use Ctrl + Enter to save this feedback or ESC to cancel');
        if(filteredCriteria[id].feedback) {
            textarea.value = filteredCriteria[id].feedback;
        }
        box.appendChild(textarea);
        link.parentElement.appendChild(box);
        textarea.focus();
        textarea.select();
        box.addEventListener('keyup', (e) => {
            if(e.keyCode == 13 && isCtrl) {
                filteredCriteria[id].feedback = textarea.value;
                if(textarea.value){
                    link.innerHTML = "Изменить отзыв";
                }else{
                    delete filteredCriteria[id].feedback;
                    link.innerHTML = "Добавить отзыв";
                }

                box.remove();
            }else if(e.keyCode == 27) box.remove();
        });
    }

    window.copyToClipboard = ( e ) => {
        e.preventDefault();
        e.target.classList.add( "not-link" );
        e.target.innerText = "Скопировано!"
        setTimeout( () => {
            e.target.classList.remove( "not-link" );
            e.target.innerText = "Скопировать в буфер"
        }, 1000 );
        const el = document.createElement( 'textarea' );
        el.value = toClipBoard;
        el.setAttribute( 'readonly', '' );
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild( el );
        el.select();
        document.execCommand( 'copy' );
        document.body.removeChild( el );
    };
}