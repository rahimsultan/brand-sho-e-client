import React from 'react'
import InputField from '../../Components/InputFeild/InputField'

const addInfo =[
    {
        name:'email',
        placeholder : 'enter email',
        type: 'email'
    },
    {
        name:'image',
        placeholder : 'enter image url'
    },
    {
        name:'title',
        placeholder : 'enter product title'
    },
    {
        name:'category',
        placeholder : 'enter category name'
    },
    {
        name:'price',
        placeholder : 'enter price'
    },
    {
        name:'shortDes',
        placeholder : 'enter description'
    },
    {
        name:'rating',
        placeholder : 'enter rating'
    }
]

const AddProduct = () => {
    const handleAddProduct=(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const photo = form.image.value
        const title = form.title.value;
        const brand = form.category.value
        const price = form.price.value
        const description = form.shortDes.value
        const rating = form.rating.value

        const prodInfo ={email,photo,title,brand,price,description,rating}

        console.log(prodInfo);
        fetch('http://localhost:5000/products',{
            method:"POST",
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(prodInfo)
        })
        .then(res=>res.json())
        .then(data=> {
            if(data.insertedId){
                alert('product added')
            }
            console.log(data)})
    }
  return (
    <div className='max-w-7xl mx-auto lg:px-7 flex items-center justify-center px-5 md:my-20 my-5'>
        <form onSubmit={handleAddProduct} className='w-full text-center'>
            {
                addInfo.map((info, idx)=><InputField key={idx} info={info}/>)
            }
            <input className='rounded-md mt-5 w-full bg-blue-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600/80 cursor-pointer' type="submit" value="Add Product" />
        </form>
    </div>
  )
}

export default AddProduct