const search = () => {
    const searchbox = document.getElementById('search-item').value.toUpperCase();
    const storeItems = document.getElementById('productList')
    const product = document.querySelectorAll('.cs-item')
    const pName = document.getElementsByTagName('h3')

    for(var i=0; i < pName.length; i++){
        const match = product[i].getElementsByTagName('h3')[0];
        if(match){
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}