import { MenuItemProps } from "./MenuItem/MenuItemProps";

export interface MenuProps {
    items: Array<MenuItemProps>;
    depthStep?: number,
    depth?: number,
}