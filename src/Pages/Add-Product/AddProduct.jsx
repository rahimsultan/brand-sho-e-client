import React from 'react'
import toast from 'react-hot-toast'
import InputField from '../../Components/InputFeild/InputField'
import useAuth from '../../Hooks/useAuth'

const addInfo =[
    
    {
        name:'image',
        placeholder : 'enter image url'
    },
    {
        name:'name',
        placeholder : 'enter product name'
    },
    {
        name:'brand',
        placeholder : 'enter brand name',
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

    const {user} = useAuth()

    const handleAddProduct=(e)=>{
        e.preventDefault()
        const form = e.target;

        const image = form.image.value
        const name = form.name.value
        const brand = form.brand.value
        const category = form.category.value;
        const price = form.price.value
        const description = form.shortDes.value
        const rating = form.rating.value

        const prodInfo ={photo:image,title:name,brand,price,description,rating, category}

        console.log(prodInfo);
        fetch('https://assignment-server-sigma.vercel.app/products',{
            method:"POST",
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(prodInfo)
        })
        .then(res=>res.json())
        .then(data=> {
            if(data.insertedId){
                toast.success('product added')
                // form.reset()
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