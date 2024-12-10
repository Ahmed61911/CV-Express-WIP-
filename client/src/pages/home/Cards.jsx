const Cards = ({label, image, text}) => {
  return (
    <div className='bg-transparent transition ease-in-out delay-100 hover:bg-gradient-to-l from-cyan-100 to-teal-50 w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg hover:rotate-3 shadow-xl hover:bg-teal-50 hover:rounded-3xl'>
        <div className='max-w-md mx-auto space-y-6'>
            <h3>{label}</h3>
            <img src={image} className='rounded-lg w-full' />
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Cards