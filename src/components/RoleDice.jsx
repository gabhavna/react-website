import { useState } from "react";
import styled from "styled-components";

const RoleDice = ({currentDice,roleDice}) =>{
    

    return (
        <DiceContainer>
            <div className="dice" onClick={roleDice}>
                <img src={`/images/dice/dice_${currentDice}.png`} alt="1" />
            </div>
            <p>Click on dice to roll</p>
        </DiceContainer>
    )
}

export default RoleDice;

const DiceContainer = styled.div`display:flex;flex-direction:column;align-items:center;margin-top:48px;
    p{
        font-size:24px; margin:0;
    }
    .dice{cursor:pointer;}
`;