var initial=[
    {
        id:1,
        name:'Iphone6',
        image:"https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
        bio:'Product is provided by Apple',
        price:'500$',
        inventory:10,
        rating:4
    },
    {
        id:2,
        name:'Iphone10',
        image:'https://didongviet.vn/pub/media/catalog/product//i/p/iphone-x-256gb-cu-den-didongviet_1_10.jpg',
        price:'2000$',
        bio:'Product is provided by Apple',
        inventory:10,
        rating:5
    },
    {
        id:3,
        name:'Oppo F1S',
        image:'https://vn-test-11.slatic.net/p/2/oppo-f1s-vang-5468-0518026-d28586b5b6103396eb9bdfd8982d6370-catalog_233.jpg_800x800Q100.jpg',
        price:'700$',
        bio:'Product is provided by Oppo',
        inventory:10,
        rating:4
    },
]

const products=(state=initial,action)=>{
    switch(action.type){
        default : return [...state]
    }
}

export default products