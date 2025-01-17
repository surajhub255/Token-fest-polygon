"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "@/components/common/Button";
import { Input, InputNumber, Radio, DatePicker } from "antd";
import { useProposal } from "@/ContextProviders/ProposalProvider";
import { enqueueSnackbar } from "notistack";
import Nav2 from "@/components/common/Nav/nav2";
import { useRouter } from 'next/navigation'

const CreateProposal = () => {
  const router = useRouter()
  const { setProposal } = useProposal();

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
  return (
    <>
      <main className="flex flex-col md:flex-row">

<div className="md:w-1/2 md:block hidden" style={{
  backgroundImage: `url('/form.png')`, backgroundSize: 'cover',
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
        setProposal(values);

        // Save values to localStorage
        localStorage.setItem('eventdata', JSON.stringify(values));

        enqueueSnackbar(`${values.title} has been created`, {
          variant: "success",
        });
        actions.setSubmitting(false);
        setTimeout(() => {
        router.push('/dashboard/started-events')
        },3000)
      }}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <Form>
          <div className="text-black text-2xl mb-1 font-semibold">
            Submit Event
          </div>
          <div className="text-black mb-6 bold italic">
            Submit your project events and ideas for community votes and crowdfunding
          </div>
          <div className="text-black flex flex-col gap-6">
            {/* Proposal Title */}
            <div>
              <label className="font-medium" htmlFor="title">
                Event Title
              </label>
              <div className="mt-2">
                <Input
                  style={{ background: "#4AA5F4" }}
                  className="rounded-full text-white"
                  required
                  value={values.title}
                  onChange={(e: { target: { value: string } }) => {
                    setFieldValue("title", e.target.value);
                  }}
                />
              </div>
            </div>

            <div>
              <label className="font-medium" htmlFor="venue">
                Event Venue
              </label>
              <div className="mt-2">
                <Input.TextArea
                  style={{ background: "#4AA5F4" }}
                  className="rounded-full text-white"
                  required
                  value={values.venue}
                  onChange={(e: { target: { value: string } }) => {
                    setFieldValue("venue", e.target.value);
                  }}
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="font-medium" htmlFor="description">
                Event Description
              </label>
              <div className="mt-2">
                <Input.TextArea
                  style={{ background: "#4AA5F4" }}
                  className="rounded-full text-white"
                  required
                  value={values.description}
                  onChange={(e: { target: { value: string } }) => {
                    setFieldValue("description", e.target.value);
                  }}
                />
              </div>
            </div>

            {/* Price per NFT & Funding Goal */}
            <div className="flex flex-col md:flex-row md:gap-8">
              <div>
                <label className="font-medium" htmlFor="priceperNFT">
                  Price per NFT
                </label>
                <div className="mt-2">
                  <InputNumber
                    style={{ background: "#4AA5F4" }}
                    className="rounded-full text-white"
                    required
                    value={values.priceperNFT}
                    onChange={(e) => {
                      setFieldValue("priceperNFT", e);
                    }}
                  />
                </div>
              </div>

              {/* <div>
                <label className="font-medium" htmlFor="funding_goal">
                  Funding Goal
                </label>
                <div className="mt-2">
                  <InputNumber
                    style={{ background: "#4AA5F4" }}
                    className="rounded-full text-white"
                    required
                    value={values.funding_goal}
                    onChange={(e) => {
                      setFieldValue("funding_goal", e);
                    }}
                  />
                </div>
              </div> */}
            </div>

            {/* Proposal Type */}
            <Radio.Group
              onChange={(e) => {
                setFieldValue("proposal_type", e.target.value);
              }}
              value={values.proposal_type}
            >
              <Radio value={"collab"} className="!font-raleway text-black">
                TokenFest Collab
              </Radio>
              <Radio value={"holder"} className="!font-raleway text-black">
                TokenFest Subscription
              </Radio>
            </Radio.Group>

            {/* Valid Till */}
            <div>
              <div>
                <label htmlFor="date" className="block mb-2">
                  Event Date
                </label>

                <DatePicker
                  style={{ background: "#4AA5F4" }}
                  className="rounded-full text-white"
                  onChange={(e) => {
                    setFieldValue("date", e);
                  }}
                />
              </div>
            </div>

          </div>

          <div className="mt-5">
            <Button
              style={{ color: "white", borderRadius: '9999px', background: "#0F4C81" }}
              className="hover:bg-sky-500"
              type="submit"
              _isSubmitting={isSubmitting}
              disabled={isSubmitting} variant={""}
            >
              Create Proposal
            </Button>
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

export default CreateProposal;
