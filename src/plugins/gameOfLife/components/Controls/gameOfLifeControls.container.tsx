import React, { FC } from "react";
import { GameOfLifeControlsUI } from './gameOfLifeControls.ui';
import { useGameOfLife } from "../../store/hooks";

export const GameOfLifeControlsContainer: FC = () => {
    const { isRunning, toggleIsRunning, generationTime, setGenerationTime } = useGameOfLife();

    return (
        <GameOfLifeControlsUI
            isRunning={isRunning}
            generationTime={generationTime}
            toggleIsRunning={toggleIsRunning}
            setGenerationTime={setGenerationTime}
        />
    )
}