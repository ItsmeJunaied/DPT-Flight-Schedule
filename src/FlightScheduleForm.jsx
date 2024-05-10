// eslint-disable-next-line no-unused-vars
import React from 'react';
import flightOffers from '../public/data.json';
const FlightScheduleForm = () => {

    // console.table(flightOffers)
    const offers = Array.isArray(flightOffers) ? flightOffers : flightOffers.flightOffer;
    return (
        <div className=' px-[300px]'>
            <div>
                <h1 className=' font-semibold mb-5'>{flightOffers.message}</h1>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table table-auto ">
                        <thead className=' bg-[#E5E7EB]'>
                            <tr>

                                <th className=' uppercase'>Flight</th>
                                <th className=' uppercase'>aircraft</th>
                                <th className=' uppercase'>class</th>
                                <th className=' uppercase'>fare</th>
                                <th className=' uppercase'>fare</th>
                                <th className=' uppercase'>departure</th>
                                <th className=' uppercase'>Arrival</th>
                                <th className=' uppercase'>duration</th>
                                <th className=' uppercase'>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {offers.map((offer, index) => (
                                <React.Fragment key={index}>
                                    {offer.itineraries.map((itinerary, itineraryIndex) => (
                                        <tr className={`border-b-2 border-red-300 text-[#808080] ${index % 2 === 0 ? 'bg-[#F3F4F6]' : ' bg-[#E5E7EB]'}`} key={`${index}-${itineraryIndex}`}>
                                           
                                            <td className=''>
                                                {itinerary.segments.map((segment, segmentIndex) => (
                                                    <p key={`${index}-${itineraryIndex}-${segmentIndex}`}>{segment.marketingCarrier} {segment.flightNumber}</p>
                                                ))}
                                            </td>
                                            <td>
                                                {itinerary.segments.map((segment, segmentIndex) => (
                                                    <p key={`${index}-${itineraryIndex}-${segmentIndex}`}>{segment.aircraft}</p>
                                                ))}
                                            </td>
                                            <td>
                                                {offer.class[itineraryIndex].map((c, cIndex) => (
                                                    <p key={`${index}-${itineraryIndex}-${cIndex}`}>{c}</p>
                                                ))}
                                            </td>
                                            <td>
                                                {offer.fareBasis[itineraryIndex].map((f, fIndex) => (
                                                    <p key={`${index}-${itineraryIndex}-${fIndex}`}>{f}</p>
                                                ))}
                                            </td>
                                            <td>
                                                {offer.seat[itineraryIndex].map((s, sIndex) => (
                                                    <p key={`${index}-${itineraryIndex}-${sIndex}`}>{s}</p>
                                                ))}
                                            </td>
                                            <td>
                                                {itinerary.segments.map((segment, segmentIndex) => (
                                                    <p key={`${index}-${itineraryIndex}-${segmentIndex}`}>{segment.departure.iataCode} {segment.departure.at}</p>
                                                ))}
                                            </td>
                                            <td>
                                                {itinerary.segments.map((segment, segmentIndex) => (
                                                    <p key={`${index}-${itineraryIndex}-${segmentIndex}`}>
                                                        <div className=' flex  flex-row justify-between items-center'>
                                                            <div>{segment.arrival.iataCode} {segment.arrival.at}</div>
                                                            <div><p>---</p></div>
                                                        </div>
                                                    </p>
                                                ))}
                                            </td>
                                            <td>
                                                <p>{itinerary.duration}</p>
                                            </td>
                                            <td className=' flex flex-col justify-start '>
                                                <div>
                                                    <p className=' pl-5'>{offer.price}</p>
                                                </div>
                                                <div>
                                                    <button className=' uppercase px-5 py-2 bg-[#2E3791] text-white rounded-md'>Search</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default FlightScheduleForm;