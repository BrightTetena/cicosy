import Tagline from "./TagLine"

const Heading = ({className, title, tag}) => {
  return (
    <div
    className={`${className} max-w-[50rem]  mb-3 lg:mb-3`}
    >
      {title &&<h2 className='h2 ' >{title}</h2>}
      {tag && (
        <Tagline className=" ">
{tag}
          </Tagline>
      )}
      
    </div>
  )
}

export default Heading
