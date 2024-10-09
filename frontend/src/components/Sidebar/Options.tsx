import { DropdownMenu, IconButton } from "@radix-ui/themes";
import { CgProfile } from "react-icons/cg";
import useLogout from "../../hooks/useLogout";

const Options = () => {
  const { logout } = useLogout();

  return (
    <div className="self-start relative mt-3">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <IconButton
            variant="ghost"
            size="4"
            style={{ cursor: "pointer", marginTop: "0px", outline: "none" }}
          >
            <CgProfile size="2.25rem" />
          </IconButton>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>Theme</DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent>
              <DropdownMenu.Item>Light</DropdownMenu.Item>
              <DropdownMenu.Item>Dark</DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Item color="red" onClick={logout}>
            Logout
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};

export default Options;
