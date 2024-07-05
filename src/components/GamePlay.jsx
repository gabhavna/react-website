import { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice.jsx";
import Rules from "./Rules";
import { Button } from "../styled/Button.js";

import styled from "styled-components";

const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [showRules, setShowRules] = useState(false);
    const [error,setError]= useState('');

    const generateRandomNumber = (min, max) => {
        // console.log(Math.floor(Math.random() * (max - min) + min))
        return Math.floor(Math.random() * (max - min) + min);
    }
    const roleDice = () =>{
        if (!selectedNumber){
            setError('You have not selected any number');
            return;
        };
        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice((prev) => randomNumber);
        
        if(selectedNumber == randomNumber){
            setScore((prev) => prev + randomNumber)
        } else {
            setScore((prev) => prev - 2)
        }
        setSelectedNumber(undefined);
    }

    const resetScore = () => {
        setScore(0);
    }

    return (
        <MainContainer>
            <div className="top_section">
                <TotalScore score={score}/>
                <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
            </div>
            <RoleDice roleDice={roleDice} currentDice={currentDice} />
            <div className="btns">
                <Button onClick={resetScore}>Reset</Button>
                <Button onClick={() => setShowRules((prev) => !prev)}> {showRules ? 'Hide' : 'Show'} Rules</Button>
            </div>
            {showRules && <Rules />}
        </MainContainer>
    );
}

export default GamePlay;

const MainContainer = styled.main`
padding-top:70px;
.top_section{
    display:flex;
    justify-content:space-around;
    align-items:end;
}
.btns{
    display:grid;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap: 10px;
}
`;