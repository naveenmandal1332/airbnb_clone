import React from 'react';

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 cursor-pointer ">
      <div className="space-y-4 text-xs text-gray-800 ">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Airbn.org: disaster relief housing</p>
        <p>Combating discrimintaion</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOSTING</h5>
        <p>Airbnb your home</p>
        <p>AirCover for Hosts</p>
        <p>Explore hosting resources</p>
        <p>Vist our community forum</p>
        <p>How to host responsibly</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>AirCover</p>
        <p>Cancellation options</p>
        <p>Supporting people with disabilities</p>
        <p>Report a neighbourhood concern</p>
      </div>
    </div>
  );
}

export default Footer;
