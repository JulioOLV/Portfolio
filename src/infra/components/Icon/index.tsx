import { Icon as IconifyIcon } from '@iconify/react'
import IIcon from './IIcon'

const Icon = ({ icon, ...otherProps } : IIcon) => {
    <IconifyIcon
        icon={icon}
        {...otherProps}
    >
    </IconifyIcon>
}

export default Icon