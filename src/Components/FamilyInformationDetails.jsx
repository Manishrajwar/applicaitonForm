import LanguageFamilyTemplate from "./LanguageFamilyTemplate"
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
function FamilyInformationDetails(){
    return (
        <div className="mt-5">
     <h1  className="underline">family Information (parent , brothers , sisters , Spouse & Children)</h1>
<LanguageFamilyTemplate Data={Data} title1={'Name'} title2={'RelationShip'} title3={'Date Of Birth'} title4={'Age'} />
    
        </div>
    )
}

export default FamilyInformationDetails