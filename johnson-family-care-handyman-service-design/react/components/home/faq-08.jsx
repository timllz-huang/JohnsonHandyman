"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Faq8() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">FAQs</h2>
          <p className="text-medium">
            Straight answers to the questions we hear most from homeowners
            across Western Sydney
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Are you fully insured?
            </p>
            <p>
              Yes. We carry full public liability insurance and all our work is
              completed to Australian standards. You can ask to see our
              certificates before we start any job.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              How much will it cost?
            </p>
            <p>
              Every job is different so we give you a clear written quote after
              visiting the site. The quote is free and there are no hidden costs
              added later.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              How long does a job take?
            </p>
            <p>
              Small repairs are usually done in a single visit. Larger jobs like
              bathroom renovations or room additions take longer but we give you
              a timeline upfront and stick to it.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Do you clean up after yourselves?
            </p>
            <p>
              Always. We treat your home like our own. The site is swept,
              rubbish is removed, and the space is left tidy before we call the
              job done.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              What areas do you cover?
            </p>
            <p>
              We work throughout Western Sydney including Penrith, Blacktown,
              Parramatta, and the surrounding suburbs. If you are just outside
              these areas give us a call and we will see what we can do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
