import Input from "./Common/Input";

const Data1 = [
    {
        title:"S.NO",
    },
    {
        title:"Description",
    },
    {
        title:"Year"
    }
]

const Data2 =[
 {
    title:"1"
 },
 {
    title:"2"
 },
]

function MajorAchievementDetails(){
    return(
        <div className="mt-10">
        <p className="border">MAJOR ACHIEVEMENTS /PUBLICATIONS TO YOUR CREDIT</p>
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
            </tr>
        ))
      }
        </tbody>

      </table>
        </div>
    )
}

export default MajorAchievementDetails;