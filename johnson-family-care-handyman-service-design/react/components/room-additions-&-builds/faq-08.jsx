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
            Straight answers about permits, timelines, and costs for your room
            addition or conversion
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
              Do I need a permit?
            </p>
            <p>
              Most room additions and conversions require council approval or a
              complying development certificate. We handle the paperwork and
              work with certifiers to keep the process moving. You will know
              exactly where things stand before we start.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              How long does it take?
            </p>
            <p>
              A standard room addition usually takes four to eight weeks once we
              start on site. Garage and granny flat conversions can run longer
              depending on plumbing and electrical work. We give you a clear
              schedule before we begin and stick to it.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              What does the quote include?
            </p>
            <p>
              Your quote covers all labor, materials, and site cleanup. There
              are no hidden costs. If something unexpected comes up during the
              build, we talk to you before any extra work happens.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Can you manage the whole project?
            </p>
            <p>
              Yes. We coordinate any licensed electricians and plumbers needed
              for your build. You deal with one family team from the first
              measure to the final walkthrough.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Do you clean up after yourselves?
            </p>
            <p>
              Always. We sweep and tidy the site at the end of every day. When
              the job is done, we remove all rubbish and leave your home ready
              to use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
