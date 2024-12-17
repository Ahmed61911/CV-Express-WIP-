import { useState } from "react";

const LeftDropMenu_1 = () => {
    let DiplomeCount = 1;
    const [fields, setFields] = useState([]);

    const handleAddField = (type) => {
      setFields([
        ...fields,
        {
          id: Date.now(),
          type,
          label: "",
          value: "",
        },
      ]);
    };
  
    const handleRemoveField = (id) => {
      setFields(fields.filter((field) => field.id !== id));
      DiplomeCount -=1;
    };
  
    const handleChange = (id, key, value) => {
      setFields(
        fields.map((field) =>
          field.id === id ? { ...field, [key]: value } : field
        )
      );
    };
  
    const renderField = (field) => {
        DiplomeCount += 1;
      switch (field.type) {
        case "text":
          return (
            <>
                <div class="w-full px-4">
                    <div class="relative w-full mb-3 ">
                        <label class="block uppercase text-gray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                            Intitulé de diplome:
                        </label>
                        <input
                            type="text"
                            value={field.value}
                            onChange={(e) => handleChange(field.id, "value", e.target.value)}
                            placeholder={field.label || "Enter text"}
                            className="border-0 px-3 py-3 w-full placeholder-gray-300 text-gray-600 bg-blue-50 rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                        />
                    </div>

                    <div className="flex flex-row">
                        <div class="relative w-full mb-3 ">
                            <label class="block uppercase text-gray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                Ecole:
                            </label>
                            <input
                                type="text"
                                value={field.value}
                                onChange={(e) => handleChange(field.id, "value", e.target.value)}
                                placeholder={field.label || "Enter text"}
                                className="border-0 px-3 py-3 w-10/12 placeholder-gray-300 text-gray-600 bg-blue-50 rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                            />
                        </div> 

                        <div class="relative w-full mb-3 ">
                            <label class="block uppercase text-gray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                Lieu:
                            </label>
                            <input
                                type="text"
                                value={field.value}
                                onChange={(e) => handleChange(field.id, "value", e.target.value)}
                                placeholder={field.label || "Enter text"}
                                className="border-0 px-3 py-3 w-10/12 placeholder-gray-300 text-gray-600 bg-blue-50 rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                            />
                        </div> 
                    </div>


                    <div class="flex flex-row gap-0">
                        <div class="relative w-full mb-3">
                            <label class="block uppercase text-gray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                Date debut
                            </label>
                            <input
                                type="date"
                                value={field.value}
                                onChange={(e) => handleChange(field.id, "value", e.target.value)}
                                className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-blue-50 rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                            />
                        </div>

                        <div class="relative w-full mb-3">
                            <label class="block uppercase text-gray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                Date debut
                            </label>
                            <input
                                type="date"
                                value={field.value}
                                onChange={(e) => handleChange(field.id, "value", e.target.value)}
                                className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-blue-50 rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                            />
                        </div>
                    </div>

                {/*<div class="relative w-full mb-3">
                    <label class="block uppercase text-gray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Username
                    </label>
                    <select
                        value={field.value}
                        onChange={(e) => handleChange(field.id, "value", e.target.value)}
                    >
                        <option value="" disabled>
                        Select an option
                        </option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                    </select>
                </div>*/}
              </div>
            </>
          );
      }
    };
  return (
    <section class=" py-1 bg-blue-300">
    <div class="w-full lg:w-10/12 px-0 mx-auto mt-6 bg-white rounded-xl">
    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg  bg-white border-0 rounded-xl">
        <div class="rounded-t-xl bg-blue-100 mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
            <h6 class="text-gray-700 uppercase text-xl font-bold">
            Parcour academic:
            </h6>
        </div>
        </div>
        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <div>
            <h6 class="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
            </h6>
            <div class="flex flex-wrap">
            <div className="w-full">
                <div className="form-fields">
                    {fields.map((field) => (
                    <div key={field.id} className="field">
                        <div class="flex flex-row place-content-between">
                            
                            <h1 className="text-lg text-gray-700 font-semibold">Diplome {DiplomeCount}:</h1>
                            <button onClick={() => handleRemoveField(field.id)}
                                className="group relative flex h-10 w-10 flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-red-800 bg-red-400 hover:bg-red-600"
                                >
                                <svg
                                    viewBox="0 0 1.625 1.625"
                                    className="absolute -top-7 fill-white delay-100 group-hover:top-6 group-hover:animate-[spin_1.4s] group-hover:duration-1000"
                                    height="12"
                                    width="12"
                                >
                                    <path
                                    d="M.471 1.024v-.52a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099h-.39c-.107 0-.195 0-.195-.195"
                                    ></path>
                                    <path
                                    d="M1.219.601h-.163A.1.1 0 0 1 .959.504V.341A.033.033 0 0 0 .926.309h-.26a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099v-.39a.033.033 0 0 0-.032-.033"
                                    ></path>
                                    <path
                                    d="m1.245.465-.15-.15a.02.02 0 0 0-.016-.006.023.023 0 0 0-.023.022v.108c0 .036.029.065.065.065h.107a.023.023 0 0 0 .023-.023.02.02 0 0 0-.007-.016"
                                    ></path>
                                </svg>
                                <svg
                                    width="12"
                                    fill="none"
                                    viewBox="0 0 39 7"
                                    className="origin-right duration-500 group-hover:rotate-90"
                                >
                                    <line stroke-width="4" stroke="white" y2="5" x2="39" y1="5"></line>
                                    <line
                                    stroke-width="3"
                                    stroke="white"
                                    y2="1.5"
                                    x2="26.0357"
                                    y1="1.5"
                                    x1="12"
                                    ></line>
                                </svg>
                                <svg width="12" fill="none" viewBox="0 0 33 39" className="">
                                    <mask fill="white" id="path-1-inside-1_8_19">
                                    <path
                                        d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
                                    ></path>
                                    </mask>
                                    <path
                                    mask="url(#path-1-inside-1_8_19)"
                                    fill="white"
                                    d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                                    ></path>
                                    <path stroke-width="4" stroke="white" d="M12 6L12 29"></path>
                                    <path stroke-width="4" stroke="white" d="M21 6V29"></path>
                                </svg>
                                </button>
                            </div>
                        {renderField(field)}

                        

                    </div>
                    ))}
                </div>
                <div className="field-controls">
                <button
                    onClick={() => handleAddField("text")}
                    class="rounded-lg mt-8 relative w-36 h-10 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500"
                    >
                    <span
                        class="text-white font-semibold ml-10 transform group-hover:translate-x-20 transition-all duration-300"
                        >Ajouter</span>
                    <span
                        class="absolute right-0 h-full w-10 rounded-lg bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300"
                    >
                        <svg
                        class="svg w-8 text-white"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <line x1="12" x2="12" y1="5" y2="19"></line>
                        <line x1="5" x2="19" y1="12" y2="12"></line>
                        </svg>
                    </span>
                    </button>
                </div>
                </div>
            </div>
           
        </div>
        </div>
    </div>
    </div>
    </section>
  )
}

export default LeftDropMenu_1