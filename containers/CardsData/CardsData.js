import React, { useState } from 'react'
import { CardWrapper } from './CardWrapper'
import SwiperCore, { EffectFlip, Pagination, Navigation } from 'swiper/core'
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrush, faGamepad, faMountain, faPlane, faPlusCircle, faShoppingCart, faTruck, faUser, faUtensils } from '@fortawesome/free-solid-svg-icons';

SwiperCore.use([EffectFlip, Pagination, Navigation]);


const CardsData = () => {

    const [activeIndex, setActiveIndex] = useState(0);


    const cards = useSelector(state => state.cards);

    const trans = useSelector(state => state.transfer);

    const card = cards[activeIndex];

    return (
        <CardWrapper>
            <header className="p-3 " >
                <h3>Weekly sumup</h3>
            </header>
            <div className="container">
                <div className="row px-3">
                    <div className="col-sm-6 col-md-6 shadow rounded p-4 mb-4">
                        <h4>Cards </h4>
                        <div className="row ">
                            <div className="col-sm-6 col-md-8  ">
                                <Swiper onSlideChange={(e) => { setActiveIndex(e.activeIndex) }} effect={'flip'} grabCursor={true} pagination={true} navigation={true} className="mySwiper">
                                    {cards.map(v => <SwiperSlide >
                                        <div style={{ background: `url(${v.back})`, color: `${v.color}` }} className="cards shadow ">
                                            <div className="pb-2" >
                                                <p className="p-0 m-0" style={{ fontSize: `10px` }}>{v.company} <br />
                                                    <span className="p-0 m-0" style={{ fontSize: `8px` }}>{v.account}</span>
                                                </p>
                                            </div>
                                            <div className="py-1">
                                                <p className="text-center fs-4">{v.cardnumber}</p>
                                            </div>
                                            <div className=" d-flex py-2">
                                                <p style={{ fontSize: `7px`, marginRight: "15px" }}>
                                                    <span style={{ fontSize: `10px` }}>Card holder</span>
                                                    <br />
                                                    {v.cardholder}
                                                </p>
                                                <p style={{ fontSize: `7px` }}> <span style={{ fontSize: `10px` }}>Expire date</span>
                                                    <br />
                                                    {v.expiredath}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>)}
                                </Swiper>
                                <div className="rounded-pill " style={{ height: "8px", backgroundColor: "silver" }}> <div style={{ width: `${card.progress}% ` }} className="p-0 progress rounded-pill" > </div></div>
                            </div>
                            <div className="col-md-4 text-end d-flex flex-column text-secondary fw-bold ">

                                <span className=" text-primary fw-bold fs-4 py-0"> $ {card.currentBalance}  </span>
                                < span className="py-0" style={{ fontSize: `13px` }}>Current Balans</span>
                                <span className=" text-success fw-bold fs-4 py-0"> $ {card.income}   </span>
                                <span style={{ fontSize: `13px` }}>Income</span>
                                <span className=" text-danger fw-bold fs-4 py-0"> $ {card.outcome}  </span>
                                <span style={{ fontSize: `13px` }}>Outcome</span>

                            </div>

                        </div>
                    </div>
                    <div className="ms-3 col-sm-4  col-md-5  p-4">
                        <h4>Goals <FontAwesomeIcon color="yellow" className="p-0 rounded-pill bg-dark" icon={faPlusCircle} /></h4>
                        <div class="row ">
                            <div className="col-md-4">
                                <div className="shadow goals">
                                    <span className="mb-3">$550 <br />
                                        <span style={{ fontSize: `10px`, color: "silver" }}>12/20/20</span>
                                    </span>

                                    <span > <FontAwesomeIcon className="mb-1" color="lightblue" icon={faMountain} />
                                        <span style={{ fontSize: `14px` }} >Holideys</span>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="shadow goals">
                                    <span className="mb-3">$200 <br />
                                        <span style={{ fontSize: `10px`, color: "silver" }}>12/20/20</span>
                                    </span>

                                    <span > <FontAwesomeIcon className="mb-1" color="orange" icon={faBrush} />
                                        <span style={{ fontSize: `14px` }}>Renovation</span>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="shadow goals">
                                    <span className="mb-3">$820 <br />
                                        <span style={{ fontSize: `10px`, color: "silver" }}>12/20/20</span>
                                    </span>

                                    <span > <FontAwesomeIcon className="mb-1" color="green" icon={faGamepad} />
                                        <span style={{ fontSize: `14px` }}>Xbox</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-6 shadow rounded p-4">
                        <div>
                            <h4>Transaction</h4>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Reciever</th>
                                        <th>Type</th>
                                        <th>Date</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody style={{ fontSize: "13px" }}>
                                    {trans.map(v => <tr>
                                        <td scope="row"><FontAwesomeIcon icon={v.icon} /> {v.title}</td>
                                        <td>{v.type}</td>
                                        <td>{v.data1}</td>
                                        <td>${v.balanc}</td>
                                    </tr>)}

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-5">
                        <h4>Outcome Statistics</h4>
                        <div className="row px-3">
                            <div className="col-md-12">
                                <div>
                                    <div className="static py-2" >
                                        <div style={{ display: 'inline-block', backgroundColor: "lightpink", padding: "7px", borderRadius: "5px" }}>
                                            <FontAwesomeIcon color="orange" icon={faShoppingCart} />

                                        </div>
                                        <div className="rounded-pill " style={{ height: "8px", backgroundColor: "silver" }}>
                                            <div style={{ width: `${card.shop}% ` }} className="p-0 progress bg-warning  rounded-pill" > </div>
                                        </div>
                                        <div className="text-secondary fw-bold">
                                            <span>Shopping</span>
                                            <span className="ms-2 text-warning">{card.shop}%</span></div>
                                    </div>
                                    <div className="static py-2" >
                                        <div style={{ display: 'inline-block', backgroundColor: "lightgreen", padding: "7px", borderRadius: "5px" }}>
                                            <FontAwesomeIcon color="green" icon={faTruck} />

                                        </div>
                                        <div className="rounded-pill " style={{ height: "8px", backgroundColor: "silver" }}>
                                            <div style={{ width: `${card.truck}% ` }} className="p-0 progress bg-success  rounded-pill" ></div>
                                        </div>
                                        <div className="text-secondary fw-bold">
                                            <span>ElectroMen</span>
                                            <span className="ms-2 text-success">{card.truck}%</span></div>
                                    </div>
                                    <div className="static py-2" >
                                        <div style={{ display: 'inline-block', backgroundColor: "lightblue", padding: "7px", borderRadius: "5px" }}>
                                            <FontAwesomeIcon color="blue" icon={faPlane} />
                                        </div>
                                        <div className="rounded-pill " style={{ height: "8px", backgroundColor: "silver" }}>
                                            <div style={{ width: `${card.airplane}% ` }} className="p-0 progress rounded-pill" > </div>
                                        </div>
                                        <div className="text-secondary fw-bold" >
                                            <span>Travels</span>
                                            <span className="ms-2 text-primary">{card.airplane}%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CardWrapper >
    )
}
export default CardsData
