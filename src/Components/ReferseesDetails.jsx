import Input from "./Common/Input";

const Data1 = [
    {
        title:"Name & Designation",
    },
    {
        title:"Current Company",
    },
    {
        title:"Address",
    },
    {
        title:"Contact Details",
    },
    {
        title:"No of Months Yrs Of Acquaintance",
    },

]



function ReferseesDetails(){
    return (
<div className="mt-10">
        <p className="border">REFEREES  - Please give two references of which one should necessarily be from your Present 
Work Place.

</p>
      <table className='w-full'>
        <thead className="w-full">
            
            <tr className="border text-white w-full ">
        {
            Data1.map((data ,index)=>(
                <th  className={`border`}  key={index}>
                    {data.title}
                </th>
            ))
        }
            </tr>
        </thead>

        <tbody>
        <tr>
            <td className="border"> <Input width={'w-full'} /> </td>
           
            <td className="border"> <Input width={'w-full'} /> </td>
           
            <td className="border"> <Input width={'w-full'} /> </td>
           
            <td className="border"> <Input width={'w-full'} /> </td>
           
            <td className="border"> <Input width={'w-full'} /> </td>
           
        </tr>
        <tr>
            <td className="border"> <Input width={'w-full'} /> </td>
           
            <td className="border"> <Input width={'w-full'} /> </td>
           
            <td className="border"> <Input width={'w-full'} /> </td>
           
            <td className="border"> <Input width={'w-full'} /> </td>
           
            <td className="border"> <Input width={'w-full'} /> </td>
           
        </tr>
        
        </tbody>

      </table>
        </div>
    )
}

export default ReferseesDetails;