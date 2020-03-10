export function render ( criteria ) {
    let isFeedback = false;
    let toClipBoard = '';
    const feedback = document.querySelector( '.feedback button' );
    const info = document.querySelector( '.info' );
    const scoreboard = document.querySelector( '.score-board' );
    const filteredCriteria = criteria.filter( item => !item.title );

    feedback.addEventListener( 'click', function ( e ) {
        e.preventDefault();
        getFeedback( filteredCriteria );
    } )

    let total = 100;
    const renderList = [];
    criteria.forEach( ( el, i ) => {
        el.status === "main" ? renderCriterion( el, i, true ) : renderCriterion( el, i );
    } );
    const domList = document.createElement( 'form' );
    renderList.forEach( el => domList.appendChild( el ) );

    document.querySelector( '.criteria-list' ).appendChild( domList );

    const reset = document.querySelector( '.reset' );
    reset.addEventListener( 'click', e => {
        total = 100;
        isFeedback = false;
        filteredCriteria.map( item => item.checked = false );
        document.querySelectorAll( "[data-active=false]" ).forEach( el => {
            el.dataset.active = "true";
            el.querySelector('input').checked = false;
        } );
        document.querySelectorAll( "[data-active=true]" ).forEach( el => {
            el.querySelector('input').checked = false;
        } );
        scoreboard.innerHTML = 100;
        reset.classList.add( 'hidden' );
        info.classList.remove( 'visible' );
    } );

    domList.addEventListener( 'click', e => {
        const parent = e.target.parentElement.parentElement;
        const id = e.target.getAttribute( "id" );

        if ( e.target.tagName === "INPUT" && parent.dataset.active == "false" ) {
            parent.dataset.active = "true"
            e.preventDefault();
        } else if ( e.target.tagName === "INPUT" ) {
            if ( e.target.checked ) {
                total += parseInt( e.target.dataset.mod );
                filteredCriteria[id].checked = true;
                parent.dataset.active = "false";
            } else {
                total += -1 * parseInt( e.target.dataset.mod );
                filteredCriteria[id].checked = false;
            }
            if ( e.target.dataset.type === "main" ) {

                if ( e.target.checked ) parent.dataset.active = "false";
                filteredCriteria[0].checked = e.target.checked;
            }


            if ( total <= 0 ) {
                scoreboard.innerHTML = 0;
                getFeedback( filteredCriteria );
            } else {
                scoreboard.innerHTML = total;
            }

            // if click while modal opened then re-render it
            isFeedback && getFeedback( filteredCriteria );

        } else if ( e.target.tagName === "INPUT" ) {
            e.preventDefault();
        }
        if ( total < 100 ) reset.classList.remove( 'hidden' );
        else reset.classList.add( 'hidden' );

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

            const input = document.createElement( 'input' );
            input.dataset.type = flag ? "main" : "regular";
            input.setAttribute( "type", "checkbox" );
            input.setAttribute( "id", el.id );
            el.i && input.setAttribute( "title", el.i );
            el.i && input.classList.add( "information" );
            input.dataset.mod = el.mod;

            const label = document.createElement( 'Label' );
            label.setAttribute( "for", el.id );
            label.innerHTML = el.text;
            label.appendChild( input );
            parentDiv.appendChild( label );
        }
        renderList.push( parentDiv );
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
        });
        header.appendChild( close );
        let list = [];

        if ( filteredCriteria[0].checked ) {
            list[0] = filteredCriteria[0];
        } else {
            list = filteredCriteria.filter( item => item.checked === true );
        }

        if ( list.length ) {
            let points = total % 10 > 1 && total % 10 <= 4 ? "балла" : "баллов";
            content.innerHTML += `<p><strong>Ваша оценка - ${total >= 0 ? total : 0} ${points}</strong> \r\n</p><p>Отзыв по пунктам ТЗ:\r\n</p>`;
            list.map( (item, i) => {
                let strNum = item.mod + '';
                let points = strNum[strNum.length - 1] > 1 && strNum[strNum.length - 1] <= 4 ? "балла" : "баллов";
                content.innerHTML += `<p>${i+1}) ${item.text}: минус ${strNum} ${points} \r\n</p>`;
            } );
            toClipBoard = content.innerText;
        } else {
            info.innerHTML += '<p>' + ( total == 100 ? conrgats : '' ) + '</p><p class="congrats" style="text-align: center">У вас нет ни одной ошибки! Ваша оценка 100. Поздравляю</p>';
            toClipBoard = "У вас нет ни одной ошибки! Ваша оценка 100. Поздравляю";
        }
        info.appendChild( header );
        info.appendChild( content );
        info.classList.add( "visible" );
        isFeedback = true;
    }
    window.copyToClipboard = (e) => {
        e.preventDefault();
        e.target.classList.add("not-link");
        e.target.innerText = "Скопировано!"
        setTimeout(() => {
            e.target.classList.remove("not-link");
            e.target.innerText = "Скопировать в буфер"
        },1000);
        const el = document.createElement('textarea');
        el.value = toClipBoard;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      };
}