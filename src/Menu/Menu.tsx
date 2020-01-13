import React, { memo } from 'react'
import './menu.css'
import List from '@material-ui/core/List'
import MenuItem from './MenuItem/MenuItem'
import { MenuItemProps } from './MenuItem/MenuItemProps'
import { MenuProps } from './MenuProps'

export default memo(function Menu({ items, depthStep, depth }: MenuProps) {
    return (
        <div className="sidebar">
            <List disablePadding dense>
                {items.map((items: MenuItemProps, index: number) => (
                    <MenuItem
                        key={`${items.name}${index}`}
                        depthStep={depthStep}
                        depth={depth}
                        {...items}
                    />
                ))}
            </List>
        </div>
    )
})
