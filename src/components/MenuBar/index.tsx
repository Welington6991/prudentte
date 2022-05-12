import React from 'react';
import {
    Container,
    ScrollHorizontal,
    ButtonMenuBar,
    TextButtonMenuBar,
    UnderlineTextButtonMenuBar,
    UnderlineMenuBar
} from './styles';

const MenuBar = () => {
    const infoMenu = [
        {
            name: 'Description',
            active: true
        },
        {
            name: 'Company',
            active: false
        },
        {
            name: 'Aplicant',
            active: false
        },
        {
            name: 'Salary',
            active: false
        }
    ];

    return (
        <Container>
            <UnderlineMenuBar />
            <ScrollHorizontal>
                {infoMenu.map((r, i) =>
                    <ButtonMenuBar>
                        <TextButtonMenuBar>{r.name}</TextButtonMenuBar>
                        {r.active && (<UnderlineTextButtonMenuBar />)}
                    </ButtonMenuBar>
                )}
            </ScrollHorizontal>
        </Container>
    );
};

export default MenuBar;
