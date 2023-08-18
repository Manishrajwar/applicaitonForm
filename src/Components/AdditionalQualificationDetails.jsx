import Input from "./Common/Input";

const Data1 = [
    {
        title:"Program"
    },
    {
        title:"Institute"
    },
    {
        title:"Duration"
    },
    {
        title:"%"
    },
    {
        title:"Division"
    }
]
const Data2 = [
    {
        id:1,
    },
    {
        id:2,
    },
    {
        id:3,
    },
    {
        id:4,
    },
    {
        id:5,
    },
]
function AdditionalQualificationDetails(){
    return (
        <div className="mt-10">
        <h1>ADDITIONAL QUALIFICATIONS/ DIPLOMAS / CERTIFICATES / TRAINING</h1>
        <p className="border">Please mention any Self learned course /Software /Package</p>
      <table className='w-full '>
        <thead className="w-full">
            
            <tr className="border text-white w-full ">
        {
            Data1.map((data ,index)=>(
                <th className="border" key={index}>
                    {data.title}
                </th>
            ))
        }
            </tr>
        </thead>

        <tbody>
      {
        Data2.map((data)=>(
            <tr key={data.id}> 
                <td className="border">
                    <Input type={'text'}  />
                </td>
                
                <td className="border">
                    <Input />
                </td>
                
                <td className="border">
                    <Input />
                </td>
                
                <td className="border">
                    <Input />
                </td>    
                <td className="border">
                    <Input />
                </td>    
            </tr>
        ))
      }
        </tbody>

      </table>
        </div>
    )
}

export default AdditionalQualificationDetails;