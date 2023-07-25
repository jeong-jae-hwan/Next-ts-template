import React from "react";
import Link from "next/link";

//styles
import styled from "@emotion/styled";

//menu
import menus from "../../json/memu.json";

//ui
import DrawerBox from "@/lib/widgets/Drawer";

interface DrawerType {
  isDrawer: boolean;
  handleCloseDrawer: () => void;
}

//
export function Drawer({ isDrawer, handleCloseDrawer }: DrawerType) {
  return (
    <>
      <DrawerBox view={isDrawer} onCancel={handleCloseDrawer}>
        <Menus>
          {menus.map((item, i) => {
            return (
              <Menu key={i} onClick={() => handleCloseDrawer()}>
                <Link href={item.a}>
                  <MenuName>{item.name}</MenuName>
                  {/* <HrefIcon /> */}
                </Link>
              </Menu>
            );
          })}
        </Menus>
      </DrawerBox>
    </>
  );
}

// styled

const Menus = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  column-gap: 10px;
  row-gap: 6px;
  margin-top: 0px;
`;

const Menu = styled.li`
  width: 100%;
  padding: 6px 10px;

  a {
    padding: 6px 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      fill: #999;
    }
  }
`;

const MenuName = styled.span`
  font-size: 0.938rem;
`;
