import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";
import React from "react";
import SearchIcon from "./icon/SearchIcon";
import ChartIcon from "./icon/chartIcon";

export default function NavLink() {
  return (
    <Navbar isBordered className="w-full">
      <NavbarContent as="div" className="items-center" justify="between">
        <Input
          radius="full"
          classNames={{
            base: "max-w-full sm:max-w-[20rem] h-10 w-[30rem] ",
            mainWrapper: "h-full",
            input: "text-small",

            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="md"
          startContent={<SearchIcon size={24} />}
          type="search"
        />
      </NavbarContent>
      <div className="flex items-center justify-center gap-3">
        <div className="flex items-center gap-2   border rounded-3xl ">
          <NavbarContent as="div" className="items-center" justify="end">
            <Button
              isIconOnly
              aria-label="Like "
              radius="full"
              className="text-tiny text-white bg-black/10"
            >
              <ChartIcon />
            </Button>

            <p className="font-bold">150</p>

            <Button
              radius="full"
              className="bg-gradient-to-tr from-[#A966DE] to-[#4C6EFF] text-white shadow-lg lg:flex hidden"
            >
              Upgrade
            </Button>
          </NavbarContent>
        </div>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </Navbar>
  );
}
