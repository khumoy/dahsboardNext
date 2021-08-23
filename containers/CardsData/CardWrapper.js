import styled from 'styled-components'

export const CardWrapper = styled.div`
.container {

    .row{

        .swiper-button-prev{
                display: none !important;
            
           }
           
           .swiper-button-next{
           
            display: none !important;
           
           }
        .cards{
            height: 160px;
            width: 100%;
            border-radius: 20px;
            background-size: cover;
            background-repeat: no-repeat;
            /* background: linear-gradient(180deg, #197BBD 0%, #3391D0 100%); */
            /* background: url("https://w7.pngwing.com/pngs/266/465/png-transparent-sky-blue-brand-daytime-business-card-background-blue-graphic-blue-angle-other.png"); */
            overflow: hidden;
            padding: 15px;
            /* color: blue; */
            font-weight: 500;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

          
        }
        .progress {
            margin: 15px 0;
             background: rgba(25, 123, 189, 1);
            transition: 1s;
            height: 8px;
        }
        .goals {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-radius: 20px;
            
            font-size: 15px;
            font-weight: bold;
            padding: 10px 40px 10px 15px;
            width: 100%;
        }
    }
}
`