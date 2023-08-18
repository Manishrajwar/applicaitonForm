import Input from "./Common/Input";
 


function LanguageFamilyTemplate({Data ,title1 , title2 , title3 , title4 }){
    return (
        <div className="mt-5">
<table className='w-full '>
        <thead className="w-full">
            <tr className=" text-white w-full ">
         <th className="w-[10%] border"></th>
         <th className="w-[45%] border">{title1}</th>
         <th className="w-[15%] border">{title2}</th>
         <th className="w-[15%] border">{title3}</th>
         <th className="w-[15%] border">{title4}</th>
            </tr>
        </thead>

        <tbody>

        {
                    Data.map((data ,index)=>(
                        <tr key={index}>
                        <td className=" border-2 text-center w-[10%]">{data.title}</td>
                    
                      <td className="w-[45%] border-2 "> <Input width={'w-full'} type={"text"}  /> </td>
                      <td className="w-[15%] border-2 "> <Input width={'w-full'} type={"text"}  /> </td>
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

export default LanguageFamilyTemplate;