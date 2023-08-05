import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import { format, parseISO, isValid } from 'date-fns';

function search() {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuest } = router.query;

  const formattedStartDate =
    startDate && isValid(parseISO(startDate)) ? format(parseISO(startDate), 'dd MMMM yy') : '';

  const formattedEndDate =
    endDate && isValid(parseISO(endDate)) ? format(parseISO(endDate), 'dd MMMM yy') : '';

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuest} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuest} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default search;
