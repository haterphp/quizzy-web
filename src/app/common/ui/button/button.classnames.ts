import { ButtonSize, ButtonVariant } from "./button.interfaces"

const BASE_BUTTON_CLASSNAME = 'btn'
const ICON_BUTTON_CLASSNAME = 'btn_icon'

const VARIANTS_BUTTON_CLASSNAMES: Record<ButtonVariant, string>  =  {
    filled: 'btn_filled',
    outlined: 'btn_outlined',
}

const SIZES_BUTTON_CLASSNAMES: Record<ButtonSize, string> = {
    default: 'btn_default',
    large: 'btn_large',
}

export { 
    BASE_BUTTON_CLASSNAME,
    ICON_BUTTON_CLASSNAME,
    VARIANTS_BUTTON_CLASSNAMES,
    SIZES_BUTTON_CLASSNAMES
}