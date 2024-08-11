import { useNavigate } from "react-router-dom"
import { HeaderIcon } from "../icons/header-icon"

export const Header = () => {
    const navigate = useNavigate()
  
    const click = () => {
        navigate("/login")
    }
    return <div className="flex items-center justify-between px-[45px] py-[19px] bg-white">
        <div>
        <h2 className="font-extrabold text-[18px] text-[#212121]">
        Товары
        </h2>
        <p className="font-bold text-[13px] text-[#b5b5c3]">Главная   /   Товары</p>
        </div>

        <div className=" cursor-pointer" onClick={click}>
            <HeaderIcon/>
        </div>
    </div>
}