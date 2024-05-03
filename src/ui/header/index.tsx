import { useState } from "react";
import Button from "antd/lib/button";
import Switch from "antd/lib/switch";
import Tooltip from "antd/lib/tooltip";

import { FontIcon } from "@/ui/icon";

const mobileText = "Mobile view";
const desktopText = "Desktop view";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = (status = !toggle) => {
    setToggle(status);
  };

  return (
    <header className="p-3 flex bg-cyan-400">
      <aside className="flex-1">
        <h1 className="text-xl font-bold text-black">
          React Mailing Generator
        </h1>
      </aside>

      <nav className="flex-1 text-right">
        <div className="inline-block mr-3">
          <Tooltip placement="bottom" title={desktopText}>
            <span />
            <FontIcon
              className={`text-3xl cursor-pointer ${!toggle ? "text-black" : ""}`}
              name="desktop_windows"
              onClick={() => handleToggle(false)}
            />
          </Tooltip>

          <Switch className="mx-1" checked={toggle} onChange={handleToggle} />

          <Tooltip placement="bottom" title={mobileText}>
            <span />
            <FontIcon
              className={`text-3xl cursor-pointer ${toggle ? "text-black" : ""}`}
              name="phone_iphone"
              onClick={() => handleToggle(true)}
            />
          </Tooltip>
        </div>

        <Button
          className="font-semibold hover:shadow-solid mx-3"
          type="default"
        >
          Save&nbsp;<small>&amp;</small>&nbsp;Exit
        </Button>

        <Button className="font-semibold hover:shadow-solid" type="default">
          Send a Test
        </Button>
      </nav>
    </header>
  );
}
