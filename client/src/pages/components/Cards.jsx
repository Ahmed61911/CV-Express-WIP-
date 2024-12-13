const Cards = ({label, image, text}) => {
  return (
    <div className='bg-transparent transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-gradient-to-l from-blue-100 to-teal-50 w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg hover:rotate-1 shadow-xl hover:bg-teal-50 hover:rounded-xl'>
        <div className='max-w-md mx-auto space-y-6 items-center flex flex-col'>
            <h3 className="text-xl font-semibold justify-center">{label}</h3>
            <img src={image} className='rounded-lg w-full' />
            <p className="text-center">{text}</p>
        </div>
    </div>
  )
}

export default Cards