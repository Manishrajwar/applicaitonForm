import Input from "./Common/Input";

const Data = [
    {
        title:"Number :",
    },
    {
        title:"Data of Issue :"
    },{
        title:"Date of Expiry :"
    } ,
    {
        title:"Place Issue :"
    }
]

function PassportDetails(){
    return (
        <div className="mt-5">
         <table className='w-full '>
        <thead>
            <tr className="border-2 text-white text-left">
         <th>Passport Details:</th>
            </tr>
        </thead>

        <tbody>
        {
                    Data.map((data ,index)=>(
                        <tr key={index}>
                        <td className=" border-2 w-[33%]">{data.title}</td>
                        <td className="w-[33%] border-2 "> <Input width={'w-full'} type={"text"}  /> </td>
                    </tr> 
                    ))
                }
            
        </tbody>

      </table>
        </div>
    )
}

export default PassportDetails;