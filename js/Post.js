class Post{
    getInfoCard(post){
        const postInfo={
            image: post.querySelector("img").src,
            title: post.querySelector("h4").textContent,
            price: post.querySelector("span").textContent,
            id: post.querySelectorAll("a")[2].getAttribute("data-id")
            
        }
        return postInfo
    }
    getInfoProductFromLocalStorage(postInfo){
        let product=localStorage.getItem('product')

        if(product==null){
            product=[]
        }
        else{
            product=JSON.parse(product)
        }

        return product
    }
    addPostToLocalStorage(post,getFromLS){
        let Info={
            image: post.querySelector("img").src,
            title: post.querySelector("h4").textContent,
            price: post.querySelector("span").textContent,
            id: post.querySelectorAll("a")[2].getAttribute("data-id")
        }

        getFromLS.push(Info)

        localStorage.setItem('product',JSON.stringify(getFromLS))
    }
    removeFromLocalStorage(post,getFromLS){
        let dataId=post.querySelector('a').getAttribute('data-id')
        getFromLS.forEach((postInfo ,index)=> {
            if(postInfo.id===dataId){
                //splice post in product
                getFromLS.splice(index,1)
            }

        });
        localStorage.setItem('product',JSON.stringify(getFromLS))
    }
    removeAllFromLocalStorage(getFromLS){
        localStorage.clear()
        let tfoot=document.querySelector('tfoot')
        tfoot.style.display='none'
        //access total price tag
        let totalPrice_tag=document.querySelector('#total-price')
        totalPrice_tag.innerHTML=''
    }
}