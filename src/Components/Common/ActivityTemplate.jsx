function ActivityTemplate({heading}){
    return (
        <div className="border mt-10 ">
         <p className="border">{heading}</p>
         <textarea rows={5}  className="resize-none bg-transparent h-full w-full outline-none border-none" />
        </div>
    )
}

export default ActivityTemplate;