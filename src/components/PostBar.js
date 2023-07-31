import Link from "next/link";
import clsx from "clsx";

export default function PostBar({post, nextSlug}) {

  const linkClasses = clsx('text-lg md:pl-9 md:pr-0 md:pt-7 md:text-xl text-sText', {
    'hover:text-pText': nextSlug,
    '': !nextSlug,
  });

  return(
    <div className="relative z-10 mt-7 px-5 flex flex-row items-center justify-between md:mt-0 md:px-0 md:max-w-[300px] md:absolute md:flex-col md:items-start md:justify-start">

      <Link
        href={'/blog'}
        className="text-4xl md:pt-9 md:pl-9 md:text-6xl text-sText font-sans">
        ab
      </Link>

      <Link
        href={'/blog/posts'}
        className="pl-28 text-lg md:pt-10 md:pl-9 md:text-xl text-sText hover:text-pText">
        Back to List
      </Link>

      {nextSlug !== null ? (

        <Link href={`/blog/posts/${nextSlug}`} className={linkClasses}>
          Next Post
        </Link>

      ) : (

        <span className={clsx(linkClasses, 'cursor-not-allowed')}>
          The End
        </span>

      )}

      {post?.altPost !== undefined ? (

        <div className="hidden md:block">
          <h4 className="pl-9 pt-10 md:text-xl text-pHighlight">Outline</h4>
          <p
          className="pl-9 pt-1 md:text-md ">
            {post?.altPost}
          </p>
        </div> 

      ) : (
        <p></p>
      )} 

    </div>
  );
}