import Input from "./Common/Input";
const Data = [
    {
        title:"From: ",
    },
    {
        title:"To: ",
    },
    {
        title:"Reason: ",
    },
    {
        title:"Complete Address and Location: ",
    },
]

function EducationGapDetails(){
    return (
        <div className="mt-10">
        <p className="">Please account for any and all gaps in education or employment during your tenure.
</p>
      <table className='w-full'> 
        <tbody className="">
            <tr>
            {
        Data.map((data , index)=>(
           
            <td key={index} className="border text-center">{data.title}
                    <Input type={'text'}  />
            </td>
                      ))
      }
            </tr>
            <tr>
            {
        Data.map((data , index)=>(
           
            <td key={index} className="border text-center">{data.title}
                    <Input type={'text'}  />
            </td>
                      ))
      }
            </tr>
            <tr>
            {
        Data.map((data , index)=>(
           
            <td key={index} className="border text-center">{data.title}
                    <Input type={'text'}  />
            </td>
                      ))
      }
            </tr>
    
        </tbody>

      </table>
        </div>
    )
}

export default EducationGapDetails;