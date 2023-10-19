
function InputField({info}) {
    const {name, placeholder, type} = info
    // console.log(info);
  return (
    <div className="max-w-full mb-2">
      <input
        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type={type? type : 'text'}
        name={name}
        placeholder={placeholder}
      ></input>
    </div>
  )
}

export default InputField;