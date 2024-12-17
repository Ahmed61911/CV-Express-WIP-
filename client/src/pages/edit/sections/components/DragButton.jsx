const DragButton = () => {
  return (
    <label
    for="nav_bar_icon"
    class="w-9 h-10 cursor-ew-resize flex flex-col items-center justify-center space-y-1.5"
    >
    <input id="nav_bar_icon" type="checkbox" class="hidden peer" />
    <div
        class="w-2/3 h-1.5 bg-slate-700 rounded-lg transition-all duration-300 origin-right "
    ></div>
    <div
        class="w-full h-1.5 bg-slate-400 rounded-lg transition-all duration-300 origin-center"
    ></div>
    <div
        class="w-2/3 h-1.5 bg-slate-700 rounded-lg transition-all duration-300 origin-right"
    ></div>
    </label>

  )
}

export default DragButton