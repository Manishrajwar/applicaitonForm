import Input from "./Common/Input";


const Data1 =[
    {
        title:"Degree",
    },
    {
        title:"course",
    },
    {
        title:"Program (full-time/part-time)",
    },
    {
        title:"Elective",
    },
    {
        title:"college Name and Address",
    },
    {
        title:"University Name and Address",
    },
    {
        title:"Duration",
    },
    {
        title:"%",
    },
    {
        title:"Graduation data (MM/YY)",
    },
]

const Data2 =[
    {

        title:"X"
    },
    {
        title:"XII"
    },
    {
        title:"Graduation"
    },
    {
        title:"PG"
    },
    {
        title:"Others 1"
    }
]

function EducationInformation(){
    return (
        <div className="mt-10">
    <p className="border text-2xl w-full">Education Information</p>
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
        Data2.map((data ,index)=>(
            <tr key={index}>
                <td className="border">{data.title}</td>
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
                    <Input  />
                </td>
                
                <td className="border">
                    <Input type={'text'} width={'w-[20%]'} />
                </td>
                
                <td className="border">
                    <Input type={'text'} width={'w-full'} />
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

export default EducationInformation;