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
            planning a bathroom renovation.
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
              How long does a renovation take?
            </p>
            <p>
              A standard full refit takes two to three weeks from demolition to
              final clean. Larger bathrooms or jobs with structural changes can
              take longer. We give you a clear schedule before we start.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Do you handle waterproofing properly?
            </p>
            <p>
              Yes. Waterproofing is done to Australian standards and we provide
              the compliance certificate. We never cut corners on the work you
              cannot see.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Can you supply materials and fixtures?
            </p>
            <p>
              We can supply everything or work with your chosen tiles, vanities,
              and tapware. We will advise you on what lasts and what is worth
              the money.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Do I need to be home during the work?
            </p>
            <p>
              Not at all. Many of our clients are busy families or older
              homeowners. We keep the site secure, clean up daily, and keep you
              updated by phone.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              How much does a bathroom renovation cost?
            </p>
            <p>
              It depends on size, fixtures, and whether we are moving plumbing.
              We provide a detailed written quote after a free on-site visit so
              there are no surprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
