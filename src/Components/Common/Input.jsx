function Input({type="text" ,name , placeholder , isBorder ,width}){
    return (
        <div className="w-full">
             <input type={type} name={name} placeholder={placeholder} className={`${isBorder?('border-b-2'):('')} ${width} border-white bg-transparent outline-none`}  />
        </div>
    )
}

export default Input;