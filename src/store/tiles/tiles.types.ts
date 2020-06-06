export interface TileState {
    [tileId: string]: string;
};

export interface TilesPreset {
    name: string;
    id: string;
    tiles: () => TileState;
    rows?: number;
    columns?: number;
};

export interface TilePosition {
    column: number;
    row: number;
}

export enum TileActionTypes {
    FILL_TILE_INIT = 'FILL_TILE_INIT',
    FILL_TILE_SUCCESS = 'FILL_TILE_SUCCESS',
    FILL_TILES_SUCCESS = 'FILL_TILES_SUCCESS',
    CLEAR_TILE = 'CLEAR_TILE',
    SET_TILES = 'SET_TILES',
}

export interface FillTileRequestAction {
    type: TileActionTypes.FILL_TILE_INIT;
    row: number;
    column: number;
}

export interface FillTileSuccessAction {
    type: TileActionTypes.FILL_TILE_SUCCESS;
    row: number;
    column: number;
    color: string;
}

export interface FillTilesSuccessAction {
    type: TileActionTypes.FILL_TILES_SUCCESS;
    tileIds: string[];
    color: string;
}

export interface ClearTileAction {
    type: TileActionTypes.CLEAR_TILE;
    row: number;
    column: number;
}

export interface SetTilesAction {
    type: TileActionTypes.SET_TILES,
    tiles: TileState,
}

export type TileAction = FillTileRequestAction
    | FillTileSuccessAction
    | FillTilesSuccessAction
    | ClearTileAction
    | SetTilesAction;