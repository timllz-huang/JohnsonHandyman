"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Faq8_5() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">FAQs</h2>
          <p className="text-medium">
            How quickly we can get to your job and what our schedule looks like
            right now.
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
              How soon can you start?
            </p>
            <p>
              Small repairs can often be booked within a week. Major works
              depend on our current schedule, but we will give you a clear start
              date.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              How long does a bathroom renovation take?
            </p>
            <p>
              Most bathroom renovations take two to three weeks. We will give
              you a timeline in your quote and stick to it.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              How long does a deck take?
            </p>
            <p>
              A standard timber deck usually takes one to two weeks. Weather can
              affect the schedule, but we will keep you posted.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Can you work around my schedule?
            </p>
            <p>
              We do our best. We can often arrange to be on site on specific
              days if you need to be home.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Do you work weekends?
            </p>
            <p>
              We can arrange Saturday work for smaller jobs. For major works, we
              generally work Monday to Friday.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
