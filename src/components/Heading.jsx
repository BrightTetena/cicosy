import Tagline from "./design/TagLine"

const Heading = ({className, title, tag}) => {
  return (
    <div
    className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}
    >
      {title &&<h2 className='h2 mb-6' >{title}</h2>}
      {tag && (
        <Tagline className=" md:justify-center">
{tag}
          </Tagline>
      )}
      
    </div>
  )
}

export default Heading
