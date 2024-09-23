document.addEventListener('DOMContentLoaded', function () {
    feather.replace();
    const input = document.querySelector('#comment')
    const date = new Date();
    const icon = document.querySelector('#theme')


    const btnChange = document.querySelector('#change');
    btnChange.addEventListener('click', themeChange);

    const textarea = document.querySelector('#comment');
    textarea.addEventListener('keydown', preventEnter)

    const btnPost = document.querySelector('#post')
    btnPost.addEventListener('click', checkInput);


    function themeChange() {
        document.body.classList.toggle('light');
    }


    function preventEnter(e) {
        if (e.key === 'Enter') { e.preventDefault() }

    }

    function formatDate(date) {

    }

    function checkInput() {
        if (input.value.trim() !== '') {
            newComment(input.value)
        } else {
            console.log('campo em branco')
        }
    }

    function newComment(comment) {
        const card = document.createElement('div')

        card.classList.add('card')
        card.innerHTML = `
                <div class="card_head">
                    <img src="avatar.png" alt="avatar of a masked girl with hood">
                    <h2>Username</h2>
                    <span>
                        ${date.getFullYear()}/ 
                        ${date.getMonth() + 1}/
                        ${String(date.getDate()).padStart(2, 0)}
                    </span>
                </div>
    
                <div class="card_body">
                    <p>${comment}</p>
                </div>
    
                <div class="card_footer">
                    <i data-feather="heart" class="icon"></i>
                </div>
                `
        document.querySelector('.comments').appendChild(card)
        input.value = null;
        feather.replace()
    }
});

