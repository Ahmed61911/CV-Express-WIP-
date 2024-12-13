import SidePanel from "../components/SidePanel"
import Header from "../components/Header"
import AddButton from "../components/AddButton"
import CvCard from "../components/CvCard"

export const Dashboard = () => {
  return (
    <>
      <AddButton />
      <SidePanel />
      <div className="grid grid-cols-4 gap-4 w-full min-h-[100vh] pl-[24.5%] pt-1 bg-slate-300">
        <CvCard />
        <CvCard />
        <CvCard Type="add" />
      </div>
    </>
  )
}
