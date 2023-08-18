import Input from './Common/Input'

const AddressData =[
    {
        address:'House No'
    },
    {
        address:'Locality/City'
    },
    {
        address:'State'
    },
    {
        address:'PIN CODE'
    },
    {
        address:'Period of stay'
    },
    {
        address:'(Telephone)'
    },
    {
        address:'(Mobile Phone)'
    },
    {
        address:'E-mail ID(Personal)'
    },
]

export default function AddressTable(){
    return (
        <div>

      <table className='w-full '>
        <thead>
            <tr>
               <th className="w-[33%] border-2 ">Address</th> 
               <th className="w-[33%] border-2 ">Present Address</th>
               <th className="w-[33%] border-2 ">Permanent Address</th>
            </tr>
        </thead>

        <tbody>
        {
                    AddressData.map((address ,index)=>(
                        <tr key={index}>
                
                        <td className=" border-2 w-[33%]">{address.address}</td>
                        <td className="w-[33%] border-2 "> <Input width={'w-full'} type={"text"}  /> </td>
                        <td className="w-[33%] border-2 "> <Input width={'w-full'} type={"text"} /> </td>
                    </tr> 
                    ))
                }
            
        </tbody>
        <tr>
                
                <td className="w-[33%]">Instant Messaging System ID:</td>
                <td className="w-[33%]"> <Input width={'w-full'} type={"text"}  /> </td>
                <td className="w-[33%]  "> <Input width={'w-full'} type={"text"} /> </td>
            </tr> 
      </table>
        </div>
    )
}

