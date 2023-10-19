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
        name:'brand',
        placeholder : 'enter brand name'
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
  return (
    <div className='max-w-7xl mx-auto lg:px-7 flex items-center justify-center px-5 md:my-20 my-5'>
        <form className='w-full text-center'>
            {
                addInfo.map((info, idx)=><InputField key={idx} info={info}/>)
            }
            <input className='rounded-md mt-5 w-full bg-blue-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600/80 cursor-pointer' type="submit" value="Add Product" />
        </form>
    </div>
  )
}

export default AddProduct