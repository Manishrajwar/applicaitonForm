import Input from "./Common/Input";

const Data = [
{
    title:"Signed :",

},
{
 title:"Name in Block Capitals :"
},
{
    title:"Date :"
}
]

function DeclarationPageDetails(){
    return (
        <div className="flex flex-col gap-4  mt-10 ">
            <div className="text-center text-3xl font-bold ">
         <h1>Declaration and Authorization</h1>

            </div>

         <p>I understand that any employment by MNJ Software India Private Limited or its affiliated companies is conditioned upon positive responses from my references, bonding eligibility, continued adherence to MNJ Software India Private Limited policies and procedures, applicable rules and regulations and job performance satisfactory at all times to MNJ Software Private Limited.</p>

         <p>I consent to take any pre or post-employment examinations as may be required by MNJ Software  Private Limited or its permitted agents, its representative, and release MNJ Software Private Limited and its agents from any liability that may arise from such examination.</p>

         <p>I authorize an inquiry to be made on the information contained on this application. Former employers and officials of education institutes, named on this application are authorized to give information about me and I release them from all liability for issuing such information. </p>

         <p>I hereby attest and warrant that all my answers on this application as well as on all forms completed in conjunction with my employment are true and accurate.  I understand that my misrepresentation of facts, failure to disclose information required on this application or material change in my information provided which is not reported to Human Resources shall be cause for dismissal regardless of when discovered by MNJ Software Private Limited</p>

         <p>I understand, and authorize, that MNJ Software may share my consumer report and/or investigative report with third parties including auditors, government agencies, and clients as necessary.</p>

         <p>I hereby declare that the information given by me is true and the certificates or documents submitted are genuine to the best of my knowledge.</p>

         <div className="flex flex-col gap-3">
{
    Data.map((data , index)=>(
        <div className="flex flex-row  gap-5" key={index}>
           <p className="w-[20%]">{data.title}</p>
           <Input width={'border-b-2'} />
        </div>
    ))
}
         </div>
        </div>
    )
}

export default DeclarationPageDetails;