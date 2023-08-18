import { Table } from "react-super-responsive-table";
import Input from "./Common/Input";
import TableStructure from "./Common/TableStructure";


function PreviousEmployersDetails({title}){
    return (
        <div className="mt-10">
        <p className="border">Details of Previous Employers (Starting from your Current Job, covering up to Last 3 Employments)
Please attach a copy of <span className="text-red-500"> your relieving letter/service certificate </span> for this

</p>
      <table className='w-full'>
        <tbody>
    
        <TableStructure data={[{title:title}]} />
        
        <TableStructure data={[{title:"Address (main office and branch where worked):"} , {title:"Telephone:"}]} />
        <TableStructure data={[{title:"Employment Period: (date, month, year):"} , {title:"Employee Code/ Personnel No:"} , {title:"Name of Reporting Manager :"}]} />
      <TableStructure data={[{title:"Name of HR "} , {title:"Contact No. of HR:"} , {title:"Email Id of HR:"}]} />
      <TableStructure data={[{title:"Designation & Department of Reporting Manager : "} , {title:"Contact No of Reporting Manager:"} , {title:"Email ID of Reporting Manager: "}]} />
      <TableStructure data={[{title:"Name of Alternative Reporting Manager : "} , {title:"Contact No of Alternative Reporting Manager:"} , ]} />
      <TableStructure data={[{title:"Designation & Department of Alternative Reporting Manager"} , {title:"Email ID of Alternative Reporting Manager: :"} ,]} />

      <TableStructure data={[{title:"Whether employment is of permanent or temporary nature - " }]} checkbox={true} />

      <TableStructure data={[{title:"Agency Details (if temporary or contractual) : "}]} />
  
      <TableStructure data={[{title:" Remunerations (CTC pa) :"} , {title:"Reason(s) for Leaving :"}]} />
  
        </tbody>

      </table>
        </div>
    )
}
export default PreviousEmployersDetails;