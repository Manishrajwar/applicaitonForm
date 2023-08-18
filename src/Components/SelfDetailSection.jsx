import Input from "./Common/Input";
import InputDesign1 from "./Common/InputDesign1";
import AddressTable from "./AddressTable";

function SelfDetailSection() {
  return (
    <div className="border-2 border-white flex flex-col ">
      {/* first */}
    
       <table className="w-full border min-h-[50px]">
        <tbody className="w-full">
          <tr className="w-full ">
            <td className="w-[20%]">Name (same as in passport):</td>
            <div className="flex lg:flex-row flex-col gap-3">
            <td className=""><Input width={'border-b-2'} placeholder={'first Name'} /></td>
            <td className=""><Input width={' border-b-2'} placeholder={'surname'} /></td>

            </div>
          </tr>
        </tbody>
       </table>
        
  

      {/* second */}
       <InputDesign1 />

      {/* third  */}
        <AddressTable />


    </div>
  );
}

export default SelfDetailSection;
