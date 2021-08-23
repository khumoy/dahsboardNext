import styled from 'styled-components'

export const AlbumWrapper = styled.div`
.container {
    /* padding: 20px 5px; */

    .row {
    padding: 20px;

    .cards {
        padding: 20px ;
        background-color: green;
        color: white;
        margin-bottom: 10px;
        border-radius: 10px 70px  10px 70px ;
        transition: .4s;

        :hover {
            border-radius: 10px ;
            transition: .4s;
            transform: scale(1.1);
            background-color: red

        }
    }
}
}

`;