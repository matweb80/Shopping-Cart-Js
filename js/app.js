const post=new Post()
const ui=new UI()

const posts=document.querySelector('#posts')

const shoppingCartContent= document.querySelector('#cart-content tbody')

const clearAllButton=document.querySelector('#clear-cart')

eventListeners()
function eventListeners(){
    posts.addEventListener('click', (e)=>{
        e.preventDefault()
        if(e.target.classList.contains('post-buy-button')){
            const post_div=e.target.parentElement
            const postInfoObject = post.getInfoCard(post_div)
            let getFromLS=post.getInfoProductFromLocalStorage()
            ui.addToCart(postInfoObject,shoppingCartContent,getFromLS)
            

            post.addPostToLocalStorage(post_div,getFromLS)
            
        }
    })
    shoppingCartContent.addEventListener('click',(e)=>{
        e.preventDefault()
        if(e.target.classList.contains('remove')){
            e.target.parentElement.parentElement.remove()
            let getFromLS=post.getInfoProductFromLocalStorage()
            post.removeFromLocalStorage(e.target.parentElement.parentElement,getFromLS);
            
            ui.removeFromTotal(getFromLS,e.target.parentElement.parentElement)

        }
    })
    clearAllButton.addEventListener('click',(e)=>{
        e.preventDefault()
        ui.removeAll(shoppingCartContent)
        let getFromLS=post.getInfoProductFromLocalStorage()
        post.removeAllFromLocalStorage(getFromLS)
    })
    document.addEventListener('DOMContentLoaded',()=>{
        let getFromLS=post.getInfoProductFromLocalStorage()
        ui.localStorageOnLoad(getFromLS,shoppingCartContent)
    })
}



//functions