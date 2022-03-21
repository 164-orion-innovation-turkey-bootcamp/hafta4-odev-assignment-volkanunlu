module.exports = function() {
    return {

        //ürünlerimize dair değerleri girdik.
        products : 
        [
        {id:1, name:"Iphone 4", price:1000, imageUrl:'0.jpg', decription: 'güzel', category:'telefon'},
        {id:1, name:"Iphone 4s", price:1200, imageUrl:'1.jpg', decription: 'güzel',category:'telefon'},
        {id:2, name:"Iphone 5", price:1500, imageUrl:'2.jpg', decription: 'güzel',category:'telefon'},
        {id:3, name:"Iphone 5s", price:2000, imageUrl:'3.jpg', decription: 'güzel',category:'telefon'},
        {id:4, name:"Iphone 6", price:2500, imageUrl:'4.jpg', decription: 'güzel',category:'telefon'}
        
    ],

        categories: [
            {id: 1 ,name:"Telefon"},
            {id: 2 , name : "Bilgisayar"},      //kategorileri dizayn ettiğimiz bölüm.
            {id: 3, name:"Elektronik"}
        ],

        orders:[]


    }

}