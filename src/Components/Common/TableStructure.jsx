import Input from "./Input";

function TableStructure({data , checkbox=false}){
    return (

        <tr className="flex flex-row w-full ">
          {
            data.map((data ,index)=>(
                <td key={index} className="pl-2 flex lg:flex-row flex-col border items-center w-full ">
                  <p>  {data.title}</p>
                    {
                        checkbox?(
                            < div className="flex flex-row gap-5">
       <div className="flex flex-row gap-2">
        <input type="checkbox" />
        <p>Permanent</p>
       </div>
       <div className="flex flex-row gap-2">
        <input type="checkbox" />
        <p>Temporary</p>
       </div>
                            </div>
                        ):(
                            <Input width={'w-full '} />

                        )
                    }
                </td>
            ))
          }
        </tr>

    )
}

export default TableStructure;