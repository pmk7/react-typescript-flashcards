import React from "react";
import { useAppContext } from "../context/AppContext";
import styled from "styled-components";
import Word, {WordProps} from './Word'



const MyWords: React.FC = () => {
    const {userWordData} = useAppContext()


    return (
        <Wrapper>
            <div>
               {userWordData.map((word: WordProps)=> {
                return (
                    <Word key={word.id} {...word}/>
                    )
                   })}
                </div>

        </Wrapper>
    );
    }

const Wrapper = styled.div``

export default MyWords
