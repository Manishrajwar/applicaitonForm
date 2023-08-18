import Input from "./Input";

const data = [
    {
        left:"Nationality:" ,
        right:"Social Security Number (if applicable):"
    },
    {
        left:"sex:" ,
        right:"Marital Status:"
    },
    {
        left:"Nationality:" ,
        right:"Pan Card number:"
    },
    {
        left:"Date of Birth:",
        right:"Place Of Birth:"
    }
]

function InputDesign1() {
  return (
    <div>
      <div className="flex border-b-2 border-white flex-row gap-10 pl-2 min-h-[50px] items-center">
        <div className="w-[40%] flex flex-row items-center">
          <p className="w-[150px]">Father's Name:</p>
          <Input
            name={"fatherName"}
            isBorder={false}
            width={"w-full"}
            type={"text"}
          />
        </div>
        {/* line */}
        <div className="w-full h-full flex flex-row  items-center ">
          <div className="w-[2px] bg-white h-full mr-2"></div>
        </div>
      </div>


        <table className='w-full '>
        <tbody className="w-full"> 
        {
                    data.map((address ,index)=>(
                        <tr key={index} className="flex flex-row ">
                
                        <td className="border-2 w-[33%] flex lg:flex-row flex-col items-center">{address.left} 
                        <Input width={'w-full'} type={"text"}  /> </td>
                        
                        <td className="border-2 w-full flex lg:flex-row flex-col  items-center ">
                            {address.right}
                            <Input width={'w-full'} type={"text"}  />
                        </td>
                 
                    </tr> 
                    ))
                }
            
        </tbody>
      </table>


    </div>
  );
}

export default InputDesign1;
