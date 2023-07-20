
export default function Tags( {Tags} ) {
  


  return (
    <div className="flex flex-row gap-3 w-[400px] justify-center mx-auto flex-wrap">

      {Tags.map(Tag => (
        <div key={Tag._id} className=''>
                    
            <a rel="noopener noreferrer" target="_blank" href='#' className="flex border border-neutral-700 rounded-3xl items-center text-neutral-200 hover:bg-pText hover:text-background transition-all ">
                
                <div className="flex items-center mx-auto px-3 py-2">
                    <div className="text-md">
                        {'#'}{Tag.title}
                    </div>
                </div>
                    
            </a>
                
        </div>
      ))}
      
    </div>
  );
}
