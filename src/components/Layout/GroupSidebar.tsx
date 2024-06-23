import {
  AlarmClockCheck,
  Bookmark,
  CircleCheckBig,
  Github,
  Notebook,
  Plus,
  UserRound,
} from "lucide-react";
import Icon from "../Icon";

const GroupSidebar = () => {
  return (
    <section className="h-[calc(100vh-1.5rem)] top-3 bg-white/20 backdrop-blur w-64 left-3 rounded-xl flex flex-col py-4 justify-between items-center">
      {/* <div className="mx-auto w-12 space-y-2">
        <Icon href="/">
          <UserRound color="white" />
        </Icon>
        <hr className="mx-2" />
        <div className="space-y-2">
          <Icon href="/">
            <CircleCheckBig color="white" className="size-5" />
          </Icon>
          <Icon href="/">
            <AlarmClockCheck color="white" />
          </Icon>
          <Icon href="/">
            <Notebook color="white" />
          </Icon>
          <Icon href="/">
            <Bookmark color="white" />
          </Icon>
        </div>
      </div>
      <div className="mx-auto w-12 space-y-2">
        <Icon href="/">
          <Plus color="white" />
        </Icon>
        <Icon href="/">
          <Github color="white" />
        </Icon>
      </div> */}
    </section>
  );
};

export default GroupSidebar;