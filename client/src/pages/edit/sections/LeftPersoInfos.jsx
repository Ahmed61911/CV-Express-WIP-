const LeftPersoInfos = () => {
  return (


    <section class=" py-1 bg-blue-300">
    <div class="w-full lg:w-10/12 px-0 mx-auto mt-6 bg-white rounded-xl">
    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg  bg-white border-0 rounded-xl">
        <div class="rounded-t-xl bg-blue-100 mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
            <h6 class="text-gray-700 text-xl font-bold">
            My account
            </h6>
        </div>
        </div>
        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
            <h6 class="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
            User Information
            </h6>
            <div class="flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                <label class="block uppercase text-gray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    Username
                </label>
                <input type="text" class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-blue-50 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="lucky.jesse" />
                </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                <label class="block uppercase text-gray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    Email address
                </label>
                <input type="email" class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-blue-50 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="jesse@example.com" />
                </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                <label class="block uppercase text-gray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    First Name
                </label>
                <input type="text" class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-blue-50 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Lucky" />
                </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                <label class="block uppercase text-gray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    Last Name
                </label>
                <input type="text" class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-blue-50 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Jesse" />
                </div>
            </div>
            </div>

            <span class="mt-6 border-b-1 border-gray-300" ></span>

            <h6 class="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Contact Information
            </h6>
            <div class="flex flex-wrap">
            <div class="w-full lg:w-12/12 px-4">
                <div class="relative w-full mb-3">
                <label class="block uppercase text-gray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    Address
                </label>
                <input type="text" class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-blue-50 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" />
                </div>
            </div>
            <div class="w-full lg:w-4/12 px-4">
                <div class="relative w-full mb-3">
                <label class="block uppercase text-gray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    City
                </label>
                <input type="email" class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-blue-50 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="New York" />
                </div>
            </div>
            <div class="w-full lg:w-4/12 px-4">
                <div class="relative w-full mb-3">
                <label class="block uppercase text-gray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    Country
                </label>
                <input type="text" class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-blue-50 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="United States" />
                </div>
            </div>
            <div class="w-full lg:w-4/12 px-4">
                <div class="relative w-full mb-3">
                <label class="block uppercase text-gray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    Postal Code
                </label>
                <input type="text" class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-blue-50 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Postal Code" />
                </div>
            </div>
            </div>

            <span class="mt-6 border-b-1 border-gray-300"></span>

            <h6 class="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
            About Me
            </h6>
            <div class="flex flex-wrap">
            <div class="w-full lg:w-12/12 px-4">
                <div class="relative w-full mb-3">
                <label class="block uppercase text-gray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    About me
                </label>
                <textarea type="text" class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-blue-50 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4"> A beautiful UI Kit and Admin for JavaScript &amp; Tailwind CSS. It is Freeand Open Source.</textarea>
                </div>
            </div>
            </div>
        </form>
        </div>
    </div>
    </div>
    </section>
  )
}

export default LeftPersoInfos