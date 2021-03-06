import { SelectionAction as Action, SelectionActionTypes as ActionTypes } from "./selections.types";
import { BrushType } from "../../utils/brush.utils";

export const setSelectedColorId = (value?: string): Action => ({
    type: ActionTypes.SET_SELECTED_COLOR_ID,
    value
});

export const setSelectedPaletteId = (value: string): Action => ({
    type: ActionTypes.SET_SELECTED_PALETTE_ID,
    value
});

export const setSelectedPluginId = (value?: string): Action => ({
    type: ActionTypes.SET_SELECTED_PLUGIN_ID,
    value
});

export const setSelectedGridColumns = (value: number): Action => ({
    type: ActionTypes.SET_SELECTED_GRID_COLUMNS,
    value
});

export const setSelectedGridRows = (value: number): Action => ({
    type: ActionTypes.SET_SELECTED_GRID_ROWS,
    value
});

export const setSelectedGridSize = (columns: number, rows: number, scale?: number): Action => ({
    type: ActionTypes.SET_SELECTED_GRID_SIZE,
    columns,
    rows,
    scale,
});

export const setSelectedTileScale = (value: number): Action => ({
    type: ActionTypes.SET_SELECTED_TILE_SCALE,
    value
});

export const setSelectedBrush = (value: BrushType): Action => ({
    type: ActionTypes.SET_SELECTED_BRUSH,
    value
});