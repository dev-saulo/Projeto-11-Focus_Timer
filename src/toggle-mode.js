let darkMode = true;
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light')

    /*Acessibilidade*/
    /*Se darkmode ativo então light ... se não dark */
    const mode = darkMode ? 'light' : 'dark'

    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`

    /*Troca de true or false em uma variável boolean*/
    darkMode = !darkMode
})