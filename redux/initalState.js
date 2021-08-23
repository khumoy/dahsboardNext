
import { faShoppingCart, faTruck, faUser, faUtensils } from '@fortawesome/free-solid-svg-icons';
const initalState = {
    todos: [],
    albums: [],
    photos: [],
    isSidebarShow: true,
    cards: [
        {
            company: "cloudcash",
            account: "PREMIUM ACCOUNT",
            cardnumber: "5563 **** **** 2322 ",
            cardholder: "Mike Smith",
            expiredath: "06/21",
            back: "https://png.pngtree.com/thumb_back/fh260/back_our/20190623/ourmid/pngtree-green-geometric-business-card-background-image_243067.jpg",
            color: "black",
            currentBalance: '4560',
            income: '350',
            outcome: '600',
            progress: '60',
            shop: '52',
            truck: '21',
            airplane: '74'

        },
        {
            company: "Xalq Bank",
            account: "PREMIUM ACCOUNT",
            cardnumber: "3223 **** **** 6772 ",
            cardholder: "Alimardon",
            expiredath: "02/22",
            back: "https://apisproductions.com/wp-content/uploads/2020/09/download-1.jpg",
            color: "black",
            currentBalance: '5000',
            income: '700',
            outcome: '1000',
            progress: '100',
            shop: '80',
            truck: '90',
            airplane: '15'

        },
        {
            company: "inFinBank",
            account: "PREMIUM ACCOUNT",
            cardnumber: "6461 **** **** 7743 ",
            cardholder: "Ruslan",
            expiredath: "01/20",
            back: "https://image.shutterstock.com/image-vector/modern-dark-blue-background-gradient-260nw-1706841958.jpg",
            color: "rgba(220, 219, 221, 1)",
            currentBalance: '1000',
            income: '200',
            outcome: '50',
            progress: '10',
            shop: '30',
            truck: '45',
            airplane: '20'

        }

    ],
    transfer: [
        {
            icon: faShoppingCart,
            title: " Tesco Market",
            type: "Shopping",
            data1: "13 Dec 2020",
            balanc: "75.67"
        },
        {
            icon: faTruck,
            title: "ElectroMen Maeket",
            type: "Shopping",
            data1: "14 Dec 2020",
            balanc: "250.00"
        },
        {
            icon: faUtensils,
            title: "Fiorgio Restaurant",
            type: "Food",
            data1: "07 Dec 2020",
            balanc: "19.50"
        },
        {
            icon: faUser,
            title: "Jhon Mathew Kayne",
            type: "Sport",
            data1: "06 Dec 2020",
            balanc: "350"
        },
        {
            icon: faUser,
            title: " Tesco Market",
            type: "Sport",
            data1: "31 Nov 2020",
            balanc: "340"
        }
    ]
}

export default initalState;