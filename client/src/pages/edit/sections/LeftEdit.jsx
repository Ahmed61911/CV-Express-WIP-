import LeftPersoInfos from "./LeftPersoInfos"
import LeftUpload from "./LeftUpload"
import DynamicForm from "./DynamicForm"
import LeftDropMenu_1 from "./LeftDropMenu_1"
import LeftDropMenu_2 from "./LeftDropMenu_2"
const LeftEdit = () => {
  return (
    <>
      <div>
        <LeftUpload />
        <LeftPersoInfos />
        <LeftDropMenu_1 />
        <LeftDropMenu_2 />
      </div>
    </>
  )
}

export default LeftEdit