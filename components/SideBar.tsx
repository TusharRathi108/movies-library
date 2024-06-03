import { BsArrowLeftShort } from "react-icons/bs";
import { MdOutlineLocalMovies } from "react-icons/md";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SideBarComponent = ({ open, setOpen }: SidebarProps) => {
  return (
    <div
      className={`bg-slate-900 h-screen p-5 pt-8 ${
        open ? "w-60" : "w-24"
      } duration-300 relative backdrop-blur-0`}
    >
      <BsArrowLeftShort
        className={`bg-slate-300 text-slate-800 text-3xl rounded-full border-2 border-slate-900
        absolute -right-3 top-9 cursor-pointer ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="inline-flex gap-2">
        <MdOutlineLocalMovies
          className={`bg-slate-300 text-4xl rounded-md p-1 cursor-pointer block float-left ml-2 top-5 duration-700 ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-2xl duration-300 ${
            !open && "scale-0"
          }`}
        >
          RAPHSODY
        </h1>
      </div>
    </div>
  );
};

export default SideBarComponent;
