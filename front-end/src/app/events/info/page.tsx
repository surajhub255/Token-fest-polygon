"use client";
import { useEffect, useState} from "react";
import { Formik, Form } from "formik";
import {  Radio } from "antd";
import { enqueueSnackbar } from "notistack";
import Nav2 from "@/components/common/Nav/nav2";

const EventsData = () => {

  interface Proposal {
    description: string;
    venue: string;
    title: string;
    priceperNFT: number;
    funding_goal: number;
    proposal_type: string;
    date: string;
  }

  interface FormMessage {
    description: string;
    venue: string;
    title: string;
    priceperNFT: number;
    funding_goal: number;
    proposal_type: string;
    date: any;
  }
  const initialValues: FormMessage = {
    title: "",
    description: "",
    venue: "",
    priceperNFT: 1,
    funding_goal: 20,
    proposal_type: "",
    date: ``,
  };


  const [proposal, setProposal] = useState<Proposal | null>(null);

  useEffect(() => {
    const fetchProposal = async () => {
      // Retrieve the proposal from localStorage
      const storedProposal = await localStorage.getItem('eventdata');
      console.log("fetchdata", storedProposal);
      
      if (storedProposal) {
        // Parse the JSON string back to an object
        const parsedProposal = await JSON.parse(storedProposal);
        setProposal(parsedProposal);
        console.log("eventsdata", parsedProposal);
      }
    };

    fetchProposal();
  }, []);

  return (
    <>
      <main className="flex flex-col md:flex-row">

<div className="md:w-1/2 md:block hidden" style={{
  backgroundImage: `url('/form2.png')`, backgroundSize: 'cover',
  height: '780px',
}}>
  <div className="flex gap-2 items-center p-6 px-16">
    <div className="text-2xl">
      <img
        src="/nav.png"
        alt=""
        width="30px"
        height="10px"
      />
    </div>
    <div className="text-black text-xl font-semibold">
      <a href="/">TokenFest</a>
    </div>
  </div>
</div>

<div className="md:w-1/2 text-sm bg-blue-200">
  <div className="">
    <Nav2 />
  </div>
  <div className="p-6 md:px-16 py-10">
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        enqueueSnackbar(`${values.title} has been created`, {
          variant: "success",
        });
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <Form>
          <div className="text-black text-2xl mb-10 font-semibold">
            The Event
          </div>
          <div className="text-black flex flex-col gap-6">
            {/* Proposal Title */}
            <div>
              <label className="font-bold" htmlFor="title">
                Event Title
              </label>
              <div className="mt-2">
                {proposal?.title}
              </div>
            </div>

            <div>
              <label className="font-bold" htmlFor="venue">
                Event Venue
              </label>
              <div className="mt-2">
                {proposal?.venue}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="font-bold" htmlFor="description">
                Event Description
              </label>
              <div className="mt-2">
                {proposal?.description}
              </div>
            </div>

            {/* Price per NFT & Funding Goal */}
            <div className="flex flex-col md:flex-row md:gap-8">
              <div>
                <label className="font-bold" htmlFor="priceperNFT">
                  Price per NFT
                </label>
                <div className="mt-2">
                  {proposal?.priceperNFT}
                </div>
              </div>

            
            </div>

            {/* Proposal Type */}
            <div>
              <div>
                <label htmlFor="date" className="block mb-2 font-bold">
                  Event Type
                </label>
                
                <div className="mt-2">
                {proposal?.proposal_type}
                </div>
              </div>
            </div>

            {/* Valid Till */}
            <div>
              <div>
                <label htmlFor="date" className="block mb-2 font-bold">
                  Event Date
                </label>
                
                <div className="mt-2">
                {proposal?.date ? new Date(proposal?.date).toDateString() : 'Invalid date'}
                </div>
              </div>
            </div>

          </div>
        </Form>
      )}
    </Formik>
  </div>
</div>
</main>
    </>
  );
};

export default EventsData;
