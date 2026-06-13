

import { Menu, Phone } from "lucide-react";
import MyButton from "@/components/myComponents/MyButton";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isScrolled: boolean
}
const MobileNav = ({
  setIsOpen, 
  isScrolled
}: Props) => {
  return (
    <div className="sm:hidden flex justify-center items-center gap-5 py-2">
            <MyButton
              onClick={() => setIsOpen(true)}
              variant={isScrolled ? "fillIcon" : "solidIcon"}
            >
              <Menu className="w-5 h-5" />
            </MyButton>
          </div>
  )
}

export default MobileNav
