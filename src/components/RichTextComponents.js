import Image from "next/image";
import { urlFor } from "@/utils/sanity";
import Link from "next/link";

 export const RichTextComponents = {

    types: {
      image: ({value}) => {
        
        return(
            <div className="relative w-full h-96 mx-auto">
                <Image
                    className="object-contain"
                    src={urlFor(value).url()}
                    alt={"Blog Post Image"}
                    fill
                />
            </div>
        );
      },
    },
    list: {
        bullet: ({children}) => <ul className="ml-10 list-disc space-y-2">{children}</ul>,
        number: ({children}) => <ol className="ml-10 list-decimal space-y-2">{children}</ol>,
      },

    block: {
        normal: ({children}) => <p className="py-2 text-lg">{children}</p>,
        h1: ({children}) => <h1 className="text-4xl py-5 font-sansM">{children}</h1>,
        h2: ({children}) => <h2 className="text-3xl py-4 font-sansM">{children}</h2>,
        h3: ({children}) => <h3 className="text-2xl py-3 font-sansM">{children}</h3>,
        h4: ({children}) => <h4 className="text-xl py-2 font-sansM">{children}</h4>,
        h5: ({children}) => <h5 className="text-lg py-1 font-sansM">{children}</h5>,
        blockquote: ({children}) => <blockquote className="border-l-pHighlight border-l-4 pl-5 py-2 my-4">{children}</blockquote>,
        code: ({children}) => <p className="bg-sText bg-opacity-10 p-3 rounded-xl m-1">{children}</p>,
    
      },

      marks: {
        em: ({children}) => <em>{children}</em>,
        strong: ({ children }) => <strong className="font-sansM">{children}</strong>,
        highlight: ({ children }) => <span className="bg-pHighlight bg-opacity-20">{children}</span>,
        underline: ({ children }) => <span className="border-b border-pHighlight">{children}</span>,

        link: ({value, children}) => {
          const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
          return (
            <Link 
              href={value?.href} 
              target={target} 
              rel={target === '_blank' && 'noindex nofollow noreferrer noopener'}
              className="border-b border-sText hover:text-pHighlight hover:border-pHighlight">
              {children}
            </Link>
          );
        },
    },
}