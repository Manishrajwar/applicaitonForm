import Input from "./Common/Input";

const Data =[
    {

        title:"Do you have a valid VISA? If yes, please mention the type of Visa"
    },{
        title:"Are you open to Travel to the USA / Sri Lanka on work for a period of 6 months/less during a year ?"
    }
]

function VisaDetails(){
    return(
        <div className="mt-5">
     
     <table className='w-full '>
        <thead className="w-full">
            <tr className=" text-white text-right">
         <th className="lg:translate-x-[100px] translate-x-[50px]">Yes</th>
         <th className="lg:translate-x-[100px] translate-x-[50px]">No</th>
            </tr>
        </thead>

        <tbody>
        {
                    Data.map((data ,index)=>(
                        <tr key={index}>
                        <td className=" border-2 w-[70%]">{data.title}</td>
                    
                      <td className="w-[15%] border-2 "> <Input width={'w-full'} type={"text"}  /> </td>
                      <td className="w-[15%] border-2 "> <Input width={'w-full'} type={"text"}  /> </td>
                      
                    </tr> 
                    ))
                }
            
        </tbody>

      </table>
        </div>
    )
}

export default VisaDetails;