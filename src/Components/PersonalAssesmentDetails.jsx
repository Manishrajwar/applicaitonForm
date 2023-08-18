

import Input from "./Common/Input";

const Data = [
    {
        title:"1",
    },
    {
        title:"2",
    },
    {
        title:"3",
    },
    {
        title:"4",
    },
    {
        title:"5",
    },

]

function PersonalAssesmentDetails(){
    return (
        <div className="mt-10">
        <p className="border">PERSONAL ASSESMENT
</p>
        <p className="border"> Please put down in five succinct points as what you consider your strengths and Weaknesses.
</p>
<p>STRENGTH</p>
      <table className='w-full'>
        <tbody>
      {
        Data.map((data)=>(
            <tr key={data.title}> 
            <td className="border text-center w-[10%]">{data.title}</td>
                <td className="border">
                    <Input type={'text'} width={'w-full'}  />
                </td>
            
            </tr>
        ))
      }
        </tbody>

        <p className="mt-5">WEAKNESS</p>
        {
        Data.map((data)=>(
            <tr key={data.title}> 
            <td className="border text-center w-[10%]">{data.title}</td>
                <td className="border">
                    <Input type={'text'} width={'w-full'}  />
                </td>
            
            </tr>
        ))
      }
      </table>
        </div>
    )
}

export default PersonalAssesmentDetails;