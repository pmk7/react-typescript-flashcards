import React from "react";
import styled from "styled-components";

export interface WordProps {
    id: number;
    german: string;
    english: string;
    sentence?: any;
}

const Word: React.FC<WordProps> = ({id, german, english, sentence}: WordProps) => {


    return (
    <Wrapper>
        <p>German: {german}</p><span> English: {english}</span>
    
    </Wrapper>
 )
}

const Wrapper = styled.div`

`

export default Word
