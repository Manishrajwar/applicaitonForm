import LanguageFamilyTemplate from "./LanguageFamilyTemplate";

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
 
]

function LanguageDetails(){
    return(
        <div>
<LanguageFamilyTemplate Data={Data} title1={'Language Known '} title2={'Read'} title3={'Write'} title4={'Speak'} />
        </div>
    )
}

export default LanguageDetails;