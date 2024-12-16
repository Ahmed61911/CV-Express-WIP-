
import { AboutBG } from "../../../assets/images"

const Main = () => {
  return (
    <div>
        <div class="sm:flex items-center max-w-screen-xl h-[100vh]">
            <div class="sm:w-1/2 p-10">
                <div class="image object-center text-center">
                    <img src={AboutBG}/>
                </div>
            </div>
            <div class="sm:w-1/2 p-5">
                <div class="text">
                    <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
                    <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-indigo-600">Our Company</span>
                    </h2>
                    <p class="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
                        doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
                        voluptatum.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main