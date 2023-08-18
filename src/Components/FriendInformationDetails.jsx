
import Input from "./Common/Input";
const Data1 = [
    {
        title:"S.NO"
    },
    
    {
        title:"Name"
    },
    {
        title:"Current Company"
    },
    {
        title:"E-mail address"
    },
    {
        title:"Telephone"
    }

]

const Data2 = [
    {
        title:"1"
    },
    {
        title:"2"
    },

]
function FriendInformationDetails(){
    return (
        <div className="mt-10">
        <p className="border">Please name two known contacts who could be friends / co-workers whom you would like to 
recommend for Employment at MNJ Software
</p>
      <table className='w-full'>
        <thead className="w-full">
            
            <tr className="border text-white w-full ">
        {
            Data1.map((data ,index)=>(
                <th  className={`border ${index==1?('w-[60%]'):('w-[20%]')}`}  key={index}>
                    {data.title}
                </th>
            ))
        }
            </tr>
        </thead>

        <tbody>
      {
        Data2.map((data)=>(
            <tr key={data.title}> 
            <td className="border text-center">{data.title}</td>
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
                     
            </tr>
        ))
      }
        </tbody>

      </table>
        </div>
    )
}

export default FriendInformationDetails;