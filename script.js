//no_no_no_mr.robocotik_you_don't_hochesh_to_use_gotovii_codik
//you_have_to_napisat_the_code_sam

let jokescontainer=document.getElementById('jokes_container');
let currentlength=0;

const xhr=new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3000/jokes');
xhr.responseType='json';
xhr.send();
xhr.onload=()=>{
    const jokes=xhr.response;
    if(jokes.length){
        jokescontainer.innerHTML='';
        jokes.forEach(joke => {
            jokescontainer.innerHTML+=getjokeshtml(joke);
        });
        currentlength=jokes.length;
    }
};


function getjokeshtml(joke){
    return `
    <div class="joke" id="${joke.id}">
        <div class="joke__content">
            ${joke.content}
        </div>
        <div class="joke__footer">
            <div class="joke__likes joke_like">
                <span>${joke.likes}</span>
                <button class="joke__btn">
                    <span class="material-symbols-outlined">
                        thumb_up
                    </span>
                </button>
            </div>
            <div class="joke__likes joke_dislike">
                <span>${joke.dislikes}</span>
                <button class="joke__btn">
                    <span class="material-symbols-outlined">
                        thumb_down
                    </span>
                </button>
            </div>

        </div>
    </div>`;
}