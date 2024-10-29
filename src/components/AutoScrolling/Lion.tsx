"use client";

import React from "react";
import { AppContainer, Wrapper, Marquee, MarqueeGroup, TextGroup } from "./LionStyles"; // Importando os estilos

function Lion() {
    const row1Text = "O LEÃO DA SUA VIZINHANÇA"; // Frase que será exibida

    return (
        <AppContainer>
            <Wrapper>
                <Marquee>
                    <MarqueeGroup>
                        {/* Exibindo a frase repetidamente */}
                        {[...Array(5)].map((_, index) => (
                            <TextGroup key={index}>{row1Text}</TextGroup>
                        ))}
                    </MarqueeGroup>
                </Marquee>
            </Wrapper>
        </AppContainer>
    );
}

export default Lion;
