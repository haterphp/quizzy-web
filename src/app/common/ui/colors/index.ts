import { deepmerge } from "deepmerge-ts"

import { DEFAULT_PALETTE } from "./constants"
import { DeepPartial } from "../common/utils"

import type { IPalette } from "./interfaces"

const makeProjectColors = (palette: DeepPartial<IPalette> = {}): IPalette => {
    return deepmerge(DEFAULT_PALETTE, palette) as IPalette
}

export { makeProjectColors }