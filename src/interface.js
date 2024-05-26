export default (function(){
    const content = document.querySelector('.content')
    
    //create title
    const title = document.createElement('h1');
    title.innerHTML = 'Do App';
    content.appendChild(title);

    return content
})();
