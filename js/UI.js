class UI{
    addToCart(postInfo,tbody,getFromLS){
    
            const row=document.createElement('tr')
            row.innerHTML=`
                <tr>
                    <td>
                        <img src="${postInfo.image}">
                    </td>
                    <td>${postInfo.title}</td>
                    <td>${postInfo.price}</td>
                    <td>
                        <a href="#" class="remove" data-id=${postInfo.id}>X</a>
                    </td>
                </tr>
            `
            tbody.appendChild(row)

            this.addToTotal(getFromLS);
            

        }

    addToTotal(getFromLS){
        let totalPrice_tag=document.querySelector('#total-price')
        let tfoot=document.querySelector('tfoot')
        tfoot.style.display='block'
        if(getFromLS.length!==0){
            getFromLS.forEach(postInfo => {
                let price=postInfo.price
                if(price.length===13){
                let priceSliced=price.slice(0,8)
                let priceSlicedReplaced=priceSliced.replace(',' , '')
                let persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"]
                const p2e = s => s.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
                let exchangedNumber=p2e(priceSlicedReplaced)
                let numbericPrice=Number(exchangedNumber)
                if(totalPrice_tag.innerHTML===''){
                    totalPrice_tag.innerHTML=numbericPrice
                }
                else{
                    let numbericTotal=Number(totalPrice_tag.innerHTML)
                    numbericTotal+=numbericPrice
                    totalPrice_tag.innerHTML=numbericTotal
                }
                }else if(price.length===12){
                    let priceSliced=price.slice(0,7)
                    let priceSlicedReplaced=priceSliced.replace(',' , '')
                    let persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"]
                    const p2e = s => s.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
                    let exchangedNumber=p2e(priceSlicedReplaced)
                    let numbericPrice=Number(exchangedNumber)
                    if(totalPrice_tag.innerHTML===''){
                        totalPrice_tag.innerHTML=numbericPrice
                    }
                    else{
                        let numbericTotal=Number(totalPrice_tag.innerHTML)
                        numbericTotal+=numbericPrice
                        totalPrice_tag.innerHTML=numbericTotal
                    }
                }

                });
            }
        
        
    }

    removeFromTotal(getFromLS,post){
        if(getFromLS.length==0){
            let tfoot=document.querySelector('tfoot')
            tfoot.style.display='none'
            let totalPrice_tag=document.querySelector('#total-price')
            totalPrice_tag.innerHTML=''
        }else{
            let totalPrice_tag=document.querySelector('#total-price')

            let price=post.querySelectorAll('td')[2].innerHTML
            if(price.length===13){
                let priceSliced=price.slice(0,8)
                let priceSlicedReplaced=priceSliced.replace(',' , '')
                let persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"]
                const p2e = s => s.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
                let exchangedNumber=p2e(priceSlicedReplaced)
                let numbericPrice=Number(exchangedNumber)

                let numbericTotal=Number(totalPrice_tag.innerHTML)
                numbericTotal-=numbericPrice
                totalPrice_tag.innerHTML=numbericTotal
                
                }else if(price.length===12){
                    let priceSliced=price.slice(0,7)
                    let priceSlicedReplaced=priceSliced.replace(',' , '')
                    let persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"]
                    const p2e = s => s.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
                    let exchangedNumber=p2e(priceSlicedReplaced)
                    let numbericPrice=Number(exchangedNumber)

                    let numbericTotal=Number(totalPrice_tag.innerHTML)
                    numbericTotal-=numbericPrice
                    totalPrice_tag.innerHTML=numbericTotal
                    
        }
    }
    }

    removeAll(tbody){
        const tr_array=tbody.querySelectorAll("tr")
        tr_array.forEach(tr => {
            tr.remove()
        });
        
    }
    localStorageOnLoad(getFromLS,tbody){
        if(getFromLS.length!=0){
            let tfoot=document.querySelector('tfoot')
            tfoot.style.display='block'
        }
        getFromLS.forEach(postInfo => {
            const row=document.createElement('tr')
            row.innerHTML=`
                <tr>
                    <td>
                        <img src="${postInfo.image}">
                    </td>
                    <td>${postInfo.title}</td>
                    <td>${postInfo.price}</td>
                    <td>
                        <a href="#" class="remove" data-id=${postInfo.id}>X</a>
                    </td>
                </tr>
            `
            tbody.appendChild(row)

            let totalPrice_tag=document.querySelector('#total-price')

            let price=postInfo.price
                if(price.length===13){
                let priceSliced=price.slice(0,8)
                let priceSlicedReplaced=priceSliced.replace(',' , '')
                let persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"]
                const p2e = s => s.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
                let exchangedNumber=p2e(priceSlicedReplaced)
                let numbericPrice=Number(exchangedNumber)
                if(totalPrice_tag.innerHTML===''){
                    totalPrice_tag.innerHTML=numbericPrice
                }
                else{
                    let numbericTotal=Number(totalPrice_tag.innerHTML)
                    numbericTotal+=numbericPrice
                    totalPrice_tag.innerHTML=numbericTotal
                }
            }else if(price.length===12){
                let priceSliced=price.slice(0,7)
                let priceSlicedReplaced=priceSliced.replace(',' , '')
                let persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"]
                const p2e = s => s.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
                let exchangedNumber=p2e(priceSlicedReplaced)
                let numbericPrice=Number(exchangedNumber)
                if(totalPrice_tag.innerHTML===''){
                    totalPrice_tag.innerHTML=numbericPrice
                }
                else{
                    let numbericTotal=Number(totalPrice_tag.innerHTML)
                    numbericTotal+=numbericPrice
                    totalPrice_tag.innerHTML=numbericTotal
                }
            }
        });
    }
}