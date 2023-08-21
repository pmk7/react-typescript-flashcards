import React, { useEffect } from "react";
import styled from "styled-components";
import '../data/my_words.json'

interface WordProps {
    id: number;
    german: string;
    english: string;
    sentence?: any;
}

const Word: React.FC<WordProps> = ({id, german, english, sentence}: WordProps) => {


    return <Wrapper>
        <div key={id}>
            <p>{german}</p>
            <p>{english}</p>
        </div>
    </Wrapper>
}

const Wrapper = styled.div`

`

export default Word
