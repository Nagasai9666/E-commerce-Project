// // import { useNavigate } from "react-router-dom";
// /*
// arrayName.map(value, index) =>(
//     <div key={value or index of any value}>
//     </div>
// )
// */
// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// function Products() {    
//     const [products,setProducts] = useState ([
//         {
//             name: 'APPLE iPhone 14 (Blue, 128 GB)',
//             imgsrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70',
//             price: '12900',
//             iscart: false,
//             specifications: [
//                 '4.62,55,131 Ratings & 9,864 Reviews',
//                 '128 GB ROM',
//                 '15.49 cm (6.1 inch) Super Retina XDR Display',
//                 '12MP + 12MP | 12MP Front Camera',
//                 'A15 Bionic Chip, 6 Core Processor Processor',
//                 '1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories'
//             ],
//             thumnails:[
//                 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/v/4/9/-original-imagg2abgspv4shz.jpeg?q=70',
//                 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/d/x/r/-original-imagg2abn7zdrf4y.jpeg?q=70',
//                 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/d/x/r/-original-imagg2abn7zdrf4y.jpeg?q=70',
//                 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/8/g/v/-original-imagg2abtmhwsgpm.jpeg?q=70'

//             ]

//         },
//         {
//             name: 'vivo T2x 5G (Glimmer Black, 128 GB)',
//             imgsrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/h/e/-original-imagzjhwmsamexfk.jpeg?q=70',
//             price: '15000',
//             iscart: false,
//             specifications: [
//                 '4.41,41,386 Ratings & 7,502 Reviews',
//                 '128 GB ROM',
//                 '16.71 cm (6.58 inch) Full HD+ Display',
//                 '50MP + 2MP | 8MP Front Camera',
//                 '5000 mAh Battery',
//                 'Dimensity 6020 Processor'
//             ],
//             thumnails:[
//                 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/v/4/9/-original-imagg2abgspv4shz.jpeg?q=70',
//                 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/d/x/r/-original-imagg2abn7zdrf4y.jpeg?q=70',
//                 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/d/x/r/-original-imagg2abn7zdrf4y.jpeg?q=70',
//                 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/8/g/v/-original-imagg2abtmhwsgpm.jpeg?q=70'

//             ]
//         },
//         {
//             name: 'APPLE iPhone 14 (Starlight, 128 GB)',
//             imgsrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70',
//             price: '40000',
//             iscart: false,
//             specifications: [
//                 '4.41,41,386 Ratings & 7,502 Reviews',
//                 '128 GB ROM',
//                 '16.71 cm (6.58 inch) Full HD+ Display',
//                 '50MP + 2MP | 8MP Front Camera',
//                 '5000 mAh Battery',
//                 'Dimensity 6020 Processor'

//             ],
//             thumnails:[
//                 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/v/4/9/-original-imagg2abgspv4shz.jpeg?q=70',
//                 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/d/x/r/-original-imagg2abn7zdrf4y.jpeg?q=70',
//                 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/d/x/r/-original-imagg2abn7zdrf4y.jpeg?q=70',
//                 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/8/g/v/-original-imagg2abtmhwsgpm.jpeg?q=70'

//             ]

//         }
//     ]);
//     let cartProducts  =[];
//     const navigate   = useNavigate(); 
//     useEffect(()=> {
//         if(localStorage.getItem('cart')){
//             cartProducts=JSON.parse(localStorage.getItem('cart'));
//              const temp = products.map(product=>{
//                 const isexist =cartProducts.find(cproducts=> product.name===cproducts.name);
//                 if(isexist){
//                     product.iscart=true;
//                     return product;
//                 }
//                 return product;
//             }); 
//             setProducts(temp);
//         }
//     },[])
//     const addtocart = (index) => { 
//         console.log('add prodution...  ', index);
//         cartProducts=[...cartProducts,products[index]];
//         localStorage.setItem('cart', JSON.stringify(cartProducts));
//         navigate('/cart');        
//     }; 
//     const gotocart  =(index) =>{
//         navigate('/cart');
//     return (
//         <div className="container mt-5">
//             <div className="row">
//                 <div className="col-sm">
//                     {products.map((product, index) => (
//                         <div className="row mb-5">
//                             <div className="col-sm-2" key={product.name}>
//                                 <img src={product.imgsrc} className="img-fluid" alt={product.name}></img>
//                             </div>
//                             <div className="col-sm-6" >
//                                 <h3><Link to={`/productdetails/${product.name}?productName=${product.name}&price=${product.price}`}>{product.name}</Link></h3>
//                                 <ul>
//                                     {product.specifications.map((specification, index) => (
//                                         <li key={specification}>{specification}</li>
//                                     ))}
//                                 </ul>
//                             </div>
//                             <div className="col-sm-2">
//                                 <h3><Link to={`/product-details`}>{product.price}</Link></h3>
//                                  {product.iscart ?
//                                     (<button className="btn btn-success" onClick={() =>gotocart(index)}>Go to cart</button>) :
//                                     (<button className="btn btn-primary " onClick={() => addtocart(index)}>Add to cart</button>)} 
//                             </div>
//                         </div>

//                     ))}
//                 </div>

//             </div>

//         </div>

//     );
// };
// };
// export default Products

import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Products() {
    const [products, setProducts] = useState([
        {
            name: 'vivo T2x 5G (Marine Blue, 128 GB)',
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/u/n/-original-imagzjhwtfthcmzz.jpeg?q=70',
            price: 12999,
            specifications: [
                '6 GB RAM | 128 GB ROM',
                '16.71 cm (6.58 inch) Full HD+ Display',
                '50MP + 2MP | 8MP Front Camera',
                '5000 mAh Battery',
                'Dimensity 6020 Processor',
                '1 Year of Device & 6 Months for Inbox Accessories'
            ],
            thumbnailImages: [
                'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/u/n/-original-imagzjhwtfthcmzz.jpeg?q=70'
            ],
            inCart: false
        },
        {
            name: 'APPLE iPhone 14 (Blue, 128 GB)',
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70',
            price: 58999,
            specifications: [
                '6 GB RAM | 128 GB ROM',
                '16.71 cm (6.58 inch) Full HD+ Display',
                '50MP + 2MP | 8MP Front Camera',
                '5000 mAh Battery',
                'Dimensity 6020 Processor',
                '1 Year of Device & 6 Months for Inbox Accessories'
            ],
            thumbnailImages: [
                'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70'
            ],
            inCart: false
        },
        {
            name: 'OnePlus Nord CE 2 Lite 5G (Blue Tide, 128 GB)',
            imgSrc: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70',
            price: 17159,
            specifications: [
                '6 GB RAM | 128 GB ROM',
                '16.71 cm (6.58 inch) Full HD+ Display',
                '50MP + 2MP | 8MP Front Camera',
                '5000 mAh Battery',
                'Dimensity 6020 Processor',
                '1 Year of Device & 6 Months for Inbox Accessories'
            ],
            thumbnailImages: [
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/d/x/r/-original-imagg2abn7zdrf4y.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/c/f/-original-imagg2abpjwyyvqg.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/g/v/-original-imagg2abtmhwsgpm.jpeg?q=70'
            ],
            inCart: false
        },
        {
            name: 'SAMSUNG Galaxy F14 5G (OMG Black, 128 GB)',
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/8/k/-original-imagtyxcgmgvtm7y.jpeg?q=70',
            price: 12490,
            specifications: [
                '6 GB RAM | 128 GB ROM',
                '16.71 cm (6.58 inch) Full HD+ Display',
                '50MP + 2MP | 8MP Front Camera',
                '5000 mAh Battery',
                'Dimensity 6020 Processor',
                '1 Year of Device & 6 Months for Inbox Accessories'
            ],
            thumbnailImages: [
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/r/8/k/-original-imagtyxcgmgvtm7y.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/q/b/t/-original-imagtywahysgub6f.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/6/3/-original-imagtyxbqmzcyjcz.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/t/f/a/-original-imagtyxbz7krqgn4.jpeg?q=70'
            ],
            inCart: false
        }
    ]);
    let cartProducts = [];
    const [filteredproducts,setFilteredproducts]=useState([])
    const [searchquery,setSearchquery]=useState('');
    const input = useRef();
    const navigate = useNavigate();
    // let timer;

    useEffect(() => {
        setFilteredproducts(products);
        if (localStorage.getItem('cart')) {
           const cartProducts = JSON.parse(localStorage.getItem('cart'));
            const temp = products.map(product => {
                const isExist = cartProducts.find(cProduct => product.name === cProduct.name);
                if (isExist) {
                    product.inCart = true;
                    return product;
                }
                return product;
            });
            setProducts(temp);
        }
    }, []);
    useEffect(()=>{
        console.log(input.current.value);
      const timer = setTimeout(() => {
            const _filteredproducts = products.filter(product=>product.name.toLowerCase().includes(searchquery.toLowerCase()));
        setFilteredproducts(_filteredproducts);
        }, 1500 );
        return ()=>{
            clearTimeout(timer)
        }
    },[searchquery]);
    const addToCart = (index) => {
        if (localStorage.getItem('cart')) {
            cartProducts = JSON.parse(localStorage.getItem('cart'));
        }
        cartProducts = [...cartProducts, { ...products[index], quantity: 1, cartprice:products[index].price}];
        localStorage.setItem('cart', JSON.stringify(cartProducts));
        navigate('/cart');
    };
    const goToCart = () => {
        navigate('/cart');
    };
    return (
        <div className="container">
            <div className='row'>
                <div className='col-sm-6 mx-auto'>
                    <div className='pt-4 mb-2'>
                        <input type='text' class="form-control" id="searchquery" ref={input} placeholder='searchquery.......' onChange={(event)=>setSearchquery(event.target.value)}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    {filteredproducts.map((product, index) => (
                        <div className="row my-4 py-4 border-bottom" key={product.name}>
                            <div className="col-sm-3 px-5">
                                <img src={product.imgSrc} className="img-fluid" alt={product.name} />
                            </div>
                            <div className="col-sm-6">
                                <h3><Link to={`/product-details/${product.name}?productName=${product.name}&price=${product.price}`} style={{ textDecoration: 'none' }} className="text-success">{product.name}</Link></h3>
                                <ul>
                                    {product.specifications.map((specification) => (
                                        <li key={specification}>{specification}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-sm-3">
                                <h3>{product.price}</h3>
                                {product.inCart ? (
                                    <button className="btn btn-success" onClick={() => goToCart()}>Go to Cart</button>
                                ) : (
                                    <button className="btn btn-primary" onClick={() => addToCart(index)}>Add to Cart</button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products;