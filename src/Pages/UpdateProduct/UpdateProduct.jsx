import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


const UpdateProduct = () => {
    const data = useLoaderData()
    // const {image, name, brand, category, price,rating }= data
    const {_id,photo, title, brand, category, price,rating }= data

    const handleProductUpdate=(e)=>{
        e.preventDefault()

        const form = e.target;

        const image = form.image.value
        const name = form.name.value
        const brand = form.brand.value
        const category = form.category.value;
        const price = form.price.value
        const rating = form.rating.value


        const prodInfo ={"photo":image,"title":name,brand,price,rating, category}

        fetch(`https://assignment-server-ra8m92gn1-rahimsultans-projects.vercel.app/products/${_id}`,{
            method:"PUT",
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(prodInfo)
        })
        .then(res=>res.json())
        .then(data=> {
            if(data.modifiedCount > 0){
                toast.success('Info Updated SuccessFull')
            }
            // console.log(data)
        })
    }
  return (
    <div className='max-w-7xl mx-auto lg:px-7 flex items-center justify-center px-5 md:my-20 my-5'>
        <form  onSubmit={handleProductUpdate} className='w-full text-center'>
            <div className="max-w-full mb-2">
                <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type='text'
                defaultValue={photo}
                name="image"
            ></input>
            </div>
            <div className="max-w-full mb-2">
                <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type='text'
                defaultValue={title}
                name="name"
            ></input>
            </div>
            <div className="max-w-full mb-2">
                <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type='text'
                defaultValue={brand}
                name="brand"
            ></input>
            </div>
            <div className="max-w-full mb-2">
                <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type='text'
                defaultValue={category ? category :''}
                placeholder="category name"
                name="category"
            ></input>
            </div>
            <div className="max-w-full mb-2">
                <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type='text'
                defaultValue={price}
                name="price"
            ></input>
            </div>
            <div className="max-w-full mb-2">
                <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type='text'
                defaultValue={rating}
                name="rating"
            ></input>
            </div>
            <input className='rounded-md mt-5 w-full bg-blue-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600/80 cursor-pointer' type="submit" value="Update Product" />
        </form>
    </div>
  )
}

export default UpdateProduct