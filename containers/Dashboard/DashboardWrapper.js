import styled from 'styled-components'

const DashboardWrapper = styled.div`

display: flex;

.sideBar {
    width: 0 !important;
    background: url("https://coolwallpapers.me/picsup/6071181-gran-turismo-sport-games-4k-2019-games-hd-honda-nsx-honda-artstation.jpg");
    background-size: cover;
    object-fit: cover;
    color: white;
    height: 100vh;
    position: sticky;
    top: 0;
    overflow: hidden;
    transition: .3s;
    ul {
        padding: 0;
        li {
            list-style-type:none;
            a {
                display: block;
                text-decoration: none;
                background-color: white;
                color: black;
                margin-bottom: 15px;
                border-radius: 10px;
                padding: 7px 10px;
                &.active {
                    background-color:blueviolet;
                    color: white;
                    transition: .3s;
                }
            }
        }
    }
    &.show {
        width: 300px !important;
        padding: 20px 40px;
        transition: .3s;
    }
}

.rightBar {
    flex: 1;
    .header {
        background: url("https://wallpapercrafter.com/desktop/72698-gran-turismo-sport-games-4k-2019-games-hd-honda-nsx-honda-artstation.jpg");
        background-size: cover;
    }
}
`

export default DashboardWrapper


